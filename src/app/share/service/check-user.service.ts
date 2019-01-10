import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root',
})

export class CheckUserService {
  constructor(private authGuardService: AuthGuardService) {
    console.log('check user service');
  }

  curranceIsLogin = this.authGuardService.getToken() ? true : false;
  isLogin = new BehaviorSubject(this.curranceIsLogin);

  isUserLogin(isLogin: boolean) {
    this.isLogin.next(isLogin);
  }
}
