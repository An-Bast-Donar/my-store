import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/autenticacion/token.service';

/*
Los interceptores son inyectables pero diferente a los demas
Por ejemplo, los interceptores no tiene el atributo providedIn: 'root'
Debe tambien inyectarse en el appmodule de una forma especial
Un interceptor intercepta todas las peticiones del aplicativo
*/
/*
Este interceptor agrega headers a las peticiones antes de ser enviadas
*/
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  /*
  Funcion que se ejecuta cada que se intercepta una peticion
  */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Codigo a ejecutar en el interceptor antes de que se envie la peticion
    request = this.addToken(request);
    return next.handle(request); // codigo a ejecutar una vez enviada la peticion
  }

  private addToken(request: HttpRequest<unknown>) {
    const token = this.tokenService.getToken();
    if (token) {
      const authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      })
      return authReq;
    }
    return request
  }
}
