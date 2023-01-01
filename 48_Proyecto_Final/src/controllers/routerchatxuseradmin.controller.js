
const {loggerConsola} = require("../logger/logger");

async function getDatosControllerChatxUSerAdmin(req, res) {  
  const { method } = req;
  const userEmail = req.user.email
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/ChatxUseradmin' - metodo: ${method} - time: ${time}`);  
  res.render("mensajesuser", { 
      user: userEmail,
    });
}

module.exports = {getDatosControllerChatxUSerAdmin}

