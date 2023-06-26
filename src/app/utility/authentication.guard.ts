import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
  } from '@angular/router';
  
  import { Constants } from 'src/app/utility/constants';
  import { Injectable } from '@angular/core';
  import { User } from './../model/user';
  import { WebStorageUtil } from 'src/app/utility/web-storage-utility';
  declare let alertify : any;
  
  @Injectable()
  export class AuthenticationGuard implements CanActivate {
    constructor(private router: Router) {}
  
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): boolean {
      let url: string = state.url;
      let user: User = WebStorageUtil.get(Constants.USERNAME_KEY) as User;
      let isLogged: User = WebStorageUtil.get(Constants.LOGGED_IN_KEY) as User;
  
      if (!isLogged) {
        //redireciona para uma view para explicar o que aconteceu
        alertify.error('Atenção, efetue o login para conceder o acesso !')
        this.router.navigateByUrl('/login');
        return false;
      }
  
      if (!user.isAdmin) {
        //redireciona para uma view para explicar o que aconteceu
        this.router.navigateByUrl('/nao-autorizado');
        return false;
      }      
  
      return true;
    }
  }