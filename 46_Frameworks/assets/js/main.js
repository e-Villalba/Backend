
window.addEventListener("load", (event) => {  
  fetch('http://localhost:1337/productos')
  .then((response) => response.json())
  .then((data) => listarProductos(data));
});

//funcion que se encarga de presentarel listado de productos
function listarProductos(data) { 
    let html=""
    if(data.length>0)  
    {
      
     html += data.map((el, index) => {   
        return(
          `<form id="divDatosPRod" action="/produpdate" method="POST" enctype="">
            <div class="row d-flex align-items-center">
                    <div class="col">${el.title}
                    <input type="hidden" name="title" id="title" VALUE=${el.title}>
                    <input type="hidden" name="_method" value="delete">
                    </div>
                    
                    <div class="col">${el.price}</div>
                    <input type="hidden" name="price" id="price" VALUE=${el.price}>
                    <input type="hidden" name="_id" id="_id" VALUE=${el.id}>
                    <input type="hidden" name="thumbnail" id="thumbnail" VALUE=${el.thumbnail}>
                    <div class="col"><img class="img-fluid w-25"  src=${el.thumbnail}>   </div>                 
                    <div class="col">
                    <input type="button" onclick="deleteProducto('${el.id}','${el.title}')" class=" btn-outline-primary mt-3 " id="btnProducto"
                                        value="Delete" />
                    <input type="button" onclick="ponerDataUpdate('${el.id}','${el.title}','${el.price}','${el.thumbnail}')"class=" btn-outline-secondary mt-3 " id="btnUpdateProducto"
                                        value="Update" />
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

function deleteProducto(id,title)    
{  
  const URL = 'http://localhost:1337/productos/'+id  
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
//funcion que se encarga de presentarel listado de productos
function listarProductosFind(data) { 
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

const btn = document.querySelector('#btn');
const formulario = document.querySelector('#formProductos');

const getData = () => {
  const datos = new FormData(formulario);
  const datosProcesados = Object.fromEntries(datos.entries());
  formulario.reset();
  return datosProcesados;
}

const postData = async () => {
  
  /*Creo un objeto con la informacion del formulario*/   
   const newProd= getData();
   try{    
    const response = await fetch('http://localhost:1337/productos', {
    /*especifica el metodo que se va a usar*/
    method: 'POST',
    /*especifica el tipo de informacion (JSON)*/
    headers: {'Content-Type': 'application/json'},
    /*coloca la informacion en el formato JSON */
    //body: JSON.stringify(newUser)
    body: JSON.stringify(newProd)
    });
    if(response.ok){
        const jsonResponse = await response.json();
        const {title, price, thumbnail} = jsonResponse;
        alert(`Producto ${title} CREADO exitosamente`)
        location.reload()
       /* respuesta.innerHTML = 
        `<ul> 
           ¡Exito! Se guardó la siguiente información:
          <li>${title}</li> 
          <li>${price}</li> 
          <li>${thumbnail}</li>
        </ul>`*/
       
    }
   
   }catch(error){
     console.log(error);
   }
   
}

btn.addEventListener('click', (event) => {
  event.preventDefault();
  
  postData();
})

///////////////////////////////////////UPDATE PRODUCTOS
const btnUpdate = document.querySelector('#btnUpdateProducto');
const getDataUpdate = () => {
  const datos = new FormData(formulario);  
  const datosProcesados = Object.fromEntries(datos.entries());
  formulario.reset();
  return datosProcesados;
}
/*Funcion para colocar los datos en el Form */
function ponerDataUpdate(id,title,price,thumbnail)
{  
  document.getElementById('_id').value =id
  document.getElementById('title').value =title
  document.getElementById('price').value =price
  document.getElementById('thumbnail').value =thumbnail
  document.getElementById('btnUpdateProducto').hidden =false
  document.getElementById('btn').hidden =true
  document.getElementById('btn').value =thumbnail
  

}

const putData = async () => {  
  /*Crea un objeto con la informacion del formulario*/   
   const updateProd= getDataUpdate();   
   const URL = 'http://localhost:1337/productos/'+updateProd._id   

   try{
    const response = await fetch(URL, {
    /*especifica el metodo que se va a usar*/
    method: 'PUT',
    /*especifica el tipo de informacion (JSON)*/
    headers: {'Content-Type': 'application/json'},
    /*coloca la informacion en el formato JSON */    
    body: JSON.stringify(updateProd)
    });
    

    if(response.ok){
        const jsonResponse = await response.json();

        /* Codigo a ejecutarse con la respuesta*/

        const {title, price, thumbnail} = jsonResponse;
        alert(`Producto ${title} ACTUALIZADO exitosamente`)
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
