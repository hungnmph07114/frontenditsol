import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenserviceService } from '../Service/tokenservice.service';
@Injectable({
  providedIn: 'root'
})
export class ProdGuardService implements CanActivate {

  realRole: string;
  constructor(private tokense: TokenserviceService, private router: Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRol = route.data.expectedRol;
    const roles = this.tokense.getAuthorities();
    this.realRole = 'user';
    if (!this.tokense.getToken()){
      this.router.navigate(['/']);
      return false;
    }
    roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.realRole = 'admin';
      }
    });
    if (!this.tokense.getToken() || expectedRol.indexOf(this.realRole) === -1) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
