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

## Estructura de un proyecto

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

- promesavsobservable.js: describe las diferencias entre un observable y una promesa
- typescriptrepaso.ts: repaso de Ts
- product.model.ts: archivo creado para crear una interfaz para un objeto de nuestro proyecto
- app.module.ts: archivo donde se importan los modulos que usaremos para el proyecto
- app.component.html y .ts: bases Angula
- services/store: servicio donde creamos un observable
- services/products: servicio donde usamos la libreria HttpClient y creamos funciones que consumen APIs
- components/txt y btn: hacen uso del servicio store e implementa ejemplo de como usarse
- components/img: implementa las funciones del servicio products, contiene ejemplos y explicaciones de los mismos
- pipes/reverse: bases sobre los pipes (explicado tambien en el app.component)
- models/product: bases sobre creacion de interfaces
- directives/highlight: bases sobre directivas (explicado tambien en el app.component)
- services/autenticacion: servicios que explican un login con jwt, json web token
- models/autenticacion: modelos para el servicio de autenticacion
- interceptors: conceptos basicos sobre interceptores
- services/download: servicios para descargar y cargar archivos
- pages: carpeta donde estan guardadas las paginas de la aplicaciones
- app-routing.module: archivo donde se referencia cada componente (pagina) con su url
- app.module.ts: archivo que define el modulo principal y la integracion con los demas modulos
- cms: modulo de la aplicacion
- services/custom-preload: estrategia personalizada de carga de modulos
- guards/auth: bases sobre guard canActive
- guards/exit: bases sobre guard canDesactive
- components/form-control: componente con las bases sobre formularios reactivos

## Debug

Existe la extension Angular DevTools para Chrome, nos avisa que webs estan construidas en angular y nos habilita mas opciones en el inspector para debuguear diferentes aspectos de una web en esta tecnologia

## Deployment con Firebase

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

- Es un gran uso para los servicios y angular cuenta con su propio modulo que permite realizar estas piticiones (Angular Http), el modulo debe ser llamado desde nuestro app.module.ts y posterior inyectado en el servicio o componente en donde se vaya a usar.
- Estas peticiones pueden crear, eliminar, consultar y actualizar informacion de una base de datos, la implementacion de estas cinco peticiones es lo que se concidera un CRUD.
- Las peticiones con este modulo se realizan con el patron observador y cancela la observacion cada que se recibe una respuesta correcta.
- Los problemas de CORS en las peticiones obedecen a que el API no acepta consultas desde otros dominios, esto debe resolverse desde el back, configurando los dominios de origen aceptados para hacer consultas o creando un proxy desde el front para cambiar el dominio de origen al momento de realizar la peticion, esta configuracion se crea en el archivo proxy.config.json en la raiz del proyecto con la siguiente configuracion basica: { "/api/\*": { "target": "https://young-sands-07814.herokuapp.com", "secure": true, "logLevel": "debug", "changeOrigin": true } }. Este archivo es llamado desde el package.json añadiendo al objeto script la linea "start:proxy": "ng serve --proxy-config ./proxy.config.json", que indica el archivo con la configuracion, por ultimo hay que volver a correr el proyecto con esta nueva linea de comando: $ start:proxy ó $ ng serve --proxy-config ./proxy.config.json, que indica donde y que es la configuracion realizada, tener encuenta que el proxy aplica no mas para ambiente de desarrollo, para ambiente productivo se deben configurar las variables de entorno

## Reactividad

Trata sobre el estado de la aplicacion en relacion a los datos, sirve para poder comunicar nodos de nuestra estructura de arbol html, entendiendo que cada nodo es un componente, este tema implementa el patron observable, para difundir cambios en los datos a los componenetes interesados, suscritos a la observacion

## Linters

Aplicar buenas practicas de angular de forma sistematizada, angular tiene una guia de estilos que explica como debemos nombrar archivos, variables, entre otras cosas, para configurar un linter y ver si se cumplen con estas reglas se debe:

1. configurar un linter con: $ ng add @angular-eslint/schematics o ng add @angular-eslint/schematics@14 o algun otro dependiendo de la version de angular
2. correr: $ ng lint, esto nos muestra en consola errores o malas practicas en las que hemos incurrido en el proyecto segun los lineamientos de angular, correr este comando tambien nos muestra que comando correr en la configuracion de un linter

