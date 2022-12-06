import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { switchMap } from 'rxjs/operators';
import { zip } from 'rxjs';

/**
 * Decorador que nos indica como llamar este componenete desde otras partes de nuestro proyecto
 * Su relacion con los demas archivos del mismo componente
 */
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  title: string = "ESTO ES UN COMPONENTE";
  /**
   * Sirve para enviar datos del compoennte padre al componente hijo
   * Los datos se envian en forma de atributo dentro de la etiqueta que referencia este componente
   * Las variables con el decorador Input seran las variables que se reciben desde el padre
   * Se puede alterar el nombre del atributo desde el argumento del decorador
   * Ej: @Input('nombre_alterado') nombre_variable;
   * El nombre alterado de la variable sera el que se usara como atributo al moemnto de usar nuestro compoenente en otro componente
   */
  @Input() contenido: string = "No hay contenido en el atributo";
  /**
   * El @Input() tambien puede ejecutar una funcion
   */
  descripcion: string = '';
  // Declaracion estipulada para desabilitar la revicion de angular por linters
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('descripcion')
  set setDescripcion(newDescripcion: string) {
    this.descripcion = newDescripcion
  }

  /**
   * Las variables con el decorador Output son las variables que se emiten como eventos
   * Sirven para trasmitir datos del hijo al padre
   * La variables debe ser una instancia de un emisor de eventos, puesto es un evento lo que recibe el padre
   * El emisor de eventos puede o no enviar datos, si no se envian datos simplemente no se agrega el tipo de dato a emitir entre las llaves de menor que y mayor que
   * Ej: @Output() descripcion = new EventEmitter();
   * El evento emitter puede devolver tanto variables de tipo stirng, como number o objetos mas complejos
   */
  @Output() saludo = new EventEmitter<string>();

  constructor(
    /**
     * Inyeccion de dependencias, esto crea una instancia singleton sin necesidad de declarlas la inicializacion
     */
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.emitirSaludo();
    /**
     * Recordar que los llamados asy se hacen desde el onInit
     */
    /*
    this.productsService.getAllProductsFromFake().subscribe(data => { console.log("Productos de Fake:", data); });
    this.productsService.getAllProductsFromHeroku().subscribe(data => { console.log("Productos de Heroku:", data); });
    this.productsService.getProductFromHeroku().subscribe(data => { console.log("Producto de Heroku:", data); });
    this.productsService.postProductToHeroku().subscribe(data => { console.log("Producto creado en Heroku:", data); });
    this.productsService.putProdutInHeroku().subscribe(data => { console.log("Producto cambiado con put en Heroku:", data); });
    this.productsService.patchProductInHeroku().subscribe(data => { console.log("Producto cambiado con patch en Heroku:", data); });
    this.productsService.deleteProductOfHeroku().subscribe(data => { console.log("Producto eliminado de Heroku:", data); });
    */
    /*
    // Manejo de errores al momento de consumir el servicio
    this.productsService.getProductFromHeroku().subscribe(res => {
      console.log("Producto de Heroku:", data);
    }, err => {
      // codigo  ejecutar si hay un error al momento de consumir el servicio
      // la variable err es la emitida por thrwError desde el servcio
    });
    */
  }

  emitirSaludo() {
    console.log("se emite un comunicado desde el hijo");
    /**
     * El evento emitido puede o no enviar un dato en su argumento
     */
    this.saludo.emit("hola padre");
  }

  /*
  Callback Hell es la anidacion de funciones dentro de otras
  Ej: se pide un producto y se actualiza ese producto
  */
  readAndUpdateConCallbackDependiente() {
    this.productsService.getProductFromHeroku().subscribe(() => {
      this.productsService.putProdutInHeroku().subscribe();
    });
  }
  /*
  Solucionar el Callback Hell en promesas es sencillo puesto el then se ejecuta despues del otro then, implementando el codigo en su argumento descrito
  Ej:
  funcion_de_promesa()
  .then(//codigo_a_ejecutar)
  .then(//codigo_a_ejecutar)
  .then(//codigo_a_ejecutar)
  .
  .
  .
  */
  /*
  Para solucionar el Callback Hell en observables hay que:
  1. import { switchMap } from 'rxjs/operators';
  2. implementar el switchMap, coloca las funciones anidadas dentro de cada switchMap, logrando detener un solo subscribe
  */
  readAndUpdateSinCallbackDependiente(): void {
    this.productsService.getProductFromHeroku()
      .pipe(
        switchMap(products => this.productsService.putProdutInHeroku()),
        /*
        switchMap(products => this.productsService.putProdutInHeroku()),
        switchMap(products => this.productsService.putProdutInHeroku()),
        .
        .
        .
        */
      )
      .subscribe(res => {
        // Codigo con el estado del ultimo suscribe o ultimo switchMap
      });
  }

  /*
  El caso anterior es un Callback con dependencia, puesto que para que se ejecute uno debe ejecutarse otro
  Para un Callback sin dependencia tambien hay una estructura usada en Angular
  Para promesas tenemos la funcion all que nos permite ejecutar varias promesas a la vez, sin que dependan una de otra
  Ej:
  Promise.all(doSomething1(), doSomething1());

  Para observadores debemos usar un zip que nos permite usar dos observadores y resivir la respuesta de los dos al tiempo
  */
  readAndUpdateSinCallbackIndependiente(): void {
    /*
    Agrupando observables en un mismo subscribe
    Regresamos las respuestas en un arreglo que luego podemos consumir
    */
    zip(
      this.productsService.getProductFromHeroku(),
      this.productsService.putProdutInHeroku()
    )
      .subscribe(res => {
        const get = res[0];
        const update = res[1];
      });
  }
  /*
  Esta logica la podemos manejar desde un servicio puesto que es logica que se puede usar despues en otro compoenente
  El servicio ahora retornaria un zip y en el componente nos suscribimos de una al zip
  Igual podemos estraer esta logica del switchMap en el servicio
  */

}
