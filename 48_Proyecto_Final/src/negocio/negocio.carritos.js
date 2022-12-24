
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

async function postcarritos(username, estado,cartData,prodAdd) {  
  return await cartProd.guardar(username, estado,cartData,prodAdd)
}
async function putcarritos(id,obj) {  
  return await cartProd.actualizar(id,obj);
}

async function deleteprodcarritos(idcart,idprod) {  
  return await cartProd.eliminarprodcarrito(idcart,idprod);
}

async function updateprodcarritos(idcart,idprod) {  
  return await cartProd.updateprodcarritos(idcart,idprod);
}



module.exports = {obtenercarritosuser,obtenercarritosid,postcarritos,putcarritos,deleteprodcarritos,updateprodcarritos}








