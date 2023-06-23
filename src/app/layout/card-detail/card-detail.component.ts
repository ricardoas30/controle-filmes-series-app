import { ApiHttpService } from 'src/app/services/api-http.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filme } from 'src/app/model/filme';
import * as M from 'materialize-css';
import { NgForm } from '@angular/forms';
import { ComboboxHttpService } from 'src/app/services/combobox-http.service';
import { Classificacao } from 'src/app/model/classificacao';
import { Genero } from 'src/app/model/genero';
import { Pais } from 'src/app/model/pais';

declare let alertify : any;
alertify.set('notifier','position', 'top-right');

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  @ViewChild('altForm') altForm!: NgForm;
  @ViewChild('classificacaoSelect') classificacaoSelect!: ElementRef;
  @ViewChild('generoSelect') generoSelect!: ElementRef;
  @ViewChild('paisSelect') paisSelect!: ElementRef;
  
  filme?: Filme;
  date = new Date();
  router: Router;
  classificacoes: Classificacao[];
  genero: Genero[];
  pais: Pais[];

  constructor(private apiHttpService: ApiHttpService,
              router: Router,
              private route: ActivatedRoute,
              private comboboxHttpService: ComboboxHttpService) {

      this.router = router;
      this.classificacoes = [];
      this.genero = [];
      this.pais = [];
      
  }

  ngOnInit() {
    // Buscar o filme pelo id
    this.apiHttpService.filmeById(this.route.snapshot.params['id'])
      .subscribe(filme => this.filme = filme);

    // inicializar todos os Componentes do Materialize
    this.listaClassificacao();
    this.listaGenero();
    this.listaPais();
  }

/**
 * Retorna a lista do combobox de classificação etária
 */
  listaClassificacao() {
    this.comboboxHttpService.combobox_classificacao().subscribe(
      (response) => {
        this.classificacoes = response;

        setTimeout(() => {
          M.FormSelect.init(this.classificacaoSelect.nativeElement);
        }, 100);
      },
      (error) => {
        console.log(error);
      }
    );
  }

/**
 * Retorna a lista do combobox de genero
 */
  listaGenero() {
    this.comboboxHttpService.combobox_genero().subscribe(
      (response) => {
        this.genero = response;

        setTimeout(() => {
          M.FormSelect.init(this.generoSelect.nativeElement);
        }, 150);
      },
      (error) => {
        console.log(error);
      }
    );
  }

/**
 * Retorna a lista do combobox do pais
 */
listaPais() {
  this.comboboxHttpService.combobox_pais().subscribe(
    (response) => {
      this.pais = response;

      setTimeout(() => {
        M.FormSelect.init(this.paisSelect.nativeElement);
      }, 200);
    },
    (error) => {
      console.log(error);
    }
  );
}  

  onSubmitAlterar(filme: Filme) {
    this.apiHttpService.updateById(this.route.snapshot.params['id'], filme).subscribe((response) => {
      alertify.success('Filme alterado com Sucesso.');
    },(error => {
      alertify.error('Erro ao alterar o filme, verifique sua conexão.');
    }));
    this.router.navigate(['/home'], { relativeTo: this.route.parent });
  }
}

