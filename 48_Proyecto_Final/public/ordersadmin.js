window.addEventListener("load", (event) => {  
    const URL="/ordenes"
    fetch(URL)
    .then((response) => response.json())
    .then((data) => listarOrdenes(data));
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
           <div class="col"><h2>No Hay Ordenes Registradas</h2></div>
        </div>`
       
    }
    document.getElementById('ordenes').innerHTML = html;
  }