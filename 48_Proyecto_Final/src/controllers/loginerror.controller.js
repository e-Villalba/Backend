
const obtenerloginerror = require("../negocio/negocio.loginerror")
const {loggerConsola} = require("../logger/logger");

async function getDatosControllerLoginError(req, res) {
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Loginerror NEWW' - con metodo: ${method} - time: ${time}`);
  const datosLoginerror = await obtenerloginerror();  
  res.render(datosLoginerror);  
}
module.exports = {getDatosControllerLoginError}

