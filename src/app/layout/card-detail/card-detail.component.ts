import { ApiHttpService } from 'src/app/services/api-http.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filme } from 'src/app/model/filme';
import * as M from 'materialize-css';
import { NgForm } from '@angular/forms';
import { ComboboxHttpService } from 'src/app/services/combobox-http.service';
import { Classificacao } from 'src/app/model/classificacao';
import { Genero } from 'src/app/model/genero';

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
  
  filme?: Filme;
  today:  number = Date.now();
  router: Router;
  classificacoes: Classificacao[];
  genero: Genero[];

  constructor(private apiHttpService: ApiHttpService,
              router: Router,
              private route: ActivatedRoute,
              private comboboxHttpService: ComboboxHttpService) {

      this.router = router;
      this.classificacoes = [];
      this.genero = [];
      
  }

  ngOnInit() {
    // inicializar todos os Componentes do Materialize
    M.AutoInit();


    // Buscar o filme pelo id
    this.apiHttpService.filmeById(this.route.snapshot.params['id'])
      .subscribe(filme => this.filme = filme);

    this.listaClassificacao();
    this.listaGenero();

    setTimeout(() => {
      M.FormSelect.init(this.classificacaoSelect.nativeElement);
      M.FormSelect.init(this.generoSelect.nativeElement);
    }, 100);
  }

/**
 * Retorna a lista do combobox de classificação etária
 */
  listaClassificacao() {
    this.comboboxHttpService.combobox_classificacao().subscribe(
      (classificacao) => {
        this.classificacoes = classificacao;

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
        }, 100);
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

