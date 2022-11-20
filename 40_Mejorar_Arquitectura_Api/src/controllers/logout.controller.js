
const obtenerlogout = require("../negocio/negocio.logout")
const {loggerConsola} = require("../logger/logger");


async function getDatosControllerLogout(req, res) {
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Logout' - con metodo: ${method} - time: ${time}`);
  const user = await obtenerlogout(req.user._id);
  req.session.destroy((err) => { 
    if (!err) {
      const { method } = req;
      const time = new Date().toLocaleString();
      loggerConsola.info(`Ruta '/logout NEw' - con metodo: ${method} - time: ${time}`)
      res.render('logout', {user}); 
    }
    else {
      const { method } = req; 
      const time = new Date().toLocaleString();
      loggerConsola.error(`Ruta '/logout NEw' - con metodo: ${method} - time: ${time}`)
      res.send("Error");
    }
  });
  
}
module.exports = {getDatosControllerLogout}




