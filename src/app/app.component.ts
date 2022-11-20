import { Component } from '@angular/core';

/**
 * Decorador que indica a que template de html esta ligado, entre otras cosas
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Juan';
  age = 26;
  img = 'assets/images/aprendiendocodigo.jpg';
  person = {
    name: 'Juan',
    age: 26,
    img: 'assets/images/aprendiendocodigo.jpg',
    complete: false,
  }
}
