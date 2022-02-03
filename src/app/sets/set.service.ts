import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Set } from './set';

@Injectable({
  providedIn: 'root',
})
export class SetService {
  url = `${environment.api}sets`;

  constructor(private http: HttpClient) {}

  getSets(): Observable<Set[]> {
    return this.http
      .get<[]>(this.url)
      .pipe(retry(2), catchError(this.handleError));
  }

  private handleError(error: any) {
    console.log('Full Error: ', error);
    return throwError(error);
  }
}
