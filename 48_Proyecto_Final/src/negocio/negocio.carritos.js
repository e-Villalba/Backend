
const CarritoController = require("../persistencia/persist.carritos")
const cartProd = CarritoController;


async function obtenercarritos() {
  return await cartProd.listarAll()
}

async function obtenercarritosid(id) {
  return await cartProd.listar(id)
}

async function obtenercarritosuser(user,estado) {
  return await cartProd.listarUser(user,estado)
}

async function postcarritos(obj) {  
  return await cartProd.guardar(obj);
}
async function putcarritos(id,obj) {  
  return await cartProd.actualizar(id,obj);
}

/*async function deleteproductos(id) {  
  return await cartProd.borrar(id);
}*/

module.exports = {obtenercarritosuser,obtenercarritosid}








