
//const {getproductos,postproductospersist} = require("../persistencia/persist.productos")

const ProductoController = require("../persistencia/persist.productos")
const objProd = ProductoController;


async function obtenerproductos() {
  return await objProd.listarAll()
}
async function postproductos(obj) {
    return await objProd.guardar(obj);
}


async function putproductos(obj) {
  return await objProd.actualizar(obj);
}

async function deleteproductos(_id) {
  return await objProd.borrar(_id);
}

module.exports = {obtenerproductos,postproductos,putproductos,deleteproductos}