## Librerias comunes

- Swiper: libreria para realizar sliders, se instala con $ npm i swiper en nuestro proyecto angular, se importa el modulo SwiperModule en el app.module.ts y se importan los estilos en el archivo base de estilos styles esta libreria tiene su respectiva documentacion de instalacion y uso en su portal web de internet
- ngx-quickilink: libreria para precargar modulos segun los links que aparezcan en pantalla, se instala con $ npm i ngx-quicklink --save, y se deben realizar las importaciones correspondientes en los archivos involucrados
- Bootstrap: Framework para css, proporciona estilos predeterminados para inputs, botones, textos y mas etiquetas de un html, estos estilos pueden escribirse como clases dentro del atributo class. bootstrap esta basado en flex layout de css, este framework divide la pantalla en 12 columnas diferentes con ilimitadas filas y proporciona clases para manejar estas columnas. El maximo poder de Bootstrap es su responsive que se logra gracias a sus breakpoints. Bootstrap tiene dos formas de ser usada en un proyecto, o se hace referencia a su libreria desde el html o se descarga, importan su dependencia para el proyecto y se actualiza el archivo angular.json con los archivos donde esta el empaquetado de bootstrap, Bootstrap no es solo apariencia, responsive y visualizacion de etiquetas, tambien contiene diferentes funcionalidades para mejorar la experiencia de usuario, para muchas de estas funcionalidades tambein se requiere el js proporcionado por este framework. Esta tecnologia tiene una gran documentacion con muchisimos ejemplos practicos y muchos detalles de como ser usada en nuestro proyecto que puede ser consultada desde la web.
- Material: es un framework que permite crear componentes con funcionalidades ya desarrolladas, hay una gran variedad de componentes en la documentacion de angular material, tambien contiene estilos predeterminados y ayudas para mejorar la experiencia de usuario como Bootstrap, es bueno importar estas librerias desde el inicio, para trabajar con ellas desde el prinicpio

## Modelos

Son archivos para estructurar los objetos que vamos a crear, mediante clases o interfaces, normalmente se crean dentro de la carpeta models y con la estructura de nombre: nombre_de_mi_modelo.model.ts

## Ambientes en angular

En angular se pueden tener N cantidad de ambientes, cada ambiente con sus propias variables de entorno y mas espesificaciones, al ejecutar $ ng serve, angular corre en ambiente de desarrollo por defecto, esa ejecucion es lo mismo que ejecutar $ ng serve --configuration development, por ende si queremos correr en ambiente productivo se debe ejecutar: $ ng serve --configuration production, para configurar la ejecucion de otros ambientes con sus propias variables, se debe configurar el archovo angular.json y se deben crear los ts necesarios en la carpeta environments del proyecto, configurando cada ts con sus variables especificas segun el ambiente al que referencien

## Callback Hell

Esta practica hay que evitarla, se presenta cuando una peticion depende de otra y se empiesa a anidar y a anidar peticiones dentro de peticiones.

## Interceptores

Codigo incrustado entre la aplicaicon y la comunicacion con el back para diferentes usos, se puede crear un interceptor con todas la logica que lo respalda con el comando: % ng g interceptor carpeta_de_interceptores/nombre_del_interceptor

## Descargar y cargar de archivos

- Para gestionar esto en angular hay que importar la libreria file-saver que nos permite hacer descargar por medio de http, esta libreria la descargamos con: $ npm i file-saver, igualmente tenemos que descargar el tipadode los archivos de la siguiente manera: $ npm install @types/file-saver --save-dev
- La descarga de archivo es mediante una peticion comun a una API, pero la carga es una petiicion a una api donde los parametros enviados son binarios y no json

## Routing

- El routing de la aplicacion contiene las paginas que se van a mostrar dependienddo de la url en el navegador, las paginas son componentes y se crean igual que un componente solo que tienen comumente su ruta de acceso en el routing y abarcan toda una pagina en el proyecto, los componentes son usados por las paginas.
- Para crear una pagina y toda la logia que la respalda se hace igual que un componente: $ ng g c ruta/nombre_pagina

## Guardianes

