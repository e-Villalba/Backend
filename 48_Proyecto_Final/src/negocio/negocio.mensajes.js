
//const {getproductos,postproductospersist} = require("../persistencia/persist.productos")

const MensajePersist = require("../persistencia/persist.mensajes")
const objMensaje = MensajePersist;


async function obtenermensajes() {
  return await objMensaje.listarAll()
}
async function postmensajes(obj) {
    return await objMensaje.guardar(obj);
}


module.exports = {obtenermensajes,postmensajes}








