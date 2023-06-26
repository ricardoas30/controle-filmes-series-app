import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { WebStorageUtil } from '../utility/web-storage-utility';
import { Constants } from '../utility/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginSource = new Subject<boolean>();
  //login$ = this.loginSource.asObservable();

  constructor(private router: Router) {}

  login() {
    WebStorageUtil.set(Constants.LOGGED_IN_KEY, true);
    this.loginSource.next(true);
    this.router.navigate(['']);
  }

  logout() {
    WebStorageUtil.set(Constants.LOGGED_IN_KEY, false);
    this.loginSource.next(false);
    this.router.navigate(['']);
  }

  asObservable(): Observable<boolean> {
    return this.loginSource;
    //return this.loginSource.asObservable()
  }
}
