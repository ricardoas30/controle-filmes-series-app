import { AfterViewInit, Component } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit {


  dados = {
    titulo:'Filmes e Series',
    cadastrar: {
      nome: 'Cadastrar',
      url: '/cadastro'
    },
    home: {
      nome: 'Home',
      url: '/home'
    },
    sobre: {
      nome: 'Sobre',
      url: '/sobre'
    }
  };

  ngAfterViewInit(): void {
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
      });
  }

}
