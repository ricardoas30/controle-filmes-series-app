import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { Constants } from 'src/app/utility/constants';
import { WebStorageUtil } from 'src/app/utility/web-storage-utility';
declare let alertify : any;

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {
  loggedIn = WebStorageUtil.get(Constants.LOGGED_IN_KEY);
  subscription!: Subscription;

  constructor(private router: Router, 
              private loginService: LoginService) {
    this.subscription = this.loginService.asObservable().subscribe((data) => {
      this.loggedIn = data;
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
