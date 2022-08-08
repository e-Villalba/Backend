/*const { getByID } = require("./controllers/producto.controller");
const productosRouter = require("./routes/productosRouter");*/
const prodBank = require("./productosBank");
const fs = require("fs")

const carritos = []

const archivo = "./archivos/carritos.txt"
let id = 0;

const list = () => {
  return carritos;
}
const findOne = (id) => {
  const carrito = carritos.find((carrito) => parseInt(carrito.id) === parseInt(id));
  if (carrito) { return carrito.id } else { return { error: 'carrito no encontrado' } }
};
//Agrega un nuevo carrito
const add = () => {
  let timestamp = new Date().getTime();
  const carrito = { id: ++id, timestamp, productos: [] };
  carritos.push(carrito);
  try {
    fs.writeFileSync(archivo, JSON.stringify(carritos))
  }
  catch (err) {
    console.log(err)
  }
  return carrito.id;
};
//Agrega productos a un carrito
const addProductos = (idCarrito, productos) => {
  const carIndex = carritos.findIndex((carrito) => parseInt(carrito.id) === parseInt(idCarrito));
  if (carIndex >= 0) {
    for (const prod of productos) {
      console.log("For Of add Prods", prod)
      console.log("Carr.id", carIndex)
      carritos[carIndex].productos.push(prodBank.findOne(prod))
    }
    try {
      fs.writeFileSync(archivo, JSON.stringify(carritos))
    }
    catch (err) {
      console.log(err)
    }
    return 'Productos Agregados';
  }
  else {
    return 'No Existe el Carrito';
  }
};
//Elimina un carrito y sus productos
const remove = (idCarrito) => {
  const carIndex = carritos.findIndex((carrito) => parseInt(carrito.id) === parseInt(idCarrito));
  if (carIndex >= 0) {
    carritos.splice(carIndex, 1)
    try {
      fs.writeFileSync(archivo, JSON.stringify(carritos))
    }
    catch (err) {
      console.log(err)
    }
    return "Carrito " + idCarrito.toString() + " Eliminado"
  }
  else { return { error: 'carrito no encontrado para eliminar' } }
};
//Devuelve los productos de un carrito
const findProductosCarrito = (idCarrito) => {
  const carIndex = carritos.findIndex((carrito) => parseInt(carrito.id) === parseInt(idCarrito));
  if (carIndex >= 0) {
    return carritos[carIndex].productos
  }
  else { return { error: 'carrito no encontrado' } }
};

//Elimina un Producto de un carrito
const removeProductoCarrito = (idCarrito, idProducto) => {
  const carIndex = carritos.findIndex((carrito) => parseInt(carrito.id) === parseInt(idCarrito));
  if (carIndex >= 0) {
    const prodIndex = carritos[carIndex].productos.findIndex((producto) => parseInt(producto.id) === parseInt(idProducto));

    if (prodIndex >= 0) {
      carritos[carIndex].productos.splice(prodIndex, 1)
      try {
        fs.writeFileSync(archivo, JSON.stringify(carritos))
      }
      catch (err) {
        console.log(err)
      }
      return " Se eliminó Producto " + idProducto.toString() + " del carrito " + idCarrito.toString()
    }
    else {
      return { error: 'producto no encontrado en el carrito' }
    }
  }
  else { return { error: 'carrito no encontrado' } }
};




module.exports = { list, add, addProductos, findOne, remove, findProductosCarrito, removeProductoCarrito };

const carrito = [

];

for (let i = 0; i < carrito.length; i++) {
  module.exports.add(carrito[i].id, carrito[i].timestamp, carrito[i].productos);
}
