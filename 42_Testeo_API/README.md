# Entrega - Clase 42 Testeamos nuestra API REST
![N|Solid](https://cdn2.iconfinder.com/data/icons/medicine-and-medical-diagnostics-1/32/Medical_diagnostics_laboratory_test_tubes_experiment_chemistry-48.png)
## Desarrollo
Sobre la base de la entrega correspondiente a la clase **40-Mejorar Arquitectura de nuestra API** se agregaron los conceptos correspondientes a la utilización de **Axios**, **Supertest, Chai y Mocha**
## Axios
Se desarrolla un cliente HTTP de pruebas que utiliza Axios. 
- **Ejecución del Cliente Axios para pruebas**
Para Ejectuar el Cliente Axios de pruebas en primer lugar se debe levantar el Servidor de nuestra aplicación Express ejecutando en una terminal **node server.js** o **npm start**, si no se levanta el server no se pueden realizar las pruebas.

Dentro de la carpeta **\axios** se encuentran los siguientes archivos:
- **axiosget.js**  
Permite realizar una petición del tipo *GET* a la Api de Productos, como resultado se obtiene el listado de todos los *PRODUCTOS* registrados en la BD. Para ejecutar, abrir una nueva terminal y posicionarse en la carpeta **axios**. Luego ejecutar **node axiosget**. 
- **axiospost.js**  
Permite realizar una petición del tipo *POST* a la Api de Productos, como resultado se registra/añade un nuevo *PRODUCTO* a la BD. Para ejecutar, abrir una nueva terminal y posicionarse en la carpeta **axios**. Luego ejecutar **node axiosput**
- **axiosput.js**  
Permite realizar una petición del tipo *PUT* a la Api de Productos, como resultado se modifica/actualiza un *PRODUCTO* ya existente en la BD, por lo tanto antes de ejecutar debe garantizar que en la línea 7 del archivo **let idProd="/6384a6554ea2302fbadd38b7"** se indique un *id de producto* existente en la BD.
Para ejecutar, abrir una nueva terminal y posicionarse en la carpeta **axios**. Luego ejecutar **node axiosput**
- **axiosdelete.js**  
Permite realizar una petición del tipo *DELETE* a la Api de Productos, como resultado se elimina/borra un *PRODUCTO* ya existente en la BD, por lo tanto antes de ejecutar debe garantizar que en la línea 10 del archivo **let idProd="/6384a6554ea2302fbadd38b7"** se indique un *id de producto* existente en la BD.
Para ejecutar, abrir una nueva terminal y posicionarse en la carpeta **axios**. Luego ejecutar  **node axiosdelete**

## Supertest Chai Mocha
Utilizando **Supertest, Mocha y Chai** se genera el código que permite realizar las pruebas de nuestra *API REST PRODUCTOS*
- **Ejecución de pruebas**
Para Ejectuar las pruebas en primer lugar se debe levantar el Servidor de nuestra aplicación Express ejecutando en una terminal **node server.js** o **npm start**, si no se levanta primer el server no se pueden realizar las pruebas.
Para la ejecución de las pruebas se debe ejecutar **npm test**

Dentro de la carpeta **\test** se encuentran los siguientes archivos/carpetas:
- **generador\productos.js**  
Este archivo implementa **faker** a través de la función **generar** y devuelve un objeto con los atributos que permiten generar un nuevo PRODUCTO.

- **apirestfull.test.js**  
En este archivo se encuentra la implementación de **Supertest** y **Chai** y se encarga de probar los siguientes métodos *GET, POST, PUT y DELETE*. Para los métodos *PUT y DELETE* se debe asegurar que las variables **idProdActualizar** (línea 36) y **idProdEliminar** (línea 51) tengan asignados valores de id de productos existentes en las BD. Puede obtener estos valores desde la prueba Axios del método GET.

A continuación se presenta el resultado de las pruebas ejecutadas.

    test api rest full productos
    GET
      ✔ debería retornar un status 200, CONSULTA todos los productos (158ms)
    POST
      ✔ debería INSERTAR un producto (298ms)
    PUT
      ✔ debería ACTUALIZAR un producto existente (308ms)
    DELETE
      ✔ debería ELIMINAR un producto existente (180ms)
