import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { RegionsHomeComponent } from './regions-home/regions-home.component';

const routes: Routes = [
  {
    path: '',
    component: RegionsHomeComponent,
  },
  {
    path: ':id',
    component: PokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionsRoutingModule { }
