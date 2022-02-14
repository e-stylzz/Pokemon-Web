import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Region } from './region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  url = `${environment.api}regions`;

  constructor(private http: HttpClient) {}

  getRegions(): Observable<Region[]> {
    return this.http
      .get<[]>(this.url)
      .pipe(retry(2), catchError(this.handleError));
  }

  getRegionById(id: number): Observable<Region[]> {
    return this.http
      .get<[]>(this.url +  '/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }

  private handleError(error: any) {
    console.log('Full Error: ', error);
    return throwError(error);
  }
}
