import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsHomeComponent } from './regions-home/regions-home.component';
import { PokemonComponent } from './pokemon/pokemon.component';


@NgModule({
  declarations: [
    RegionsHomeComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    RegionsRoutingModule
  ]
})
export class RegionsModule { }
