import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classificacao } from '../model/classificacao';
import { Genero } from '../model/genero';
import { Pais } from '../model/pais';

@Injectable({
  providedIn: 'root'
})
export class ComboboxHttpService {
  url_api: string = 'http://ec2-3-12-132-227.us-east-2.compute.amazonaws.com:8080';
  options: string = '?_sort=descricao&_order=asc';
  url_class  = 'classificacao';
  url_genero = 'genero';
  url_pais = 'pais';

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

  combobox_pais(): Observable<Pais[]> {
    let API_URL = `${this.url_api}`;
    return this.httpClient.get<Pais[]>(`${API_URL}/${this.url_pais}${this.options}`);
  }
}
