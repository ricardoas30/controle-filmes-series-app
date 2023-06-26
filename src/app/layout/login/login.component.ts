import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';
import { Constants } from 'src/app/utility/constants';
import { Shared } from 'src/app/utility/shared';
import { WebStorageUtil } from 'src/app/utility/web-storage-utility';
declare let alertify : any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!: User;
  loginUser!: User;
  loggedIn = false;
  subscription!: Subscription;

  constructor(private loginService: LoginService,
              private router: Router) {
    this.subscription = this.loginService.asObservable().subscribe((data) => {
      this.loggedIn = data;
    });
  }
  

  ngOnInit(): void {
    // Inicializa e cria o usuário no local storage do navegador
    Shared.initializeWebStorage();
    this.loggedIn = WebStorageUtil.get(Constants.LOGGED_IN_KEY);

    // Instancia o usuario no local storage do navegador
    this.loginUser = new User('', '');
    this.user = WebStorageUtil.get(Constants.USERNAME_KEY);
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onLogin() {
    if (
      this.loginUser.username === this.user.username &&
      this.loginUser.password === this.user.password      
    ) {
      this.loginService.login();
      this.router.navigate(['/home']);
    } else {
      alertify.error('Atenção, verifique seu usuário e senha !')
    }
  }
}
