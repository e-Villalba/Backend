
const {obtenermensajes,postmensajes} = require("../negocio/negocio.mensajes")
const {loggerConsola} = require("../logger/logger");


async function getDatosControllerMensajes() {  
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/getDatosControllerMensajes' - time: ${time}`);
  const datosmensajes = await obtenermensajes();  
  return datosmensajes

}

  async function postDatosControllerMensajes(msj) {
  const { email, fecha, mensaje } = msj
  const objMsj = {
    email:email,
    fecha:fecha,
    mensaje:mensaje
  }

  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/postDatosControllerMensajes' - time: ${time}`);
  const datosmensajes = await postmensajes(objMsj);  
  return datosmensajes
  
}
module.exports = {getDatosControllerMensajes,postDatosControllerMensajes}

