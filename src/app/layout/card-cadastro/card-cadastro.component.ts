import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/model/filme';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-cadastro',
  templateUrl: './card-cadastro.component.html',
  styleUrls: ['./card-cadastro.component.css']
})
export class CardCadastroComponent implements OnInit {

router: Router;

constructor(private route: ActivatedRoute, router: Router){
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
    img: null
  }

  onSubmitCadastro(filme: any) {
    console.log(filme);
    // Atividade 11 - Cadastro e validação de formulário
    let json = JSON.stringify(filme);
    localStorage['filmes'] = json;
    this.router.navigate(['/home'], { relativeTo: this.route.parent });
  }
}
