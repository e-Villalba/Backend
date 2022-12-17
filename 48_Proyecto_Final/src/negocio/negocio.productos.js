


const ProductoController = require("../persistencia/persist.productos")
const objProd = ProductoController;


async function obtenerproductos() {
  return await objProd.listarAll()
}

async function obtenerproductostitle(title) {
  return await objProd.listar(title)
}

async function obtenerproductoscategory(category) {
  return await objProd.listarcategory(category)
}

async function postproductos(obj) {
  
    return await objProd.guardar(obj);
}


module.exports = {obtenerproductos,obtenerproductostitle,obtenerproductoscategory,postproductos}








