
const {obtenerregister,postregister} = require("../negocio/negocio.register")
const {loggerConsola} = require("../logger/logger");


async function getDatosControllerRegister(req, res) {
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Register' - con metodo: ${method} - time: ${time}`);
  const datosregister = await obtenerregister();
  res.render(datosregister); 
}

async function postDatosControllerRegister(req, res) {
  const { username, password,email } = req.body;
  const objUser = {
    username:username,
    password:password,
    email:email
  }
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Register' - con metodo: ${method} - time: ${time}`);
  const datosregister = await postregister(objUser);    
  res.render(datosregister.view,{mensajeResult:datosregister.mensajeResult});  
  }

module.exports = {getDatosControllerRegister,postDatosControllerRegister}


