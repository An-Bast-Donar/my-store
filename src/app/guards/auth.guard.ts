import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/*
Esta clase valida si se puede o no ingresar a una pagina
Los tipos de validaciones dependen del tipo de guard generado dentro de la clase
*/
export class AuthGuard implements CanActivate {

  /*
  Maneja la logica para validar si se puede o no ingresar a la ruta asociada a este guardian
  */

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
