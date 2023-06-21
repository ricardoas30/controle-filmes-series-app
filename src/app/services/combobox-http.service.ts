import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classificacao } from '../model/combo01-classific';

@Injectable({
  providedIn: 'root'
})
export class Combo01ClassificHttpService {
  url_api: string = 'http://localhost:3000/classificacao';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) { }

  combobox_classificacao(): Observable<Classificacao[]> {
    let API_URL = `${this.url_api}`;
    return this.httpClient.get<Classificacao[]>(`${API_URL}`);
  }
}
