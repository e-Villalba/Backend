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
                    <div class="col">${el.category}</div>
                    <div class="col"><img class="img-fluid w-25"  src=${el.thumbnail}></div>
                    <input type="hidden" name="price" id="price" VALUE=${el.price}>
                    <input type="hidden" name="_id" id="_id" VALUE=${el._id}>
                    <input type="hidden" name="thumbnail" id="thumbnail" VALUE=${el.thumbnail}>
                    <input type="hidden" name="category" id="category" VALUE=${el.category}>
                    <div class="col">
                      <input type="button" onclick="deleteProducto('${el._id}','${el.title}')" class=" btn-outline-primary mt-3 " id="btnProducto" value="Delete" />
                      <input type="button" onclick="ponerDataUpdate('${el._id}','${el.title}','${el.price}','${el.category}','${el.thumbnail}')"class=" btn-outline-secondary mt-3 " id="btnUpdateProducto" value="Update" />
                      </div>  
                    </div>

                    
                    
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



///////////////////////////////////////UPDATE PRODUCTOS
const formulario = document.querySelector('#formProductos');
const btnUpdate = document.querySelector('#btnUpdateProducto');
const getDataUpdate = () => {
  const datos = new FormData(formulario);  
  const datosProcesados = Object.fromEntries(datos.entries());
  formulario.reset();
  return datosProcesados;
}
/*Funcion para colocar los datos en el Form */
function ponerDataUpdate(_id,title,price,category,thumbnail)
{  
  document.getElementById('_id').value =_id
  document.getElementById('title').value =title
  document.getElementById('price').value =price
  document.getElementById('category').value =category
  document.getElementById('thumbnail').value =thumbnail
  document.getElementById('btnUpdateProducto').hidden =false
  document.getElementById('btnCancelUpdate').hidden =false
  document.getElementById('btnProducto').hidden =true
  
}

const putData = async () => {  
  /*Crea un objeto con la informacion del formulario*/   
   const updateProd= getDataUpdate();   
   //alert(updateProd._id)
   const URL = 'http://localhost:3000/productos/'+updateProd._id   

   try{
    const response = await fetch(URL, {
    /*especifica el metodo que se va a usar*/
    method: 'PUT',
    /*especifica el tipo de informacion (JSON)*/
    headers: {'Content-Type': 'application/json'},
    /*coloca la informacion en el formato JSON */    
    body: JSON.stringify(updateProd)
    });
    //const ejs = NodeRequire('ejs');
    //console.log (response)
    //ejs.render("product-result",{mensajeResult:"datosprod.mensajeResult"})
    if(response.ok){
        //const jsonResponse = await response.json();
        //console.log(response)
        /* Codigo a ejecutarse con la respuesta*/

        /*const {title, price, thumbnail} = jsonResponse;*/
        //alert(jsonResponse)
        location.reload()
    }
  
   }catch(error){
     console.log(error);
   }
   
}

btnUpdate.addEventListener('click', (event) => {
  event.preventDefault();
  putData();
})

function cancelUpdate()
{  
  document.getElementById('_id').value =""
  document.getElementById('title').value =""
  document.getElementById('price').value =""
  document.getElementById('category').value =""
  document.getElementById('thumbnail').value =""
  document.getElementById('btnUpdateProducto').hidden =true
  document.getElementById('btnCancelUpdate').hidden =true
  document.getElementById('btn').hidden =false
}

function deleteProducto(id,title)    
{  
  const URL = 'http://localhost:3000/productos/'+id  
  fetch(URL, {
      method: 'DELETE',
})
.then(res => res.json())
.then(res=> {
      console.log(res);      
      alert(`Producto id: ${id} - ${title} ELIMINADO exitosamente`)
      location.reload()
});
}