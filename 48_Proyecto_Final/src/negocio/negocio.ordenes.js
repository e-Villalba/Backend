
const OrdenController = require("../persistencia/persist.ordenes")
const order = OrdenController;

async function obtenerordenes() {
  return await order.listarAll()
}

async function obtenerordenesuser(username,estado) {
  return await order.listarUser(username,estado)
}
async function postorder(username, estado,cartData,prodAdd) {  
  //console.log("postcarritos NEGOCIO")
  return await order.guardar(username, estado,cartData,prodAdd)
}
async function putorder(id,obj) {  
  return await order.actualizar(id,obj);
}
/*
async function deleteprodcarritos(idcart,idprod) {  
  return await cartProd.eliminarprodcarrito(idcart,idprod);
}

async function updateprodcarritos(idcart,idprod,cantidad) {  
  return await cartProd.updateprodcarritos(idcart,idprod,cantidad);
}*/
module.exports = {obtenerordenes,obtenerordenesuser,postorder,putorder}








