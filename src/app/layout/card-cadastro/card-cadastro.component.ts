import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/model/filme';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiHttpService } from 'src/app/services/api-http.service';

declare let alertify : any;
alertify.set('notifier','position', 'top-right');

@Component({
  selector: 'app-card-cadastro',
  templateUrl: './card-cadastro.component.html',
  styleUrls: ['./card-cadastro.component.css']
})
export class CardCadastroComponent implements OnInit {

router: Router;

constructor(private route: ActivatedRoute, router: Router,
            private apiHttpService: ApiHttpService){
  this.router = router;
}

  ngOnInit() {
    // Inicializando SELECT (Combobox)
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems);
    });

    
    
  }

  filme = {
    titulo: null,
    ano: null,
    classificacao: null,
    assistido: false,
    sinopse: null,
    genero: null,
    pais: null,
    img: null
  }

  onSubmitCadastro(filme: any) {
    this.apiHttpService.create(filme).subscribe((Response) => {
      this.apiHttpService.list();
      alertify.success('Gravado com Sucesso.');
    },(error => {
      alertify.error('Erro ao gravar o registro, verifique sua conexão.');
    }));
    this.router.navigate(['/home'], { relativeTo: this.route.parent });
  }
}
