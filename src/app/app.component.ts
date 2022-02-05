import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BattleService } from './battle/battle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'PokemonWeb';

  isBattleMode!: Observable<boolean>;

  constructor(private battleService: BattleService) {}

	ngOnInit() {
    this.isBattleMode = this.battleService.isBattleMode;
	}

  toggleBattleMode(checked: boolean) {
		this.battleService.setBattleMode(checked);
	}


}
