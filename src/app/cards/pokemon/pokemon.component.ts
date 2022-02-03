import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  setId: any;
  Cards: any = [];

  constructor(private route: ActivatedRoute, public cardService: CardService) {}

  ngOnInit(): void {
    this.setId = this.route.snapshot.paramMap.get('id');
    this.getCards();
  }

  getCards() {
    return this.cardService.getCardsbyPokemon(this.setId).subscribe((res) => {
      console.log('Getting Cards', this.setId, res);
      this.Cards = res;
    });
  }
}
