import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProductsFromFake() {
    /**
     * Tambien puede tiparse la respuesta de la peticion
     * Ej: this.http.get<tipo_esperado>(`https://fakestoreapi.com/products`);
     */
    return this.http.get(`https://fakestoreapi.com/products`);
  }

  getAllProductsFromHeroku() {
    return this.http.get(`https://young-sands-07814.herokuapp.com/api/products`);
  }

  getProductFromHeroku() {
    let id: number = 1;
    return this.http.get(`https://young-sands-07814.herokuapp.com/api/products/${id}`);
  }

}
