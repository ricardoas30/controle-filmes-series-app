import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Filme } from '../model/filme';
declare let alertify : any;

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  url_api: string = 'http://ec2-3-12-132-227.us-east-2.compute.amazonaws.com:8080/filmes';
  options: string = '?_sort=assistido&_order=asc';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  create(data: Filme): Observable<Filme> {
    let API_URL = `${this.url_api}`;
    return this.http.post<Filme>(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Buscar o filme pelo id
  updateById(id: Filme, data: Filme): Observable<Filme> {
    let API_URL = `${this.url_api}/${id}`;
    return this.http.put<Filme>(API_URL, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Listar todos
  list() {
    return this.http.get<Filme>(`${this.url_api}${this.options}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Deletar
  delete(id: Filme): Observable<Filme> {
    var API_URL = `${this.url_api}/${id}`;
    return this.http.delete<Filme>(API_URL)
      .pipe(
        catchError(this.handleError)
      );
  }

  filmeById(id: Filme): Observable<Filme> {
    var API_URL = `${this.url_api}/${id}`;
    return this.http.get<Filme>(API_URL)
      .pipe(
        catchError(this.handleError)
      )
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
    alertify.set('notifier','delay', 5);
    alertify.error('Uma falha ocorreu, verifique sua conectividade !');
    return throwError(
      'Algo ruím aconteceu; por favor, tente novamente mais tarde.');
  };
}
