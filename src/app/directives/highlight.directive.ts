import { Directive, ElementRef, HostListener } from '@angular/core';

/**
 * Decorador que permite que angular interprete cual es la forma correcta de implementar esta clase
 * Y el selector para hacer uso de esta directiva
 */
@Directive({
  selector: '[appHighlight]'
})

/**
 * A la etiqueta que le apliquemos esta directiva se le realizaran las modificaciones aca especificadas
 * Las directivas tambien pueden escuchar eventos dentro de la etiqueta a la que se les asigna
 */
export class HighlightDirective {

  /**
   * Eventos de ejemplo que escuchan cuando el mouse entra y sale de una etiqueta con esta directiva y asigna un color en torno a eso
   */
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'green';
  }

  constructor(
    // Inyeccion de dependencias
    private element: ElementRef
  ) {
    this.element.nativeElement.style.backgroundColor = 'green';
  }

}
