# PRIMERA ENTREGA DEL PROYECTO FINAL
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

## Rutas Inexistentes
Se crea la ruta **erroresRouter.js** para implementar e informar de rutas inexistentes

## Funcionalidades para Administrador
Se crear el controller **administrador.controler.js** el mismo tiene la Clase **Administrador** y el método **isAdmin**
En **productosRouter.js** se crea un objeto de la clase **Administrador** y por el Constructor se indica si es admin (true) o no(false) 
Luego en las rutas se valida **isAdmin()** permitiendo entrar a las funcionalidades según lo indicado en la consignar