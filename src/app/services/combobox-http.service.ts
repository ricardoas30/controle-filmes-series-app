import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classificacao } from '../model/classificacao';

@Injectable({
  providedIn: 'root'
})
export class ClassificacaoHttpService {
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
