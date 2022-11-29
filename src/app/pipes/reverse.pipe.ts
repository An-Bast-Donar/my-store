import { Pipe, PipeTransform } from '@angular/core';

/**
 * Decorador que contiene el metodo con el que lo vamos a llamar
 */
@Pipe({
  name: 'reverse'
})
/**
 * Los pipes reciben un argumento que se envia desde el html y muestran otro resultado, dependiendo de la configuracion del pipe
 * Estos no modifican la variable que guarda el valor que desde un inicio se quiere imprimir en el html
 * Los pipes son como un tubo que reciben un valor lo modifican y muestran otro, una pequeña capa para la visualizacion de algo especifico, encima de la visualizacion del html
 */
export class ReversePipe implements PipeTransform {

  transform(value: string): string {

    // Se divide el texto en un array, se recorre de reversa y se vuelve a convertir en cadena
    return value.split('').reverse().join('');
  }

}
