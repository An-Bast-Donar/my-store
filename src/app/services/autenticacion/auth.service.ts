import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';
import { Auth } from 'src/app/models/autenticacion/auth.model';
import { User } from 'src/app/models/autenticacion/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}/api/auth`;

  constructor(private http: HttpClient) { }

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
}
