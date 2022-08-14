# Entrega - Nuestra Primera Base de Datos [![N|Solid](https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_Cloud-Server-Database-Hosting-50.png)]
## Desarrollo
Tomando como base la entrega de la **Clase 12 - Chat Con Web Socket** se realizan los agregados de KNEX para:
- Manejar persistencia de **Mensajes** en SQLite.
- Manejar persistencia de **Productos** en MariaDB/MySQL.
***
### Referencias agregadas
- Para MySQL: *npm i knex mysql*
- Para SQLite: *npm i knex sqlite3*
***
### Base de Datos
- **Mensajes**: En la Carpeta *DB* se genera el archivo *ecommerce.db3*
- **Productos**: Utilizando la extensión de "MySQL" de VSCode, se genera nueva BD *ecommerce*
- Para el acceso a las Base de Datos se genera la carpeta **Options** con los archivos *mariaDB.js* y *sqliteDB.js*
- **Creación de Tablas**: En la carpeta *scripts* se encuentan los archivos *create_table_mensajes.js* y *create_table_productos.js* que generan en cada una de las BD las tablas para la persistencia de Productos y Mensajes solicitadas en el desafío.
- 

### Implementación
- **Mensajes**: En **server.js** se agregan las funciones:
    - *saveMessage*: Se encarga de persistir los nuevos mensajes en la *BD ecommerce de SQLite*
    - *getAllMessages*: Obtiene los mensajes persistidos en la *BD ecommerce de SQLite* y los presenta al usuario vía websocket.

- **Productos**: En *productBank.js* se agrega la utilización de knex.
    - *add*: Se implementa Knex para que realice un *insert* de los nuevos productos en la *BD ecommerce de MySQL*
    En *server.js* desde el post se llama al controlador *producto.controller.js* que desde el método *create* invoca a *add* que implementa Knex y persiste los datos.
    - *list*: Se impleenta Knex para que obtenga todos los productos de la *BD ecommerce de MySQL* y los presente al usuario vía Web Socket.
    En *server.js* desde el get *productos* se llama al controlador *producto.controller.js* que desde el método *getAll* invoca a *list* que implementa Knex y obtiene los datos.