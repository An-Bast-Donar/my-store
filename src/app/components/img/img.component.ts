import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

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
    this.productsService.getAllProducts().subscribe(data => { console.log("Datos del servicio:", data); });
  }

  emitirSaludo() {
    console.log("se emite un comunicado desde el hijo");
    /**
     * El evento emitido puede o no enviar un dato en su argumento
     */
    this.saludo.emit("hola padre");
  }

}