Los Guards son clases que protegen las rutas, existen 4 tipos de guardianes diferentes, cada clase puede implementar varios guardianes, para crear un guard y todo el codigo que lo respalda ejecutamos: $ ng g g ruta/nombre_gel_guard, y posteriormente seleccionamos los guard o validaciones que queremos hacer en ese archivo, los tipos de guards son:

- (CanActivate) Antes de cargar los componentes de la ruta.
- (CanLoad) Antes de cargar los recursos (assets) de la ruta.
- (CanDeactivate) Antes de intentar salir de la ruta actual (usualmente utilizado para evitar salir de una ruta, si no se han guardado los datos).
- (CanActivateChild) Antes de cargar las rutas hijas de la ruta actual.

## Deploy con Netlify

Plataforma que permite lazar aplicaciones en ambiente productivo u otro, dependiendo de a que rama se realize un merge o push en github u otras plataformas de versionamiento de codigo, dentro de la plataforma se selecciona la rama que queremos lanzar y los comandos qeu queremos correr al momento de actualizar dicha rama, este metodo de lanzamiento tambien tiene su archivo de configuracion en netlify.toml donde se desccribe que comandos se ejecutan, donde se redireccionan las url, entre otras cosas. Este proyecto se puede visualizar tambien en https://gorgeous-lolly-juancursocol.netlify.app/

## Bundle Size

- Esto es el peso de la aplicacion, para mejorarlo hay que aplicar buenas practicas de modularizacion, carga, pregarga, lazyloading, Tree shaking, Webpack Bundle Analyzer, entre otros
- Para un primer analicis del codigo podemos usar Webpack Bundle Analyzer, para esto instalamos este complemento con: $ npm install webpack-bundle-analyzer --save-dev, posteriormente generamos una aplicacion de produccion pero con una bandera que nos genera un archivo de estadisticas del proyecto: $ ng build --stats-json, este archivo se genera dentro de la carpeta dist con el nombre stats.json, posteriormente corremos el paquete de nuestor compoennete de analiticas y lo referenciamos a nuestro archivo de estadisticas: $ npx webpack-bundle-analyzer dist/my-store/stats.json, por ultimo podemos abrir el link que este comando nos proporciona y visualizar la primera analitica de nuestra aplicacion, igualmente en el archivo package.json se pude crear un atajo para el comando, en este proyecto el atajo es la palabra analyzer y se ejecuta de la siguiente forma: $ npm run analyzer, para verificar cual es el comando que este atajo corre, mirar el archivo package.json
- Otra herramienta es una web llamada bundlephobia, esta web nos permite visualizar el peso de las librerias que añadimos a nuestros proyectos y podemos ver alternativas similares a la misma
- En el archivo angular.json se puede modificar el tamaño minimo y maximo de nuestros archivos, para que angular nos advierta cuando esta un archivo pesando mucho, los tiempos de carga segun los tamaños de los archivos se pueden visualizar en la web https://perf-budget-calculator.firebaseapp.com/
- Otra forma de precargar modulos es mediante las cadenas de markov, se necesita una data historica que nos muestra como se comporta el usuario al entrar en la aplicacion y segun esa informacion se precargan los modulos, las cadenas de markov se usan para muchas cosas, desde ingenieria hasta marketing, en la carpeta de assets hay una imagen de como funcionan y como se pueden representar dichas cadenas, la forma de integrar google analitics con nuestra web, es ingresar a nuestra cuenta en la plataforma de google analitycs, crear un nuevo flujo para observar nuestra web y pegar en el index.html el fragmento de codigo que google nos proporciona, posteriormente realizamos unas configuraciones visibles en el app.component.ts para poder enviar los datos a google analitycs, toda esta forma de precarga de modulos se puede consultar desde el proyecto guess-js en github
- Otra forma es implementar una aplicacion web progresiva, esto se hace mediante la linea de codigo: $ ng add @angular/pwa --project my-store, y sirve para guardar los archivos en cache y no estar descargando los archivos del servidor cada vez que se llamen, el comando a correr puede ser diferente segun la version de angular y de la libreria
- Para mejorar los tiempos de carga de una aplicacion se puede ejecutar el renderizado desde el back y no con js en el cliente, para esto existe documentacion en angular y es como ejecutar una linea de comando a demas de otros ajustes explicados en la documentacion, existe algun codigo que no se puede ejecutar desde el back, puesto que se necesita ejecutar cuando el codigo esta viviendo en el navegador, para esto angular proporciona una solucion y es implementar unas validaciones que permiten saber desde que plataforma se esta ejecutando el codigo y dependiendo de la plataforma ejecuta un codigo u otro
- Implementar changeDetection:ChangeDetectionStrategy.OnPush, dentro del decorador @Component permite que el componente donde se realicen cambios actualice unicamente los a los componenetes hijos relacionados al cambio y no todos
- Los pipes por defecto son funciones puras, esto significa que los valores que regresan se guardan en cache, de tal forma que si se ejecuta el pipe y se le envian argumentos que ya se le han enviado en el paso, la aplicacion obtiene el resultado de cache y no debe volver a ejecutar la funcion nuevamente, si uno quiciera cambiar la naturalidad de un pipe se hace dentro del decorador @pipe cambiando el atriputo pipe:true a pipe:false

