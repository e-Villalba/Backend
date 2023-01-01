const { postregister } = require("../negocio/negocio.register")
const { loggerConsola } = require("../logger/logger");


async function getDatosControllerRegister(req, res) {
  res.render('register');

}

async function postDatosControllerRegister(req, res) {
  const { username, password, password2, apenom, email } = req.body;
  const objUser = {
    username: username,
    password: password,
    password2: password2,
    email: email,
    apenom: apenom
  }
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Register' - con metodo: ${method} - time: ${time}`);
  const datosregister = await postregister(objUser);
  res.render(datosregister.view, { mensajeResult: datosregister.mensajeResult });
}

module.exports = { getDatosControllerRegister, postDatosControllerRegister }


