import { Component } from '@angular/core';
import { Product } from './product.model';

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
  person01 = {
    name: 'Juan',
    age: 26,
    img: 'assets/images/aprendiendocodigo.jpg',
    complete: false,
  }
  person02 = {
    name: 'Juan',
    age: 26,
    img: 'assets/images/aprendiendocodigo.jpg',
    complete: false,
  }
  person03 = {
    name: 'Juan',
    age: 26,
    img: 'assets/images/aprendiendocodigo.jpg',
    complete: false,
  }
  person04 = {
    name: 'Juan',
    age: 26,
    img: 'assets/images/aprendiendocodigo.jpg',
    complete: false,
  }
  names = ['Nicolas', 'Juan', 'Julian', 'Orlando'];
  newName = '';
  /**
   * Un arreglo de tipo Product que es un objeto creado por nosotros
   */
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]
  toggleButton() {
    this.person02.complete = !this.person02.complete;
  }
  increaseAge() {
    this.person02.age += 1;
  }
  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person02.name = element.value;
  }
  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
