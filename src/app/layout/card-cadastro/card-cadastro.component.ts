import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Filme } from 'src/app/model/filme';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiHttpService } from 'src/app/services/api-http.service';
import * as M from 'materialize-css';
import { Classificacao } from 'src/app/model/classificacao';
import { ClassificacaoHttpService } from 'src/app/services/combobox-http.service';
import { NgForm } from '@angular/forms';

declare let alertify : any;
alertify.set('notifier','position', 'top-right');

@Component({
  selector: 'app-card-cadastro',
  templateUrl: './card-cadastro.component.html',
  styleUrls: ['./card-cadastro.component.css']
})
export class CardCadastroComponent implements OnInit {
  @ViewChild('cadForm') cadForm!: NgForm;
  @ViewChild('classificacaoSelect') classificacaoSelect!: ElementRef;

router: Router;
date = new Date();
classificacao!: Classificacao[];

constructor(private route: ActivatedRoute, 
            router: Router,
            private apiHttpService: ApiHttpService,
            private classificacaoService: ClassificacaoHttpService) {

  this.router = router;
  this.classificacao = [];
}

  ngOnInit() {
    // inicializar todos os Componentes do Materialize
    M.AutoInit();

    this.onComboboxClass();
  }

  filme = {
    titulo: null,
    ano: null,
    classificacao: null,
    assistido: false,
    sinopse: null,
    genero: null,
    pais: null,
    img: null,
    createdAt: this.date
  }

  onSubmitCadastro(filme: Filme) {
    this.apiHttpService.create(filme).subscribe((Response) => {
      this.apiHttpService.list();
      alertify.success('Gravado com Sucesso.');
    },(error => {
      alertify.error('Erro ao gravar o registro, verifique sua conexão.');
    }));
    this.router.navigate(['/home'], { relativeTo: this.route.parent });
  }

  /**
   * Retorna a lista do combobox de classificação etária
   */
  onComboboxClass() {
    this.classificacaoService.combobox_classificacao().subscribe(
      (classificacao) => {
        this.classificacao = classificacao;

        setTimeout(() => {
          M.FormSelect.init(this.classificacaoSelect.nativeElement);
        }, 100);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
