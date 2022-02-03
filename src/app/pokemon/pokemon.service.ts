import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  url = `${environment.api}pokemon`;

  constructor(private http: HttpClient) {}

  getPokemon(): Observable<Pokemon[]> {
    return this.http
      .get<[]>(this.url)
      .pipe(retry(2), catchError(this.handleError));
  }

  private handleError(error: any) {
    console.log('Full Error: ', error);
    return throwError(error);
  }
}
