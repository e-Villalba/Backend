
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
module.exports = {obtenerproductos,postproductos,putproductos}








