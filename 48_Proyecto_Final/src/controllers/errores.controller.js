
const {getError,postError,deleteError,putError}= require("../negocio/negocio.errores")
const {loggerConsola} = require("../logger/logger");

async function getDatosControllerError(req, res) {
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/errores' - con metodo: ${method} - time: ${time}`);
  const datosError = await getError();
  res.redirect(datosError);  
}

async function postDatosControllerError(req, res) {
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/errores' - con metodo: ${method} - time: ${time}`);
  const datosError = await postError();
  res.json(datosError)  
}

async function deleteDatosControllerError(req, res) {
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/errores' - con metodo: ${method} - time: ${time}`);
  const datosError = await deleteError();
  res.json(datosError)  
}


async function putDatosControllerError(req, res) {
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/errores' - con metodo: ${method} - time: ${time}`);
  const datosError = await putError();
  res.json(datosError)  
}

module.exports = {getDatosControllerError,postDatosControllerError,deleteDatosControllerError,putDatosControllerError}