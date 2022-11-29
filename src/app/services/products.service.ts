import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    /**
     * Tambien puede tiparse la respuesta de la peticion
     * Ej: this.http.get<tipo_esperado>(`https://fakestoreapi.com/products`);
     */
    return this.http.get(`https://fakestoreapi.com/products`);
  }

}
