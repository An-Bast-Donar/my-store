/*
una promesa espera la respuesta y el programa se sigue ejecutando
un observable sigue ejecutando el programa mientras llega la respuesta
*/

/*
libreria que se usa para manejar el patron de las observables
*/
const { Observable } = require("rxjs");
const { filter } = require("rxjs/operators");

/*
funcion que retorna una promesa
se corre en un constesto asincrono
la promesa puede contener un valor resuelto o un valor no resuelto
las promesas no se pueden cancelar
*/
const doSomething = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("valor 3");
    }, 3000);
  });
};

/*
un observable permite emitir varios valores como respuesta
los observadores si se pueden cancelar
*/
const doSomething$ = () => {
  return new Observable((observer) => {
    observer.next("valor 1 $");
    observer.next("valor 2 $");
    observer.next("valor 3 $");
    observer.next(null);
    setTimeout(() => {
      observer.next("valor 4 $");
    }, 5000);
    setTimeout(() => {
      observer.next(null);
    }, 8000);
    setTimeout(() => {
      observer.next("valor 5 $");
    }, 10000);
  });
};

/*
funcion asyncrona que se llama sola para correr una promesa
*/
(async () => {
  const rta = await doSomething();
  console.log(rta);
})();

/*
funcion que se llama sola para correr el observable
*/
(() => {
  const obs$ = doSomething$();
  obs$.pipe(filter((value) => value !== null)).subscribe((rta) => {
    console.log(rta);
  });
})();
