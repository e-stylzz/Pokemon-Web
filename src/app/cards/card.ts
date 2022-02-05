import { Attack } from './attack';

export interface Card {
  id: string;
  hp: number;
  imageSmall: string;
  imageLarge: string;
  name: string;
  attacks: Array<Attack>;
  clicked?: boolean;
}
