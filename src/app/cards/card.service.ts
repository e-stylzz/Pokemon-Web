import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from './card';
import { CardsModule } from './cards.module';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  url = `${environment.api}cards`;

  constructor(private http: HttpClient, private router: Router) {}

  getCards(): Observable<Card[]> {
    return this.http
      .get<[]>(this.url)
      .pipe(retry(2), catchError(this.handleError));
  }

  getCard(id: string): Observable<Card> {
    const url = `${this.url}/${id}`;
    return this.http
      .get<Card>(url)
      .pipe(retry(2), catchError(this.handleError));
  }

  getCardsbySet(setId: string): Observable<Card[]> {
    const url = `${this.url}/set/${setId}`;

    return this.http.get<[]>(url).pipe(retry(2), catchError(this.handleError));
  }

  getCardsbyPokemon(id: number): Observable<Card[]> {
    const url = `${this.url}/pokemon/${id}`;

    return this.http.get<[]>(url).pipe(retry(2), catchError(this.handleError));
  }

  private handleError(error: any) {
    console.log('Full Error: ', error);
    return throwError(error);
  }

  battleSet: Card[] = [];

  addCardtoBattle(card: Card) {
    this.battleSet.push(card);
    console.log('Cards', this.battleSet.length);
    if (this.battleSet.length == 2) {
      this.router.navigate(['battle']);
    }
  }

  clearBattle() {
    this.battleSet = [];
  }

  getBattle() {
    return this.battleSet;
  }
}