## PWA

- Aplicaciones web progresivas, plataformas para mobile pueden ser pwa, hibridas o nativas, cada una con sus pros y sus contras, las pwa implementan service worker que permiten interceptar datos que van del navegador a internet, y realizar consultas en cache en vez de internet. nomrmlamente se necesita unicamente correr el comando: $ ng add @angular/pwa, esto crea carpetas y archivos para optimizar el codigo, crea carpetas con diferentes iconos de la aplicacion, un manifest con diferentes opciones de colores e iconos, un archivo llamado ngsw-config.json donde se ajustan todas las opciones de optimizacion del cache y actualizaciones en otros archivos ya existentes para terminar de vincular este proceso al codigo. Una pwa debe ser probada desde un entorno de producion puesto que correr con servidores https, esto permite que se pueda abrir la web desde el celular y verse muy adaptada al movil y que al moemnto de agregar la web a la pantalla principal se agregue como si fuera una aplicacion nativa con icono, titulo y todo ello, al momento de abrir la app movil se vera la web como si fuera nativa y no como abierta con url
- La instalcion en el movil de forma nativa tambien puede ejecutarse automaticamente, sin necesidad de ir hasta las opciones del navegador y darle agregar web a patanlla principal, al igual que se puede activar o desactivar el boton dependiendo de si esta o no instalada la app en el movil
- Esta forma de instalacion tambien permite actualizaciones automaticas puesto que la aplicacion proviene de una web, notificaciones, para todo esto hay documentacion oficial en angular

## Formularios

Template Forms:

- Son formularios controlados por modelo
- El modelo basado en plantillas
- Angular crea modelos como FormGroups y FormControls
- Directivas de Angular NgForm y NgModel

Reactive Forms:

- Mucho mas potentes y mejor rendimiento
- Basados en observable
- Mejora el tipo de Validación de los datos
- Se usa para Formularios complejos

## Deployment con Azure
1. Crear ambientes y sus respectivas configuraciones en el angular.json
2. Crear los atajos a los comandos de despliegue en el package.json
3. Llamar los atajos de los comandos desde las configuraciones del Azure
- Se puede crear la carpeta dist de cada ambiente con $ ng build --configuration nombre_ambiente
- Se puede correr la aplicacion de un ambiente en particular con $ ng serve --configuration nombre_ambiente

## Pruebas unitarias
- Jasmine: Framework que nos ayuda a ejecutar pruebas en js
- Karma: Herramienta que corre las pruebas que se escribieron con Jasmine, esta configurado en el archivo, karma.conf.js, el puerto, configuracion del reporte de covertura, donde guardarlo, entre otras cosas
- Reporte de covertura: Metrica que nos dice que tanto codigo abarcan nuestras pruebas
- Archivo tsconfig.spec.json: contiene la configuracion que se ejecuta al momento de correr el comando $ ng test
- Las pruebas se crean en cada .spec.ts de cada componente y pueden contener varias partes, el beforeEach, que se ejecuta antes de cada prueba, el it que son las pruebas en si, estas pruebas contienen un argumento con datos de prueba y un argumento en la funcion reservada de jasmine expect con el resultado esperado despues de ejecutar una funcion a probar, aca se pueden probar metodos, carga de archivos, servicios pipe, entre otras muchas otras cosas
- Todas las pruebas se pueden visualizar mediante el puerto que las expone atravez del navegador y el reporte de covertura se puede revisar en el folder de salida especificado en el archivo de configuracion de karma
