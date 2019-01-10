import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '../../../node_modules/@angular/router';
import { AuthGuardService } from '../share/service/auth-guard.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authGuardService: AuthGuardService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(state);
    if (this.authGuardService.getToken()) {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}
