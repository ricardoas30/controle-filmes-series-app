import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
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

  // Listar todos
  list() {
    return this.http.get<Filme>(`${this.url_api}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Deletar
  delete(id: any): Observable<any> {
    var API_URL = `${this.url_api}/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Lidar com erros de API
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Um erro ocorreu:', error.error.message);
    } else {
      console.error(
        `Código retornado do back-end ${error.status}, ` +
        `corpo era: ${error.error}`);
    }
    return throwError(
      'Algo ruím aconteceu; por favor, tente novamente mais tarde.');
  };
}
