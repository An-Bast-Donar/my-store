import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  /*
  Variables de tipo token o similares pueden guardarse en varios lugares, tres lugares principales son
  - localstorage
  - sesionstorage
  - cokins
  */
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }
}
