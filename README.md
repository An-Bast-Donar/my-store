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
