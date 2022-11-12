# Entrega - Clase 32 LOGGERS Y GZIP 
![N|Solid](https://cdn3.iconfinder.com/data/icons/dompicon-glyph-file-format-2/256/file-log-format-type-52.png)![N|Solid](https://cdn2.iconfinder.com/data/icons/black-file-type/512/file__zip__archive_-52.png)

## Desarrollo
Tomando como base la entrega de la **Clase 28_Dotenv** se realizaron los siguientes ajustes para cumplir con las consignas correspondientes a la  entrega **Clase 32 LOGGERS Y GZIP**
- **GZIP**: en el archivo server.js se utiliza *app.use(compression());* se comparan las salidas de la ruta info, con y sin compresión, y se comprueba el menor tamaño al usar la compresión.

- **LOGGER**: 
        - Se instala con ***npm i log4.js*** la dependencia de *log4.js*
        - Se crea la carpeta *logger* con el archivo *logger.js* donde se configuran las *categories* y *appenders* de log4.js
        - En todas las rutas se aplican los logs solicitados para la entrega.