import { Attack } from './attack';

export interface Card {
  id: string;
  hp: number;
  imageSmall: string;
  name: string;
  attacks: Array<Attack>;
}
