# Entrega - Proyecto Final
![N|Solid](https://cdn4.iconfinder.com/data/icons/business-solid-the-capitalism/64/Product_valuation-48.png)
## Desarrollo
Sobre la base de las entregas anteriores, tomando fundamentalmente la entrega de la clase  **36- Tercer Entrega del Proyecto Final** se desarrolla la entrega final del Proyecto
## Entidades
Tal lo solicitado en la consigna de trabajan las siguientes entidades:
* Usuarios.
* Productos.
* Carritos
* Ordenes
* Mensajes
## Capas, Patrones y Tecnologías utilizadas
- Se generan para cada entidad las  **Rutas** que permiten invocar a las **Api Restful**, estas rutas se implementan con Métodos en Capas de **Negocio**,**Controlador**,**Persistencia**. 
- Desde la persistencia se invocan a las clases **Dao**, **DTO** y la **Factory** correspondiente que determina el *medio* de Implementación que para este caso es **mongodb** en modo local para entorno *DEV* y en mongoose para *PROD*
- Para la **Conexión** y la **Factory se implementa el patrón *Singleton*.
- Tambíen se implementa **socket.io** para el envío de mensajes y la actualización del listado de productos disponibles.
- Se utiliza *bcrypt* y *passport local* en el registro de usuario y manejo de session.
- Se implementa *Twilio* para el informe de Orden de Compra Confirmada 
- Se implementa *Nodemailer* para el envío del mje de nuevos usuarios creados y Carritos confirmados.
- Para el proyecto Final se utilizan *Vistas de ejs* que interactúan con las APIs y gestionan los pedidos y las respuestas obtenidas

## Presentación
- Espero ansioso la meet de presentación, puse mucho tiempo y empeño en lograr esta entrega y estoy muy contento del "viaje" por el que fuimos en este aprendizaje. Con esta entrega lograré subir al último peldaño de la **Carrera FullStack** de Coderhouse, espero estar a la altura con lo desarrollado. Muchas Gracias **Diego (Profe)** y **Manuel (Tutor)**