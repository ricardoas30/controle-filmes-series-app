import { ApiHttpService } from 'src/app/services/api-http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filme } from 'src/app/model/filme';
import * as M from 'materialize-css';

declare let alertify : any;
alertify.set('notifier','position', 'top-right');

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  filme: Filme | undefined;
  today: number = Date.now();
  router: Router;

  constructor(private apiHttpService: ApiHttpService,
              router: Router,
              private route: ActivatedRoute) {
      this.router = router;
      
  }

  ngOnInit() {
    // inicializar todos os Componentes do Materialize
    M.AutoInit();

    // Buscar o filme pelo id
    this.apiHttpService.filmeById(this.route.snapshot.params['id'])
      .subscribe(filme => this.filme = filme);
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

