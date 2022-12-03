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
    let id: number = 5;
    return this.http.get(`https://young-sands-07814.herokuapp.com/api/products/${id}`);
  }

  postProductToHeroku() {
    let product: object = {
      title: 'Prueba',
      description: 'Descripcion',
      images: [''],
      price: 2000,
      categoryId: 2,
    }
    return this.http.post(`https://young-sands-07814.herokuapp.com/api/products`, product);
  }

  /*
  put y patch son para actualizar el producto
  put recibe todo el objeto asi se haya cambiado solo un atributo
  patch recibe solo el atributo cambiado del objeto
  */
  putProdutInHeroku() {
    let id: number = 50;
    let product: object = {
      title: 'Cambio de prueba',
      description: 'Cambio realizado por el metodo Put',
      images: [''],
      price: 2000,
      categoryId: 2,
    }
    return this.http.put(`https://young-sands-07814.herokuapp.com/api/products/${id}`, product);
  }

  patchProductInHeroku() {
    let id: number = 60;
    let product: object = {
      title: 'Cambio de prueba',
      description: 'Cambio realizado por el metodo Patch',
    }
    return this.http.put(`https://young-sands-07814.herokuapp.com/api/products/${id}`, product);
  }

}
