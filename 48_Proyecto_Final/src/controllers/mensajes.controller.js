
const {obtenermensajes,obtenermensajesemail,postmensajes} = require("../negocio/negocio.mensajes")
const {loggerConsola} = require("../logger/logger");


async function getDatosControllerMensajes() {  
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/getDatosControllerMensajes Todos' - time: ${time}`);
  const datosmensajes = await obtenermensajes();  
  return datosmensajes
}

async function getDatosControllerMensajesEmail(username) {  
  const { email } = req.params;  const { method } = req;
  

  const time = new Date().toLocaleString();  
  loggerConsola.info(`Ruta '/getDatosControllerMensajes email' - con metodo: ${method} - time: ${time}`);
  const datosmensajes = await obtenermensajesemail(email);  
  return datosmensajes
}

async function postDatosControllerMensajes(msj) {
    const { email, fecha, mensaje } = msj.body
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
module.exports = {getDatosControllerMensajes,getDatosControllerMensajesEmail,postDatosControllerMensajes}

