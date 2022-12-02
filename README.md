# MyStore

Proyecto para aprender angular de Beginner a Master

## Instalacion

1. tener node instalado, version: $ node -v
2. tener npm instalado, version: $ npm -v
3. tener angular instalado: $ npm i -g angular/cli
4. version de angular: $ ng version (ejecutar el comando dentro del proyecto tambien muestra las versiones de las dependencias)

## Crear proyecto

1. Crear proyecto: $ ng new nombre-de-la-app (no usar la ñ y solo separar con - y \_)
2. Crearlo con ruting y con algun preprocesador si es posible

## Correr proyecto

1. correr poryecto: $ ng serve
2. correr proeycto y abrirlo automaticamente: $ ng serve -o
3. correr proeycto abrirlo automaticamente y cambiar el puerto: $ ng serve -o --port=3500

## Estructura del un proyecto

- src: corazon de la aplicacion, componentes, html, css, routin, entre otras cosas.
- .browserslistrc: le indica a angular en que navegadores debe ser compatible la aplicacion.
- .editorconfig: archivo con las reglas de escritura de codigo, para trabajo en equipo, para que el archivo funcione se debe contar con el plugin EditorConfig for VS Code.
- tsconfig.json: configuracion que tiene angular con Ts, como compila, a donde traspira, verision de Js, configuraciones de compilacion de angular.
- angular.json: configuracion de diferentes ambientes, pruebas, qa, produccion, desarrollo, tamaño de la app, entre otras cosas.
- plugin Angular Languaje Service, para mejorar el desarrollo con Angular.
- karma: configuracion para pruebas unitarias.
- package.json: versiones de dependencias, entre otras cosas.
- .nvmrc: arhchivo que se debe crear para espesificar la version de node como buena practica en caso de usar nvm (node version manager, interfaz que gestiona diferentes versiones de node para diferentes proeyctos)

## Documentacion del proyecto

- typescriptrepaso.ts: repaso de Ts
- app.component.html: bases Angula
- app.module.ts: archivo donde se importan los modulos que usaremos para el proyecto
- product.model.ts: archivo creado para crear las interfaces para objetos de nuestro proyecto

## Debug

Existe la extension Angular DevTools para Chrome, nos avisa que webs estan construidas en angular y nos habilita mas opciones en el inspector para debuguear diferentes aspectos de una web en esta tecnologia

## Deployment

1. Lanzamiento de la aplicacion a un ambiente productivo, mediante firebase hosting
2. Para firebase hosting se requiere un gmail
3. Crear un nuevo proyecto en console firebase
4. Usamos en servicio de hosting y seguimos los pasos
5. Instalamos firebase tools en nuestra maquina: $ npm install -g firebase-tools
6. Comprobamos la version de firebase tools en nuestro proeycto local: $ firebase -V
7. Conectamos nuestra maquina con la configuracion de consola de firebase: $ firebase login
8. Corremos la instruccion para seleccionar los servicios que usaremos, el proyecto de firebase, la carpeta a distribuir y otras opciones : $ firebase init
9. Se creara una carpeta de distribucion con el nombre proporcionado, esta carpeta puede ser eliminada, puesto angular genera su propia carpeta de despliega a la que se le puede hacer referencia en las configuraciones para el despliegue con firebase hosting
10. En el nuevo archivo firebase.json se puede configurar la ruta de la carpeta de despliegue
11. Generar una compilacion de angular a nivel productivo, el comando: $ ng build, con este comando generamos una compilaicion a produccion, este comando transpira el proyecto, pasa de sass a css, de ts a js y otras optimizaciones para que el proyecto quede en un alto nivel, la compilacion de este proyecto se genera en la carpeta dist/nombre_del_proyecto
12. Esta carpeta es la carpeta de despliegue y contiene nuestros assets, index, y todo lo que se necesita para enviar a produccion nustro proyecto
13. Añadimos nuestra carpeta de despliegue en el archivo firebase.json
14. Con la instruccion $ firebase deploy, subimos toda nuestra carpeta de despliegue a nuestro hosting
15. Este comando nos aroa una url en la que en la que podemos visualizar nuestro proyecto en ambiente productivo, esta url es un dominio con https incluido
16. Este proyecto podemos visualizarlo en internet mediante la url: https://angularstore-pltz.web.app/

