/**
 * Ts puede inferir tipos, o declarar tipado unico o varios
 */
const username: string | number = 'juanbytes';

/**
 * Funcion flecha
 */
const suma = (a: number, b: number) => {
  return a + b;
}
suma(1, 3);

/**
 * Patron orientado a objetos
 */
class Persona {
  /**
   * Forma abreviada de declarar variables en el clase e igualarlas a los parametros del constructor
   * Por defecto las variables son publicas pero podemos cambiar ese tipo de proteccion
   */
  constructor(private age: number, public lastName: string) { }
  /*
  age: number;
  lastName: string;
  constructor(age:number, lastName:string) {
    this.age = age;
    this.lastName = lastName;
  }
  */
}
const juan = new Persona(26, 'Rondon');
