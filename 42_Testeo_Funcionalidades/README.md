# Entrega - Clase 40 Mejorar Arquitectura de API
![N|Solid](https://cdn0.iconfinder.com/data/icons/thin-line-icons-for-seo-and-development-1/64/Programming_Development_Api-48.png)
## Organización Carpetas
Se organizan las carpetas, se crea la carepta **\src** y dentro de esta las carpetas **\controlleres** , **\negocio** y **\persistencia** que reflejan la arquitectura de capas. También se ubica aquí la carpeta **\clases** que tiene las clases que permiten implementar Dato y DTO en la capa de persistencia
## Desarrollo
Tomando como base la entrega de la **Clase 38_Dividir en Capas** se realizaron los siguientes ajustes para cumplir con las consignas correspondientes a la  entrega **Clase 40 Mejorar Arquitectura Api**
- **Mensajes**  
se agregaron las capas de Controller, Negocio y Persistencia para que los mensajes persistan en los diferentes medios (Mongo DB, File y Memoria)
- **Capa de Persistencia**  
Se modifican las capas de persistencias de **Productos** y **Mensajes** incorporando los conceptos de *Factory*, *DAO*, y *DTO*.
- **DAO**  
El DAO seleccionado se determina por un parámetro en línea de comandos, sus valores posibles deben ser **mongodb** , **file**, **memoria**. De no indicar ninguno al ejecutar **node server.js** se asigna por defecto **mongodb** *(mongo atlas)*. Se implementa el **patrón Factory** que devuelve el tipo de persistencia a utilizar.
- **Singleton**  
Desce la capa de persistencia y según el tipo de persistencia, Factory genera clases para cada Tipo de Persistencia, en estas clases se implementa el patrón Singleton asegurando que se cree una sola instancia de mecanismos de acceso a los datos. Estas son las clases ubicadas en **\src\clases** que implementan singleton con *getInstanceMensaje* y *getInstanceProducto*