import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BattleService } from 'src/app/battle/battle.service';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss'],
})
export class SetComponent implements OnInit {
  setId: any;
  Cards: Card[] = [];
  isBattleMode!: Observable<boolean>;

  constructor(private route: ActivatedRoute, public cardService: CardService, public battleService : BattleService) {}

  ngOnInit(): void {
    this.setId = this.route.snapshot.paramMap.get('id');
    this.getCards();
    this.isBattleMode = this.battleService.isBattleMode;
    console.log('Is Battle Mode (Set)?', this.isBattleMode)
  }

  getCards() {
    return this.cardService.getCardsbySet(this.setId).subscribe((res) => {
      console.log('Getting Cards', res);
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
