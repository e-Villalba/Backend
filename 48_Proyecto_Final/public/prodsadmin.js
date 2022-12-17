const socket = io.connect();

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
                    <input type="hidden" name="category" id="thumbnail" VALUE=${el.category}>
                    <div class="col">${el.category}</div>
                    <div class="col"><img class="img-fluid w-25"  src=${el.thumbnail}>                    
                    
                    
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
//filtro por busqueda Title
const btnBuscarProducto = document.getElementById("btnBuscarProducto");

btnBuscarProducto.addEventListener("click", (e) => {  
  const titleSearch = document.getElementById('titlesearch').value  
  let URL 
  titleSearch? URL= `/productos/${titleSearch.trim()}`:URL= `/productos`;
  /* fetch a la URL */
  fetch(URL)
    .then(res => res.json())
    .then(res => {
      listarProductos(res);    
    })
    .catch(err => console.log(err));
    
}); 

//filtro por busqueda Category
const btnBuscarProductoCategory = document.getElementById("btnBuscarProductoCategory");

btnBuscarProductoCategory.addEventListener("click", (e) => {  
  const categorySearch = document.getElementById('categorysearch').value  
  let URL 
  categorySearch? URL= `/productos/category/${categorySearch.trim()}`:URL= `/productos`;
  /* fetch a la URL */
  fetch(URL)
    .then(res => res.json())
    .then(res => {
      listarProductos(res);    
    })
    .catch(err => console.log(err));
    
}); 
