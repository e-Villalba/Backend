/*const { getByID } = require("./controllers/producto.controller");
const productosRouter = require("./routes/productosRouter");*/
const prodBank = require("./productosBank");
const data = [];
const carritos=[]
let id = 0;

const list = () => {
   return carritos;
}
const findOne = (id) => {
  const carrito =carritos.find((carrito) => parseInt(carrito.id) === parseInt(id));
  if(carrito)
  {return carrito.id} else {return { error : 'carrito no encontrado' }}
};
//Agrega un nuevo carrito
const add = () => {
  let timestamp= new Date().getTime();
  /*let prodCarr=[]
  for ( const prod of productos)
  {
    console.log("For Of add Prods",prod)
    prodCarr.push(prodBank.findOne(prod))
  }*/
  const carrito = { id: ++id,timestamp,productos : []};
  carritos.push(carrito);
  return carrito.id;
};
//Agrega productos a un carrito
const addProductos = (idCarrito,productos) => {  
  const carIndex =carritos.findIndex((carrito) => parseInt(carrito.id) === parseInt(idCarrito));
  if(carIndex>=0)
  {
        for ( const prod of productos)
        {
          console.log("For Of add Prods",prod)
          console.log("Carr.id",carIndex)
          carritos[carIndex].productos.push(prodBank.findOne(prod))
        }
        return 'Productos Agregados';      
  }
  else{
    return 'No Existe el Carrito';
  }
};
//Elimina un carrito y sus productos
const remove = (idCarrito) => {    
  const carIndex =carritos.findIndex((carrito) => parseInt(carrito.id) === parseInt(idCarrito));  
  if(carIndex>=0)
  {    
    carritos.splice(carIndex,1)   
    return "Carrito " + idCarrito .toString() + " Eliminado"  
  }  
  else {return { error : 'carrito no encontrado para eliminar' }}  
};
//Devuelve los productos de un carrito
const findProductosCarrito = (idCarrito) => {    
  const carIndex =carritos.findIndex((carrito) => parseInt(carrito.id) === parseInt(idCarrito));  
  if(carIndex>=0)
  {    
    return carritos[carIndex].productos
  }  
  else {return { error : 'carrito no encontrado' }}  
};

//Elimina un Producto de un carrito
const removeProductoCarrito = (idCarrito,idProducto) => {  
  const carIndex =carritos.findIndex((carrito) => parseInt(carrito.id) === parseInt(idCarrito));
  if(carIndex>=0)
  { 
    const prodIndex =carritos[carIndex].productos.findIndex((producto) => parseInt(producto.id) === parseInt(idProducto));
    
    if(prodIndex>=0)
    { 
      carritos[carIndex].productos.splice(prodIndex,1)
      return " Se eliminó Producto "+ idProducto.toString() +" del carrito "+ idCarrito.toString() 
    }  
    else
    {
      return { error : 'producto no encontrado en el carrito' }
    }  
  }
  else {return { error : 'carrito no encontrado' }}  
};

        


const update = (id, newTitle,newPrice,newThumbnail) => {  
  const actualizar = carritos.findIndex(carr=>parseInt(carr.id) === parseInt(id))      
  if (actualizar>-1)
  { 
    const carrito=findOne(id)
    if (newTitle) {carrito.title=newTitle;}
    if (newPrice) { carrito.price = newPrice;}
    if (newThumbnail) { carrito.thumbnail = newThumbnail;}    
    return carrito
  }
  else {return { error : 'producto no encontrado para actualizar' }}  
};


module.exports = { list,add,addProductos,findOne,remove,update,findProductosCarrito,removeProductoCarrito};
/*Ejemplo objetos de array produc
{
  "title": "PEPE3",
  "price": "RAZA3",
  "thumbnail": "IMAGEN3"
 }*/
const carrito = [

];

for (let i = 0; i < carrito.length; i++) {
  module.exports.add(carrito[i].title, carrito[i].price,carrito[i].thumbnail);
}
