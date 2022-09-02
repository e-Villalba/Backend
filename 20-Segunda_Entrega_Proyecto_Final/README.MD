# SEGUNDA ENTREGA DEL PROYECTO FINAL ![N|Solid](https://cdn2.iconfinder.com/data/icons/webina-seo-development-and-marketing/128/seo_web_2-01-2-42.png)
## Contenedores
En la carpeta **Contenedores** se encuentran los archivos:
- **contenedorFirebase.js**: Implementa la conexión con Firebase y el CRUD a realizar.
- **contenedorMongo.js**: Implementa la conexión con MongoAtlas y el CRUD a realizar.

### DB Firebase  
- En la carpeta **dbFirebase** se encuentra el archivo de Clave Privada para el acceso a la DB Firebase.
### MODELS
En la carpeta **Modules** se encuentran los archivos:
- **carritoModel.js**: Implementa el Schema Carritos para Mongo.
- **productoModel.js**: Implementa el Schema Productos para Mongo.

### DAOS
- En la carpeta **dao** se encuentran los arhchivos que implementan las clases de **productos** y **carritos**.
- Estas clases heredan de **contenedores**.
- El archivo **index.js** implementa el punto central de acceso y con la variable **pers** determina si se persisten en **Mongo** o **Firebase**
- Los objetos Dao son seteados según la persistencia deseada y luego se exportan.
### EJECUCIÓN CRUD JS
- En el archivo **index.js** se importan los objetos del archivo **index.js** de la carpeta **dao**, son ejecutados los métodos heredados en los contenedores y de esta forma se implementa el CRUD solicitado.

### EJECUCIÓN Routers
- En el archivo **app.js** se implementan Routers que permiten ejecutar el CRUD desde endpoints para **http://localhost:8080/api/productos** y **http://localhost:8080/api/carrito**
## Productos
En la ruta base '/api/productos' se implementan las funcionalidades solicitadas:  
### **GET: '/:id?'** - 
Permite listar todos los productos disponibles ó un producto por su id (disponible para usuarios y administradores)   
### **POST: '/'** - 
Permite incorporar productos al listado (disponible para administradores)  
Ejemplo objetos de Producto a incluír en el Body del Post al probar en Postman  
{  
        "nombre": "Camisa",  
        "descripcion": "Camisa de invierno",  
        "codigo": "001",  
        "foto": "https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/key-lock-unlock-clef-256.png",  
        "precio":11.11,  
        "stock": 11  
}  

### **PUT: '/:id'**   
Permite Actualizar un producto por su id (disponible para administradores)    
### **DELETE: '/:id'**
Borra un producto por su id (disponible para administradores)  
## Carrito
En la ruta base '/api/carrito' se implementan las funcionalidades solicitadas:
### **POST: '/'**  
Permite crear un carrito y devuelve su id.  
### **DELETE: '/:id'**  
Vacía un carrito y lo elimina.  
### **GET: '/:id/productos'**  
Permite listar todos los productos guardados en el carrito  
### **POST: '/:id/productos'**  
Incorporar productos al carrito por su id
Nota: para poder incorporar productos se debe haber creado primero los productos (POST de productos) y el Carrito (POST CARRITO)
Ejemplo array de Productos a incluír en el Body del Post al probar en Postman
[1,2] donde 1 y 2 son Id de productos previamente generados e incluídos en el array.

### **DELETE: '/:id/productos/:id_prod'**  
Eliminar un producto del carrito por su id de carrito y de producto  
