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
### EJECUCIÓN
- En el archivo **index.js** se importan los objetos del archivo **index.js** de la carpeta **dao**, son ejecutados los métodos heredados en los contenedores y de esta forma se implementa el CRUD solicitado.