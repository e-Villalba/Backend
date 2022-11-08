const IdCarrito = document.getElementById("idCarrito").innerHTML;
const cartContainer = document.getElementById("cartContainer");

console.log("IdCarrito",IdCarrito)
//const URL = `/carrito/${IdCarrito.toString().trim()}`
const URL = `/productos`
console.log(URL)
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
    
    productos.innerHTML = "";
    arr.forEach(el => {
        productos.innerHTML += `
        <form id="divDatosPRod" action="/carrito" method="post" enctype="">
        <div class="row d-flex align-items-center">
                <div class="col">${el.title}
                <input type="hidden" name="title" id="title" VALUE=${el.title}>
                </div>
                
                <div class="col">${el.price}</div>
                <input type="hidden" name="price" id="price" VALUE=${el.price}>
                <input type="hidden" name="_id" id="_id" VALUE=${el._id}>
                <input type="hidden" name="thumbnail" id="thumbnail" VALUE=${el.thumbnail}>
                <div class="col"><img class="img-fluid w-25"  src=${el.thumbnail}>                    
                <!--<input type="submit" class=" btn-outline-primary mt-3 " id="btnProducto"
                                    value="Add Cart" /></div>-->
        </div>
    </form>
      `;
  
    });
  
   
  }