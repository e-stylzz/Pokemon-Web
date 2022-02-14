import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/pokemon/pokemon';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  Pokemon: any = [];
  regionId: any;

  constructor(private route: ActivatedRoute, private regionService: RegionService, private router: Router) { }

  ngOnInit(): void {
    this.regionId = this.route.snapshot.paramMap.get('id');
    this.getRegions();
  }

  getRegions() {
    return this.regionService.getRegionById(this.regionId).subscribe((res) => {
      console.log('Region with Pokemon: ', res);
      this.Pokemon = res[0].pokemon;
    })
  }

  openPokemon(pokemon: Pokemon) {
    this.router.navigate(['cards/pokemon/' + pokemon.id]);
  }

}
