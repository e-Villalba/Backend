
const {getproductos,postproductospersist} = require("../persistencia/persist.productos")


async function obtenerproductos() {
  return await getproductos();
}
async function postproductos(obj) {
  return await postproductospersist(obj);
}


module.exports = {obtenerproductos,postproductos}








