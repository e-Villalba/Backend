
const OrdenController = require("../persistencia/persist.ordenes")
const order = OrdenController;

async function obtenerordenes() {
  return await order.listarAll()
}

async function obtenerordenesuser(username) {
  return await order.listarUser(username)
}
async function postorder(username, estado, cartData, prodAdd) {
  return await order.guardar(username, estado, cartData, prodAdd)
}
async function putordenes(id, obj) {
  return await order.actualizar(id, obj);
}
async function deleteorden(id) {
  return await order.borrar(id);
}
module.exports = { obtenerordenes, obtenerordenesuser, postorder, deleteorden, putordenes }








