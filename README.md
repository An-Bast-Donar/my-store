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

- Lanzamiento de la aplicacion a un ambiente productivo, mediante firebase hosting
- Para firebase hosting se requiere un gmail
- Crear un nuevo proyecto en console firebase
- Usamos en servicio de hosting y seguimos los pasos
- Instalamos firebase tools en nuestra maquina: $ npm install -g firebase-tools
- Comprobamos la version de firebase tools en nuestro proeycto local: $ firebase -V
- Conectamos nuestra maquina con la configuracion de consola de firebase: $ firebase login
- Corremos la instruccion para seleccionar los servicios que usaremos, el proyecto de firebase, la carpeta a distribuir y otras opciones : $ firebase init
- Se creara una carpeta de distribucion con el nombre proporcionado, esta carpeta puede ser eliminada, puesto angular genera su propia carpeta de despliega a la que se le puede hacer referencia en las configuraciones para el despliegue con firebase hosting
- En el nuevo archivo firebase.json se puede configurar la ruta de la carpeta de despliegue
- Generar una compilacion de angular a nivel productivo, el comando: $ ng build, con este comando generamos una compilaicion a produccion, este comando transpira el proyecto, pasa de sass a css, de ts a js y otras optimizaciones para que el proyecto quede en un alto nivel, la compilacion de este proyecto se genera en la carpeta dist/nombre_del_proyecto
- Esta carpeta es la carpeta de despliegue y contiene nuestros assets, index, y todo lo que se necesita para enviar a produccion nustro proyecto
- Añadimos nuestra carpeta de despliegue en el archivo firebase.json
- Con la instruccion $ firebase deploy, subimos toda nuestra carpeta de despliegue a nuestro hosting
- Este comando nos aroa una url en la que en la que podemos visualizar nuestro proyecto en ambiente productivo, esta url es un dominio con https incluido
- Este proyecto podemos visualizarlo en internet mediante la url: https://angularstore-pltz.web.app/

## Artefactos nucleos de angular

- Componentes: bloque principal para aplicaciones en angular, normalmente y es de buena practica que los componentes tengan responsabilidades unicas y estilos apropiados, los componentes tienen basicamente cuatro archivos, el de logica, el de pruebas, el html y el de estilos, para crear un compoennete y toda la logica que lo respalda se debe ejecutar el comando: $ ng g c ruta/nombre_componente
- Pipes:
- Directivas:
- Servicios: separan la logica de negocio de la ux, es una forma de hacer modular la aplicacion y consumir los datos desde los diferentes componentes, el comando para crear un servicio y toda lo logica que lo respalda es la siguiente: $ ng g s ruta/nombre_servicio

## Ciclo de vida de los componentes

- El constructor corre antes del render y corre solo una vez, no hacer llamadas asy aca
- El onInit corre antes del render y corre una sola vez, se pueden realizar llamadas asy aca, debe implementarse la interfaz requerida en la clase del componente
- El onChanges corre antes y durante el render y se ejecuta cada vez que hay un cambio en los inputs, debe implementar la interfaz requerida
- El afterViewInit corre despues del render, es usado para manipular los hijos del componente, hace parte de un grupo de metodos que gestionan cambios similares, debe implementarse la interfaz requerida
- El onDestroy se ejecuta al momento de eliminar el componente, hay eventos que se mantienen corriendo aun despues de destruir el componente, dichos eventos hay que saber detenerlos dentro de esta funcion al momento de destruir el componente, debe implementarse la interfaz requerida
