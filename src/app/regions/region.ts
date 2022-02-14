import { Pokemon } from "../pokemon/pokemon";

export interface Region {
    id: number;
    name: string;
    pokemon?: Pokemon;
  }
  