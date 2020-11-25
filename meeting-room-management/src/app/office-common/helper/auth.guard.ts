import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from '../service/auth/authentication.service';
import {TokenStorageService} from '../service/token-storage/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router, private token: TokenStorageService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = this.token.getUser();
    if (user) {
      // check if route is restricted by role
<<<<<<< HEAD
      console.log(route.data.roles);
=======
>>>>>>> fe797ed9eedc2383894b7ba4ac1118cdf32337fa
      if (route.data.roles) {
        for (const role of route.data.roles) {
          if (role.indexOf(user.role) !== -1) {
            return true;
          }
        }
        // role not authorised so redirect to home page
        this.router.navigate(['/']);
        return false;
      }

      // authorised so return true
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login']);
    return false;
  }

}
