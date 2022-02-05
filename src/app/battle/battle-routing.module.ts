import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattleHomeComponent } from './battle-home/battle-home.component';

const routes: Routes = [
  {
    path: '',
    component: BattleHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BattleRoutingModule {}
