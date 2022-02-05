import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  constructor() { }

  private _battleMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
	isBattleMode = this._battleMode.asObservable();

	setBattleMode(isBattleMode: boolean) {
    console.log('Battle mode toggled', isBattleMode);
		this._battleMode.next(isBattleMode);
	}
}
