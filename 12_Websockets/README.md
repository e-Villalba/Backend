1 - Implementación de Fetch y productos
    - En Server.js obtengo los productos con un Fetch y los devuelvo en un json a través de io.sockets
    Para obtener los productos utilizo el app.get("/productos") el cual reformulé para que devuelva un JSON
    - Para utilizar Fetch del lado server realizo:
        * npm install node-fetch@2
        * En server.js realizo require('node-fetch');
    - En el lado cliente, en main.js, desde el Websocket abierto implemento la función "listarProductos"  que toma los productos devueltos desde el server
    y manipulando el DOM los renderiza en el "div productos" el cual se encuentra en el partial "productos.ejs" (views/partials)
    - En form.ejs se implementa el partial "productos ejs" y debajo de la carga de productos, vía WebSocket y utilizando fetch en el server se cargan los productos que se van agregando.
2 - Centro de Mjes
    - En form.ejs se implementa el partial "centroMensajes.ejs"
    - Desde el lado cliente en "main.js" se implementa la función setMensaje que vía "WebSocket" envía al Server el msje escrito por el usuario del lado "cliente".
    - En el lado Server, en "server.js" se recibe vía websocket y luego se envía al cliente que en "main.js" implementa la "función showMessages". Esta función, manipulando el dom renderiza en el "div mensajes" el mje escrito por el usuario aplicando los estilos solicitados para la Entrega. El "div mensajes" se encuentra en el partial "centroMensajes".
