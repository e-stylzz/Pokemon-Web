import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BattleRoutingModule } from './battle-routing.module';
import { BattleHomeComponent } from './battle-home/battle-home.component';


@NgModule({
  declarations: [
    BattleHomeComponent
  ],
  imports: [
    CommonModule,
    BattleRoutingModule
  ]
})
export class BattleModule { }
