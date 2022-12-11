import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
// Paquetes para darle contexto a un interceptor y permitir ejecutarlo solo en determinadas peticiones
import { HttpContextToken, HttpContext } from '@angular/common/http';

/*
Contexto para saber cuando se ejecuta el interceptor
Puede iniciar por defecto en false y cambiar a true o vicebersa
*/
const CHECK_TIME = new HttpContextToken<boolean>(() => false);
export function chechTime() {
  return new HttpContext().set(CHECK_TIME, true);
}

@Injectable()
export class TimeInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Validacion del contexto para saber si intercepta o no una peticion
    if (request.context.get(CHECK_TIME)) {
      const start = performance.now();
      return next.handle(request)
        // codigo a ejecutar una vez enviada la peticion
        .pipe(
          // tap(), corre un proceso sin tener que cambiar o modificar la respuesta del observable
          // este proceso se ejecuta antes de mostrar el resultado del observador, pero ya tiene la respuesta del observador
          tap(() => {
            const time = (performance.now() - start) + 'ms';
            console.log('respuesta y tiempo del interceptor:', request, time)
          })
        );
    }
    return next.handle(request);
  }
}
