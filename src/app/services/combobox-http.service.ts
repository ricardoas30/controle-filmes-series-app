import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classificacao } from '../model/classificacao';
import { Genero } from '../model/genero';

@Injectable({
  providedIn: 'root'
})
export class ComboboxHttpService {
  url_api: string = 'http://localhost:3000';
  options: string = '?_sort=descricao&_order=asc';
  url_class  = 'classificacao';
  url_genero = 'genero';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) { }

  combobox_classificacao(): Observable<Classificacao[]> {
    let API_URL = `${this.url_api}`;
    return this.httpClient.get<Classificacao[]>(`${API_URL}/${this.url_class}`);
  }

  combobox_genero(): Observable<Genero[]> {
    let API_URL = `${this.url_api}`;
    return this.httpClient.get<Genero[]>(`${API_URL}/${this.url_genero}${this.options}`);
  }
}
