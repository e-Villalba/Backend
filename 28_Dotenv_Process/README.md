# Entrega - DotEnv Process ![N|Solid](https://cdn3.iconfinder.com/data/icons/erp-systems/48/ERP-18-42.png)
## Desarrollo
Tomando como base la entrega de la **Clase 26_Inicio Sesión** se realizaron los siguientes ajustes para cumplir con las consignas correspondientes a la  entrega **Inicio de Sesión**
- **DotEnv**: en *server.js* Se agrega DotEnv para las credenciales a la BD linea 37
- **Minimist**: en *server.js* Se agrega Minimist para consumir el Argumento de linea de comandos que informa el puerto donde corre el Server Express. (líneas 63 a 65)
- **Info**: En la carpeta *routes* se agrega la ruta *info.js* en esta ruta se implementa *Process.js*. Se informa en vista de archivo *.json* los datos de proceso Solicitados:
    *   Argumentos_Entrada
    *   Nombre_Plataforma
    *   Version_Node
    *   Memoria_Reservada
    *   Path_Ejecucion
    *   Process_id
    *   Carpeta_Proyecto
    
- **Randoms**: En la carpeta *routes* se agrega la ruta *random.js* que implementa *child* y *fork*. En la carpeta *controllers* se implementa en el archivo *random.controller.js* la lógica de *nros random* informando al *proceso principal* de la ruta *random.js* los nros obtenidos. 
Desde la ruta *random.js* se informan en .json los nros (de 1 a 1000) y la cantidad de veces que se presentaron.