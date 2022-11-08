const socket = io.connect();

//Función para mostrar los mensajes que escribió/envió el usuario
function showMessages(data) {
    //console.log("Hola showMessages")
    const html = data.map((el, index) => {
        return(`<div class="d-flex justify-content-center">
            <p class="styleMail">${el.email}</p>
            <p class="styleFecha">[${el.fecha}]:</p>
            <p class="styleMsj">${el.mensaje}</p> </div>`)
    }).join(" ");
    document.getElementById('mensajes').innerHTML = html;
    
  }

//Función para tomar y "emitir" el mensaje enviado por el usuario
function setMensaje(e) {
    let date = new Date();
    let fechahora = date.toISOString().split('T')[0] + ' ' +date.toISOString().split('T')[1].substring(0,8);
    const mensaje = {
        email: document.getElementById('email').value,
        fecha: fechahora,
        mensaje: document.getElementById('mensaje').value
    };
    socket.emit('new-message', mensaje);        
    let inputMsj = document.getElementById('mensaje')

    inputMsj.value=""
    return false;//corta la ejecución de la función
}

socket.on('productos', function(data) { listarProductos(data); });
//socket.on('messages', function(data) { showMessages(data); });

//funcion que se encarga de presentarel listado de productos
function listarProductos(data) { 
    let html=""
    if(data.length>0)  
    {
      
     html += data.map((el, index) => {   
        return(
          `<form id="divDatosPRod" action="/carrito" method="post" enctype="">
            <div class="row d-flex align-items-center">
                    <div class="col">${el.title}
                    <input type="hidden" name="title" id="title" VALUE=${el.title}>
                    </div>
                    
                    <div class="col">${el.price}</div>
                    <input type="hidden" name="price" id="price" VALUE=${el.price}>
                    <input type="hidden" name="_id" id="_id" VALUE=${el._id}>
                    <input type="hidden" name="thumbnail" id="thumbnail" VALUE=${el.thumbnail}>
                    <div class="col"><img class="img-fluid w-25"  src=${el.thumbnail}>                    
                    <input type="submit" class=" btn-outline-primary mt-3 " id="btnProducto"
                                        value="Add Cart" /></div>
            </div>
        </form>
        `
        )
    }).join(" ");
    }
    else
    {
          html = `<div class="row d-flex align-items-center">
           <div class="col"><h2>No Hay Productos Cargados</h2></div>
        </div>`
       
    }
    document.getElementById('productos').innerHTML = html;
  }

    


