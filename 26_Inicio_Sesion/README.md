# Entrega - Inicio de Sesión ![N|Solid](https://cdn4.iconfinder.com/data/icons/aami-web-internet/64/aami17-35-50.png)

## Desarrollo
Tomando como base la entrega de la **Clase 24_Login Formulario** se realizaron los siguientes ajustes para cumplir con las consignas correspondientes a la  entrega **Inicio de Sesión**
- Conexión a Mongo Local:
    - En la carpeta *conexiones* se agregó el archivos *connection.js* para la conexión a la BD Local de Mongo.
- Passport - Autenticación
    - En la carpeta *middleware* se agregan los archivos:
        * *auth.js*: Tiene el middleware utilizado para autorizar el acceso al usuario
        * *passport.js*: Se define la estrategia de autenticación de paspport (local), Serialización y desserialización de User.
- Modelo Mongo:
    *  Archivo *User.js* Tiene el Schema de Mongoose para los Usuarios del Login.
- Rutas:
    * *Login.js*: Esta ruta implementa la autenticación de passport
    * *register.js*: Esta ruta implementa el registro del Usuario, validando si ya existe. Con *bcrypt* se "hashea" la password. También se manejan los errores de registro.
    * *home.js*: Esta ruta, luego de la autenticación y autorización, implementa el acceso a la página de *productos* informando el e-mail del user logueado para que lo presente.
    * *logout.js*: Esta ruta implementa la salida del usuario destruyendo la sesión generada.
    * *loginerror.js*: Esta ruta implementa el manejo de errores del login, 
    
- Dependencias
    * Instalar las dependencias *npm i bcrypt connect-mongo mongoose passport passport-local*