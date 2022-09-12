# Entrega - Login Formulario ![N|Solid](https://cdn4.iconfinder.com/data/icons/aami-web-internet/64/aami17-35-50.png)

## Desarrollo
Tomando como base la entrega de la **Clase 22_Mocks_Normalización - Faker** se realizaron los siguientes ajustes para cumplir con las consignas correspondientes a la  entrega **Login Formulario**
- Archivo **server.js**:
    - Se agregaron las rutas **/login** y **/logout** 
    - Se agregó el middleware **auth** para validar si hay usuario logueado en la Session    
    - Estos cambios se encuentran de Líneas 51 a 89 
- Archivo **login.ejs** correspondiente al ingreso de Usuario.
- Archivo **logout.ejs** correspondiente al saludo de despedida al usuario.
- Archivo **logtimeout.js** contienen función javascript utilizada en **logout.ejs**, esta función luego de 2 segundos redirige al login.
- Archivo **form.ejs** se modificó para incoroporar ***nombre de usuario loguead*** y botón de ***logout***
### Referencias agregadas
- Para Session en Mongo: *npm i connect-mongo*
- Para variable Conexión Mongo *npm i dotenv*