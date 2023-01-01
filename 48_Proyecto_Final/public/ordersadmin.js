window.addEventListener("load", (event) => {     
    const URL="/ordenes"
    fetch(URL)
    .then((response) => response.json())
    .then((data) => listarOrdenes(data));
  });

  const btnListarOrdenes = document.getElementById("btnListarOrdenes")

  btnListarOrdenes.addEventListener("click", (e) => {  
    //const titleSearch = document.getElementById('titlesearch').value  
    const URL =`/ordenes`
    /* fetch a la URL */
    fetch(URL)
      .then(res => res.json())
      .then(res => {
        listarOrdenes(res);    
      })
      .catch(err => console.log(err));
      
  }); 

  function listarOrdenes(data) { 
    
    let html=""
    if(data.length>0)  
    {
      
     html += data.map((el, index) => { 
        return(
          `<form id="divDatosPRod" action="/carrito" method="post" enctype="">
            <div class="row d-flex align-items-center">
                    <div class="col">${el.nro_orden}
                        <input type="hidden" name="title" id="title" VALUE=${el._id}>
                    </div>                    
                    <div class="col">${el.username}</div>                    
                    <div class="col">${el.fecha}</div>
                    <div class="col">${el.direccion}</div>
                    <div class="col">${el.total}</div>
                    <div class="col">${el.estado}</div>                    
                    <input type="hidden" name="price" id="price" VALUE=${el.username}>
                    <input type="hidden" name="_id" id="_id" VALUE=${el._id}>
                    <input type="hidden" name="thumbnail" id="thumbnail" VALUE=${el.thumbnail}>
                    <input type="hidden" name="category" id="category" VALUE=${el.category}>
                    <div class="col">
                      <input type="button" onclick="deleteOrden('${el._id}','${el.nro_orden}','${el.username}')" class=" btn-outline-primary mt-3 " id="btnProducto" value="Eliminar" />
                      <input type="button" onclick="confirmarOrden('${el._id}','${el.nro_orden}','${el.username}')" class=" btn-outline-secondary mt-3 " id="btnUpdateProducto" value="Confirmar" />
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
           <div class="col"><h2>No Hay Ordenes Registradas</h2></div>
        </div>`
       
    }
    document.getElementById('ordenes').innerHTML = html;
  }

//Búsqueda de Ordenes x Usuario
const btnListarOrdenesUser = document.getElementById("btnListarOrdenesUser");

btnListarOrdenesUser.addEventListener("click", (e) => {  
  const user = document.getElementById('user').value  
  const URL = `/ordenes/${user.trim()}`
  /* fetch a la URL */
  fetch(URL)
    .then(res => res.json())
    .then(res => {
      listarOrdenes(res);    
    })
    .catch(err => console.log(err));
    
}); 

//Eliminar ORden
function deleteOrden(id,nro_orden,username)    
{  
  
  const URL = '/ordenes/'+id  
  fetch(URL, {
      method: 'DELETE',
})
.then(res => res.json())
.then(res=> {
      console.log(res);      
      alert(`Orden id: ${id} - ${nro_orden}- ${username} ELIMINADA exitosamente`)
      location.reload()
});
}
////Confirmar Orden
function confirmarOrden (id,nro_orden,username) {  
  const URL = '/ordenes/'+id  
  fetch(URL, {
      method: 'PUT',
})
.then(res => res.json())
.then(res=> {
      console.log(res);      
      alert(`Orden id: ${id} - ${nro_orden}- ${username} Confirmada exitosamente`)
      location.reload()
    })
   
}