import { Observable, retry } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from 'src/app/services/api-http.service';
import { Route, Router } from '@angular/router';
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
    },(retry(3), error => {
      alertify.error('Erro ao carregar a lista de filmes.');
    }));
  }


  onConfirmDelete(id:any) {
    alertify.confirm('Confirmação', 'Deseja deletar o item selecionado ?', 
      () => { 
        this.apiHttpService.delete(id).subscribe((response)=> {
          this.listTodos();
          alertify.success('Filme deletado com sucesso.');
        },(error=>{
          alertify.error('Falha ao deletar o filme.');
        }));
      }, 
      function() { 
        alertify.confirm().close();
      }
    );
  }
}