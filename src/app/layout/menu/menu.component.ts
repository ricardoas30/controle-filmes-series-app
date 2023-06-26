import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import * as M from 'materialize-css';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { Constants } from 'src/app/utility/constants';
import { WebStorageUtil } from 'src/app/utility/web-storage-utility';
declare let alertify : any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit {
  loggedIn = WebStorageUtil.get(Constants.LOGGED_IN_KEY);
  subscription!: Subscription;

  constructor(private loginService: LoginService,
              private router: Router) {
    this.subscription = this.loginService.asObservable().subscribe((data) => {
      this.loggedIn = data;
    });
  }

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

  onLogout() {
    alertify.confirm('Confirmação', 'Deseja realmente sair do sistema ?', 
      () => { 
        localStorage.setItem(Constants.LOGGED_IN_KEY, String(false));
        this.subscription.unsubscribe();
        this.router.navigate(['login']);
      }, 
      function() { 
        alertify.confirm().close();
      }
    );
  }
}
