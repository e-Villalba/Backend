# 46-frameworks

# Entrega - Clase 46 Frameworks
![N|Solid](https://cdn0.iconfinder.com/data/icons/mobile-basic-vol-1/32/Filter-48.png)
## Desarrollo
Sobre la base de las entregas anteriores se dearrolló un CRUD correspondiente a productos utilizando el **framework SAILS** y como persistencia en Base de Datos se utilizó **MongoDB**
## Dependencias
Instalar: *npm -g i sails.* y *npm install sails-mongo*
## Persistencia
Dentro del archivo **config\datastores.js** se encuentran los datos de la BD a configurar, para probar funcionamiento
## Rutas
Además de las rutas generadas automáticamente por **Sails** en el archivo *config/routes.js* se encuentran las rutas adicionales generadas. 
## Funcionamiento
Ejecutar con *Sails lift* o *nodemon server.js* (Ejecutar en ventana de comandos abierta como *administrador*)
Se presenta un página de *login* donde el usuario solo indica su nombre, no hay validación de contraseña.
Una vez ingresado el nombre el usuario ingresa a la página principal donde:
* En la lista central se **listan** la totalidad de Productos registrados en la Base de Datos MongoDB
* El usuario puede **agregar** nuevos productos.
* El usuarios puede **eliminar** productos existentes o generados por el
* Se pueden **actualizar** los datos de los productos listados.

De esta forma se implementa **Sails** y se utilizan las rutas del CRUD de PRODUCTOS.

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Thu Dec 08 2022 09:30:51 GMT-0300 (hora estándar de Argentina) using Sails v1.5.3.

<!-- Internally, Sails used [`sails-generate@2.0.7`](https://github.com/balderdashy/sails-generate/tree/v2.0.7/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

