import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, public cardService: CardService) {}

  ngOnInit(): void {
    this.setId = this.route.snapshot.paramMap.get('id');
    this.getCards();
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
