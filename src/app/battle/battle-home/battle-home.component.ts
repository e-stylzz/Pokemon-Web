import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/cards/card';
import { CardService } from 'src/app/cards/card.service';

@Component({
  selector: 'app-battle-home',
  templateUrl: './battle-home.component.html',
  styleUrls: ['./battle-home.component.scss'],
})
export class BattleHomeComponent implements OnInit {
  Cards: Card[] = [];
  ActivePlayer!: number;
  PreviousPlayer!: number;
  Messages: any = [];
  beginVisible = true;
  newVisible = false;

  constructor(public cardService: CardService, private router: Router) {}

  ngOnInit(): void {
    this.getCards();
  }

  startBattle() {
    this.beginVisible = false;

    this.ActivePlayer = this.getRandomNumber(0, 1);
    this.Messages.push(`${this.Cards[this.ActivePlayer].name} will go first!`);

    do {
      this.attack();
    } while (this.Cards[0].hp > 0 && this.Cards[1].hp > 0);

    if (this.Cards[0].hp <= 0) {
      this.Messages.push(`${this.Cards[1].name} is the winner!`);
    } else {
      this.Messages.push(`${this.Cards[0].name} is the winner!`);
    }
    this.newVisible = true;
  }

  attack() {
    //console.log('Active Player: ', this.ActivePlayer);
    let attackingCard = this.Cards[this.ActivePlayer];
    let player = this.ActivePlayer;

    let randomAttack = this.getRandomNumber(
      0,
      attackingCard.attacks.length - 1
    );
    console.log('Random Attack number: ', randomAttack);
    this.Messages.push(
      `${attackingCard.name} does ${attackingCard.attacks[randomAttack].name} causing ${attackingCard.attacks[randomAttack].damage}!`
    );
    this.PreviousPlayer = this.ActivePlayer;

    if (player === 0) {
      this.ActivePlayer = 1;
    } else {
      this.ActivePlayer = 0;
    }
    console.log('Active Player: ', this.ActivePlayer);
    this.Cards[this.ActivePlayer].hp =
      this.Cards[this.ActivePlayer].hp -
      this.Cards[this.PreviousPlayer].attacks[0].damage;
    //console.log('Player 0 HP = ', this.Cards[0].hp);
    //console.log('Player 1 HP = ', this.Cards[1].hp);
  }

  getCards() {
    this.Cards = this.cardService.getBattle();
    console.log('Cards: ', this.Cards);
  }

  getFirstPlayer(min: number, max: number) {
    // min and max included
    this.ActivePlayer = Math.floor(Math.random() * (max - min + 1) + min);
    console.log('First Player, ', this.ActivePlayer);
    this.Messages.push(`${this.Cards[this.ActivePlayer].name} will go first!`);
  }

  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  newMatch() {
    this.cardService.clearBattle();
    this.router.navigate(['/']);
  }
}
