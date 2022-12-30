import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface OnExit {
  onExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
/*
Esta clase vigila cando se puede o no salir de la pagina asociada a este guardian
*/
export class ExitGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: OnExit,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    /*
    Aca puede haber ligoca dentro del guard
    Pero tambien puedo implementar logica desde un compoenente externo con una interfaz, para asi generar un guard generico
    */
    return component.onExit ? component.onExit() : true;
  }

}
