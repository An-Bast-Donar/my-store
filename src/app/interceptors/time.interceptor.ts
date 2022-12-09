import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

/*
Los interceptores son inyectables pero diferente a los demas
Por ejemplo, los interceptores no tiene el atributo providedIn: 'root'
Debe tambien inyectarse en el appmodule de una forma especial
Un interceptor intercepta todas las peticiones del aplicativo
*/
@Injectable()
export class TimeInterceptor implements HttpInterceptor {

  constructor() { }

  /*
  Funcion que se ejecuta cada que se intercepta una peticion
  */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Codigo a ejecutar en el interceptor
    const start = performance.now();
    return next.handle(request)
      .pipe(
        // tap(), corre un proceso sin tener que cambiar o modificar la respuesta del observable
        tap(() => {
          const time = (performance.now() - start) + 'ms';
          console.log('respuesta y tiempo del interceptor:', request, time)
        })
      );
  }
}
