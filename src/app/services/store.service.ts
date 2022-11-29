import { Injectable } from '@angular/core';
/*
Al servicio le podemos crear un observable
Modulo rxjs, libreria que implementa todo el patron de observables dentro de angular
*/
import { BehaviorSubject } from 'rxjs';


/**
 * Decorador, indica que puede ser inyectado en otros componentes u otros servicios
 */
@Injectable({
  providedIn: 'root'
})
/**
 * Esta clase puede ser llamada dentro del constructor de los demas componentes que necesiten hacer uso de este servicio o logica de negocio
 * A este llamado se le llama inyecicon de dependencias, y dentro del constructor se crea una instancia del servicio inyectado, mientras el servicio tenga el decorador injectable
 * Las clases con este decorador, manejan el patron singleton, el cual permite devolver la misma instancia para todas las clases o componenetes que llamen la clase
 * Un servicio se puede inyectar en otro servicio, pero hay que tener cuidado de no inyectar un servicio en otro y ese otro en el uno, pues dara un error de referencia circular
 */
export class StoreService {

  /*
  Para crear un observable se necesita:
  1. El objeto que se va a observar, este objeto puede ser de cualquier tipo y requiere estar inicializado
  2. La instancia del observador inicializado y con su declaracion de tipo de dato de devolucion
  3. El objeto al que se van a suscribir que por convencion debe tener el signo $ al final del nombre
  */
  private myListaPersonalizada: string[] = [];
  private myObservador = new BehaviorSubject<string[]>([]);
  public myObservador$ = this.myObservador.asObservable();

  constructor() { }

  // Aca se escribe todo el codigo del negocio, si algo se suma, si no se suma, si se agrega, si se quita si se modifica, entre otras cosas
  // Recordar mantener la logica de cada componente o cada servicio lo mas unica posible

  addString(texto: string) {
    this.myListaPersonalizada.push(texto);
    /*
    Se actualiza el valor observado y se distribuye a todos los suscritos
    */
    this.myObservador.next(this.myListaPersonalizada);
  }

}
