import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { Auth } from 'src/app/models/autenticacion/auth.model';
import { User } from 'src/app/models/autenticacion/user.model';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}/api/auth`;

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  login(email: string, password: string) {
    return this.http.post<Auth>(`${this.apiUrl}/login`, { email, password });
  }

  getProfile(token: string) {
    /*
    Otra forma de enviar headers en las peticiones es usando una libreria de rxjs
    const headers = new HttpHeaders();
    headers.set('Authorization',  `Bearer ${token}`);
    */
    return this.http.get<User>(`${this.apiUrl}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`, // Authorization: `tipo_de_autorizacion valor_del_token`
      }
    });
  }

  loginAndGet(email: string, password: string) {
    return this.login(email, password)
      .pipe(
        switchMap(rta => this.getProfile(rta.access_token)),
      )
  }

  /*
  Ejemplo de login almacenando el token en el storage
  */
  loginAlmacenandoToken(email: string, password: string) {
    return this.http.post<Auth>(`${this.apiUrl}/login`, { email, password }).pipe(
      // Funcion que se ejecuta antes del suscribe, sin alterar la respuesta del observable
      tap(response => this.tokenService.saveToken(response.access_token))
    );
  }

  /*
  Ejemplo de obtener perfil capturando token del storage
  */
  getProfileCapturandoToken() {
    /*
    Otra forma de enviar headers en las peticiones es usando una libreria de rxjs
    const headers = new HttpHeaders();
    headers.set('Authorization',  `Bearer ${token}`);
    */
    return this.http.get<User>(`${this.apiUrl}/profile`, {
      /*
      El interseptor se encargaria de añadir el token al header si existe
      */
      /*
      headers: {
        Authorization: `Bearer ${token}`, // Authorization: `tipo_de_autorizacion valor_del_token`
      }
      */
    });
  }

  /*
  Login y get con interceptor
  */
  loginAndGetConInterceptor(email: string, password: string) {
    return this.login(email, password)
      .pipe(
        switchMap(rta => this.getProfileCapturandoToken()),
      )
  }
}
