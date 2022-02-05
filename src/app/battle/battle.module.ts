import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BattleRoutingModule } from './battle-routing.module';
import { BattleHomeComponent } from './battle-home/battle-home.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    BattleHomeComponent
  ],
  imports: [
    CommonModule,
    BattleRoutingModule,
    MaterialModule
  ]
})
export class BattleModule { }
