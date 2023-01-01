
const MensajePersist = require("../persistencia/persist.mensajes")
const objMensaje = MensajePersist;

async function obtenermensajes() {
  return await objMensaje.listarAll()
}
async function obtenermensajesemail(email) {
  return await objMensaje.listar(email)
}
async function postmensajes(obj) {
    return await objMensaje.guardar(obj);
}


module.exports = {obtenermensajes,obtenermensajesemail,postmensajes}








