import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { HomeComponent } from './home/home.component';
import { SetComponent } from './set/set.component';
import { PokemonComponent } from './pokemon/pokemon.component';


@NgModule({
  declarations: [
    HomeComponent,
    SetComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule
  ]
})
export class CardsModule { }
