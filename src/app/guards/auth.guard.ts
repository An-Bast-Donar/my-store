import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/*
Esta clase valida si se puede o no ingresar a una pagina
Los tipos de validaciones dependen del tipo de guard generado dentro de la clase
*/
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  /*
  Maneja la logica para validar si se puede o no ingresar a la ruta asociada a este guardian
  */

  /*
  Podemos redireccionar a otra pagina desde un .ts de la siguiente forma:
  this.router.navigate(['home']);
  Esto requiere la importacion necesaria y la inyeccion de dependencia corespondiente
  */

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //por ejemplo en caso de que sea falsa nuestra validacion podemos retornar otra ruta diferente
    //this.router.navigate(['recovery']);
    return true;
  }

}
