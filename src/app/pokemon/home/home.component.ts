import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  Pokemon: any = [];

  constructor(public pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    return this.pokemonService.getPokemon().subscribe((res) => {
      console.log('Getting Pokemon', res);
      this.Pokemon = res;
    });
  }

  openPokemon(pokemon: Pokemon) {
    this.router.navigate(['cards/pokemon/' + pokemon.id]);
  }
}
