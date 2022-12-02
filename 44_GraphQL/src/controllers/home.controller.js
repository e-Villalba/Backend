const obtenerhome = require("../negocio/negocio.home")

const {loggerConsola} = require("../logger/logger");
const auth = require('../middleware/auth.js');

async function getDatosControllerHome(req, res) {
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Home' - con metodo: ${method} - time: ${time}`);
  const userEmail = await obtenerhome(req.user._id);
  res.render("form", { //Se muestra la página principal y se pasa el mail del usuario tal lo solicitado en el desafío
    user: userEmail,
  });
  //res.status(200).send(datosInfo); 
}

module.exports = {getDatosControllerHome}


