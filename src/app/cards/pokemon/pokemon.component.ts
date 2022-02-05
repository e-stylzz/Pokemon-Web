import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BattleService } from 'src/app/battle/battle.service';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  setId: any;
  Cards: Card[] = [];
  isBattleMode!: Observable<boolean>;

  constructor(private route: ActivatedRoute, public cardService: CardService, public battleService: BattleService) {}

  ngOnInit(): void {
    this.setId = this.route.snapshot.paramMap.get('id');
    this.getCards();
    this.isBattleMode = this.battleService.isBattleMode;
  }

  getCards() {
    return this.cardService.getCardsbyPokemon(this.setId).subscribe((res) => {
      console.log('Getting Cards', this.setId, res);
      this.Cards = res;
    });
  }

  addCard(card: Card) {
    console.log('Card', card);
    this.cardService.addCardtoBattle(card);

    this.Cards.forEach((c) => {
      if (c.id === card.id) {
        c.clicked = true;
      }
    });
  }
}
