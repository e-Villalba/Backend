//const { text } = require("express");

const IdCarrito = document.getElementById("idCarrito").innerHTML;
const cartContainer = document.getElementById("cartContainer");
const totalCarrito = document.getElementById("totalCarrito");


const URL = `/carrito/${IdCarrito.toString().trim()}`

fetch(URL)
  .then(res => res.json())
  .then(res => {
    renderProducts(res);
  })
  .catch(err => console.log(err));

  const renderProducts = (arr) => {

    //const productsContainer = document.getElementById("productsContainer");
    //const cartId = document.getElementById("cartId");
  
    /* obtener el texto de cartId */
    //const idCart = cartId.textContent;  
    let valorTotal=0
    productoscart.innerHTML = "";
    arr.forEach(el => {
        productoscart.innerHTML += `
        <form id="divDatosPRod" action="/carrito" method="post" enctype="">
        <div class="row d-flex align-items-center">
                <input type="hidden" name="title" id="title" VALUE=${el.title}>    
                <input type="hidden" name="price" id="price" VALUE=${el.price}>
                <input type="hidden" name="_id" id="_id" VALUE=${el.id}>
                <input type="hidden" name="thumbnail" id="thumbnail" VALUE=${el.thumbnail}>
                <div class="col">${el.title}</div>
                <div class="col">${el.price}</div>
                <div class="col"><img class="img-fluid w-25"  src=${el.thumbnail}></div>                    
                <div class="col"><input type="text" id="cant${el.id}" value=${el.cantidad} required></div>
                <div class="col">${el.valor}</div>
                <div class="col"><input type="button" onclick="deleteProdCarrito('${IdCarrito.toString().trim()}','${el.id}')" class=" btn-outline-primary" id="btnProducto" value="Delete" />
                <input type="button" onclick="updateCantProdCarrito('${IdCarrito.toString().trim()}','${el.id}')" class=" btn-outline-primary" id="btnProductoUpdate" value="Update" /></div>
              
        </div>
    </form>
      `;
      valorTotal +=el.valor
    });
  
   totalCarrito.innerHTML = valorTotal
  }

  const putData = async () => {      
    /*Crea un objeto con la informacion del formulario*/        
     const IdCarrito = document.getElementById("idCarrito").innerHTML;
     const direccion = document.getElementById("dire").value;     
     const URL = '/carrito/'+IdCarrito     
     const updateCart = {estado:"Cerrado",direccion:direccion,total:totalCarrito.innerHTML}     
     try{
      const response = await fetch(URL, {
      /*especifica el metodo que se va a usar*/
      method: 'PUT',
      /*especifica el tipo de informacion (JSON)*/
      headers: {'Content-Type': 'application/json'},
      /*coloca la informacion en el formato JSON */    
      body: JSON.stringify(updateCart)
      });
      if(response.ok){
          alert("Carrito confirmado Exitosamente, se genera Orden de compra")
          location.reload()
      }
     }catch(error){
       console.log(error);
     }
  }
  
  const btnConfirmar = document.querySelector('#btnConfirmar');
  btnConfirmar.addEventListener('click', (event) => {
    event.preventDefault();
    putData();
  })
  

  function deleteProdCarrito(idcart,idprod)    
{  
 
  const URL = '/carrito/'+idcart+'/productos/'+idprod  
  fetch(URL, {
      method: 'DELETE',
})
.then(res => res.json())
.then(res=> {
      //console.log(res);      
      alert(`Producto  ELIMINADO exitosamente`)
      location.reload()
});
}


const updateCantProdCarrito = async (idcart,idprod) => {  
  /*Crea un objeto con la informacion del formulario*/      
   const textCant ="cant"+idprod   
   const cantProd = document.getElementById(textCant).value;   
   const URL = '/carrito/'+idcart.trim()+'/productos/'+idprod.trim()
   const updateCart = {cantidad:cantProd}
   try{
    const response = await fetch(URL, {    
    method: 'PUT',    
    headers: {'Content-Type': 'application/json'},    
    body: JSON.stringify(updateCart)
    });
    if(response.ok){        
        alert("Cantidad de Producto actualizada Exitosamente")
        location.reload()
          }
  
   }catch(error){
     console.log(error);
   }
   
}