## Artefactos nucleos de angular

- Componentes: bloque principal para aplicaciones en angular, normalmente y es de buena practica que los componentes tengan responsabilidades unicas y estilos apropiados, los componentes tienen basicamente cuatro archivos, el de logica, el de pruebas, el html y el de estilos, para crear un compoennete y toda la logica que lo respalda se debe ejecutar el comando: $ ng g c ruta/nombre_componente
- Pipes: funcion para maquillar los datos que mostramos en el html, es como otra capa de visualizacion o modificacion por encima del dato a mostrar en el html, para crear un pipe con toda la logica que lo respalda se debe ejecutar: $ ng g p ruta/nombre_del_pipe
- Directivas: formas de hacer modificaciones del DOM directamente, normalmente se evitan, puesto que los frameworks traen sus propias directivas como *ngIf o *ngFor para angular, sin embargo si se requiere podemos crear nuestras directivas de forma personalizada, para crear una directiva y toda la logica que lo respalda se ejecuta: $ ng g d ruta/nombre_de_la_directiva
- Servicios: separan la logica de negocio de la ux, es una forma de hacer modular la aplicacion y consumir los datos desde los diferentes componentes, el comando para crear un servicio y toda lo logica que lo respalda es la siguiente: $ ng g s ruta/nombre_servicio

## Ciclo de vida de los componentes

1. El constructor corre antes del render y corre solo una vez, no hacer llamadas asy aca
2. El onInit corre antes del render y corre una sola vez, se pueden realizar llamadas asy aca, debe implementarse la interfaz requerida en la clase del componente
3. El onChanges corre antes y durante el render y se ejecuta cada vez que hay un cambio en los inputs, debe implementar la interfaz requerida
4. El afterViewInit corre despues del render, es usado para manipular los hijos del componente, hace parte de un grupo de metodos que gestionan cambios similares, debe implementarse la interfaz requerida
5. El onDestroy se ejecuta al momento de eliminar el componente, hay eventos que se mantienen corriendo aun despues de destruir el componente, dichos eventos hay que saber detenerlos dentro de esta funcion al momento de destruir el componente, debe implementarse la interfaz requerida

## Obtener datos de una API

Es un gran uso para los servicios y angular cuenta con su propio modulo que permite realizar estas piticiones (Angular Http), el modulo debe ser llamado desde nuestro app.module.ts y posterior inyectado en el servicio o componente en donde se vaya a usar

## Reactividad

Trata sobre el estado de la aplicacion en relacion a los datos, sirve para poder comunicar nodos de nuestra estructura de arbol html, entendiendo que cada nodo es un componente, este tema implementa el patron observable, para difundir cambios en los datos a los componenetes interesados, suscritos a la observacion

## Linters

Aplicar buenas practicas de angular de forma sistematizada, angular tiene una guia de estilos que explica como debemos nombrar archivos, variables, entre otras cosas, para configurar un linter y ver si se cumplen con estas reglas se debe:

1. configurar un linter con: $ ng add @angular-eslint/schematics o ng add @angular-eslint/schematics@14 o algun otro dependiendo de la version de angular
2. correr: $ ng lint, esto nos muestra en consola errores o malas practicas en las que hemos incurrido en el proyecto segun los lineamientos de angular, correr este comando tambien nos muestra que comando correr en la configuracion de un linter

## Librerias comunes

- Swiper: libreria para realizar sliders, se instala con $ npm i swiper en nuestro proyecto angular, se importa el modulo SwiperModule en el app.module.ts y se importan los estilos en el archivo base de estilos styles esta libreria tiene su respectiva documentacion de instalacion y uso en su portal web de internet
