import { Injectable } from '@angular/core';

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

  constructor() { }

  // Aca se escribe todo el codigo del negocio, si algo se suma, si no se suma, si se agrega, si se quita si se modifica, entre otras cosas
  // Recordar mantener la logica de cada componente o cada servicio lo mas unica posible

}
