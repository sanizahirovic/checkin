import {Component} from '@angular/core';
import {LoginComponent} from './login/components/login.component';
import { Routes } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
})
export class AppComponent {

}
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
          if (localStorage.getItem('user')) {
              // logged in so return true
              return true;
          }
          // not logged in so redirect to login page with the return url and return false
          this.router.navigate(['']);
          return false;
      }
}
