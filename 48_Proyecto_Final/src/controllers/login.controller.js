
const obtenerlogin = require("../negocio/negocio.login")
const {loggerConsola} = require("../logger/logger");

require('../conexiones/connection'); 


async function getDatosControllerLogin(req, res) {
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Login' - con metodo: ${method} - time: ${time}`);
  const datosLogin = await obtenerlogin();
  res.redirect(datosLogin);
  //res.json(datosInfo);
  //res.status(200).send(datosInfo); 
}
module.exports = {getDatosControllerLogin}
