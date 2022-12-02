const ProductoController = require("../persistencia/persist.productos")
const objProd = ProductoController;


async function getProductos() {
  return await objProd.listarAll()
}

async function getProducto(_id) {
  return await objProd.listarID(_id)
}



async function createProducto({ datos }) {
  return await objProd.guardar(datos);
}

async function updateProducto({ datos }) {
return await objProd.actualizar(datos);
}

async function deleteProducto(_id) {
  return await objProd.borrar(_id);
}

module.exports = {getProductos,createProducto,updateProducto,deleteProducto,getProducto}

//module.exports = {obtenerproductos,postproductos,putproductos,deleteproductos}