import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { chechTime } from '../interceptors/time.interceptor';

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

  /*
  En caso de que esta peticion necesite enviarle un contexto al interceptor, el contexto se envia por los parametros de la peticion
  */
  getAllProductsFromHeroku() {
    return this.http.get(`https://young-sands-07814.herokuapp.com/api/products`, { context: chechTime() });
  }

  getProductFromHeroku() {
    let id: number = 5;
    return this.http.get(`https://young-sands-07814.herokuapp.com/api/products/${id}`);
    /*
    // Las peticiones se pueden intentar pedir varias veces en caso de no obtener una respuesta correcta
    // Para esto se necesita importar: import { retry } from 'rxjs/operators';
    // Con otras importaciones tambien podemos darles un delay a las repeticiones o un condicional a cada una
    return this.http.get<Product>(`https://example.com/api/productos/${idProduct}`)
      .pipe(
        retry(2)
      );
    */
    /*
    // Para añadir mas campos al objeto que regresa el back y enviarlo a los componentes
    // Tener encuenta que el campo debe estar mapeado en nuestra estructura de datos
    return this.http.get<Product>(`https://example.com/api/productos/${idProduct}`)
      .pipe(
        map(products => products.map(item => {
        return {
          ...item,
          taxes: .19 * item.price
        }
      }))
      );
    */
    /*
    // Importando las librerias necesarias podemos manejar los errores directamente desde el servicio
    // Angular nos permite visualizar el estado del error
    return this.http.get<Product>(`https://example.com/api/productos/${idProduct}`)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        if (error.status == HttpStatusCode.Forbidden) {return throwError('No tiene permisos para realizar la solicitud.');}
        if (error.status == HttpStatusCode.NotFound) {return throwError('El producto no existe.');}
        if (error.status == HttpStatusCode.InternalServerError) {return throwError('Error en el servidor.');}
        return throwError('Un error inesperado ha ocurrido.');
      })
    );
    */
  }

  /*
  es buena practica que la paginasion se retorne desde el back
  los parametros por url en httpCLiente se envian con un objeto llamado parms como argumento de la funcion http a usar
  */
  getProductsParams(offset: number, limit: number) {
    return this.http.get(`https://example.com/api/productos`, { params: { offset, limit } });
  }

  /*
  // funcion que recibe o no parametros para la paginacion desde bd
  getProductFromHeroku(limit?: number, offset?: number) {
    let id: number = 5;
    let params = new HttpParams();
    if (limit && offset) {
      params = params.set('limit', limit);
      params = params.set('offset', limit);
    }
    return this.http.get(`https://young-sands-07814.herokuapp.com/api/products/${id}`, { params });
  }
  */

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

  /*
  algunas bases de datos regresan un boleano que idica si se elimino o no el producto y otros regresan el producto que se elimino
  */
  deleteProductOfHeroku() {
    let id: number = 51;
    return this.http.delete(`https://young-sands-07814.herokuapp.com/api/products/${id}`);
  }

  /*
  Callback Hell
  Peticiones que dependen una de otra
  */

}
