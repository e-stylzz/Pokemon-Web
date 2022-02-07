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
  showDebug = false;
  attackingNumber!: number;
  attackingCard!: Card;
  defendingNumber!: number;
  defendingCard!: Card;

  constructor(public cardService: CardService, private router: Router) {}

  ngOnInit(): void {
    this.getCards();
  }

  startBattle() {
    this.beginVisible = false;

    this.attackingNumber = this.getRandomNumber(0, 1);
    this.Messages.push(
      `${this.Cards[this.attackingNumber].name} will go first!`
    );

    this.processOpeningMessages();

    do {
      this.attack();
    } while (this.Cards[0].hp > 0 && this.Cards[1].hp > 0);

    if (this.Cards[0].hp <= 0) {
      this.Messages.push(`${this.Cards[1].name} is the winner!`);
    } else {
      this.Messages.push(`${this.Cards[0].name} is the winner!`);
    }
    this.newVisible = true;
    this.cardService.clearBattle();
  }

  processOpeningMessages() {
    if (this.Cards[0].strength === this.Cards[1].type) {
      // Card 0 is strong against card 1 type.
      this.Messages.push(
        `${this.Cards[0].name} is strong against ${
          this.Cards[1].type
        } and will take ${this.Cards[0].strengthValue.substring(
          1
        )} less damage per attack.`
      );
    }
    if (this.Cards[1].strength === this.Cards[0].type) {
      // Card 1 is strong against card 0 type.
      this.Messages.push(
        `${this.Cards[1].name} is strong against ${
          this.Cards[0].type
        } and will take ${this.Cards[1].strengthValue.substring(
          1
        )} less damage per attack.`
      );
    }
    if (this.Cards[0].weakness === this.Cards[1].type) {
      // Card 0 is weak against card 1 type.
      this.Messages.push(
        `${this.Cards[0].name} is weak against ${this.Cards[1].type} and will receive ${this.Cards[1].weaknessValue} damage.`
      );
    }
    if (this.Cards[1].weakness === this.Cards[0].type) {
      // Card 1 is weak against card 0 type.
      this.Messages.push(
        `${this.Cards[1].name} is weak against ${this.Cards[0].type} and will receive ${this.Cards[0].weaknessValue} damage.`
      );
    }
  }

  attack() {
    this.attackingCard = this.Cards[this.attackingNumber];
    console.log('Attacking Card', this.attackingCard);
    if (this.attackingNumber === 1) {
      this.defendingNumber = 0;
      this.defendingCard = this.Cards[this.defendingNumber];
    } else {
      this.defendingNumber = 1;
      this.defendingCard = this.Cards[this.defendingNumber];
    }

    let randomAttack = this.getRandomNumber(
      0,
      this.attackingCard.attacks.length - 1
    );

    let damage = this.attackingCard.attacks[randomAttack].damage;
    // determine if defending card is strong the attacker.
    if (this.defendingCard.strength === this.attackingCard.type) {
      console.log('Defending card is resistant to the attacker');
      console.log(
        'Strength Value ',
        parseInt(this.defendingCard.strengthValue)
      );

      damage =
        this.attackingCard.attacks[randomAttack].damage +
        parseInt(this.defendingCard.strengthValue);
    }

    // determine if defending card is weak the attacker.
    if (this.defendingCard.weakness === this.attackingCard.type) {
      console.log('Defending card is weak to the attacker');

      let value = this.defendingCard.weaknessValue;
      console.log('Weakness Value Raw, ', value);
      let parsedValue = parseInt(value);
      console.log('Weakness Value Parsed, ', parsedValue);

      if (value.charAt(0) == '×') {
        // x2
        console.log('The weakness is multiplied by 2');
        damage = this.attackingCard.attacks[randomAttack].damage * 2;
      } else if (value.charAt(0) == '+') {
        // just add the number
        console.log('The weakness is added');
        damage = this.attackingCard.attacks[randomAttack].damage + parsedValue;
      } else {
        console.log(
          'The value didnt start witha  plus or an x',
          value.charAt(0)
        );
      }

      if (damage < 0) {
        damage = 0;
      }
    }

    this.Cards[this.defendingNumber].hp -= damage;

    this.Messages.push(
      `${this.attackingCard.name} does ${this.attackingCard.attacks[randomAttack].name} causing ${damage} damage!`
    );

    this.attackingCard = {} as Card;
    this.defendingCard = {} as Card;
    this.swapPlayers();
  }

  getCards() {
    this.Cards = this.cardService.getBattle();
    console.log('Cards: ', this.Cards);
  }

  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  newMatch() {
    this.cardService.clearBattle();
    this.router.navigate(['/']);
  }

  toggleDebug() {
    this.showDebug = !this.showDebug;
  }

  swapPlayers() {
    if (this.attackingNumber === 0) {
      this.attackingNumber = 1;
      this.attackingCard = this.Cards[1];
      this.defendingNumber = 0;
      this.defendingCard = this.Cards[0];
    } else {
      this.attackingNumber = 0;
      this.attackingCard = this.Cards[0];
      this.defendingNumber = 1;
      this.defendingCard = this.Cards[1];
    }
  }
}
