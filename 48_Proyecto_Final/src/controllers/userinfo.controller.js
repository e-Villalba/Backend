
const { obteneruserinfo } = require("../negocio/negocio.userinfo")
const { loggerConsola } = require("../logger/logger");

async function getDatosControllerUserInfo(req, res) {
  const { method } = req;
  const user = req.user.username
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Register' - con metodo: ${method} - time: ${time}`);
  const datosregister = await obteneruserinfo(user);
  const userData = { username: datosregister.username, email: datosregister.email, apenom: datosregister.apenom }
  res.render('user_info', { userData });
}

module.exports = { getDatosControllerUserInfo }


