import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from 'src/app/services/api-http.service';
declare let alertify : any;
// import { filmes } from '../filme.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // filmes = [...filmes];

  constructor(private apiHttpService: ApiHttpService){}

  filmeList:any = [];

  ngOnInit() {
    this.listTodos();
  }

  listTodos() {
    this.apiHttpService.list().subscribe((response) => {
      this.filmeList = response;
      console.log(this.filmeList);
    },(error => {
      alertify.error('Erro ao carregar a lista de filmes.');
    }));
  }
}
