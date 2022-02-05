import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { PokemonSearchPipe } from '../shared/pipes/pokemon-search.pipe';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    HomeComponent,
    PokemonSearchPipe,
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class PokemonModule { }
