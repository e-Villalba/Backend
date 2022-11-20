
const obtenerinfo = require("../negocio/negocio.info")
const {loggerConsola} = require("../logger/logger");

async function getDatosControllerInfo(req, res) {
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Info' - con metodo: ${method} - time: ${time}`);
  const datosInfo = await obtenerinfo();
  res.json(datosInfo);
  //res.status(200).send(datosInfo); 
}
module.exports = {getDatosControllerInfo}