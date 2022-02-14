import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'sets',
    loadChildren: () => import('./sets/sets.module').then((m) => m.SetsModule),
  },
  {
    path: 'pokemon',
    loadChildren: () =>
      import('./pokemon/pokemon.module').then((m) => m.PokemonModule),
  },
  {
    path: 'cards',
    loadChildren: () =>
      import('./cards/cards.module').then((m) => m.CardsModule),
  },
  {
    path: 'battle',
    loadChildren: () =>
      import('./battle/battle.module').then((m) => m.BattleModule),
  },
  {
    path: 'regions',
    loadChildren: () =>
      import('./regions/regions.module').then((m) => m.RegionsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
