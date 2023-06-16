import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, pipe, retry, throwError } from 'rxjs';
import { Filme } from '../model/filme';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  url_api: string = 'http://localhost:3000/filmes';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  create(data: Filme): Observable<Filme> {
    let API_URL = `${this.url_api}`;
    return this.http.post<Filme>(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Read
  list() {
    return this.http.get<Filme>(`${this.url_api}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Delete
  // delete(id: Filme): Observable<Filme> {
  //   var API_URL = `${this.url_api}/${id}`;
  //   return this.http.delete(API_URL)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
