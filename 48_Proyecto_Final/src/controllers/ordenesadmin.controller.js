
const {obtenerordenesadmin} = require("../negocio/negocio.ordenesadmin")
const {loggerConsola} = require("../logger/logger");


async function getDatosControllerOrdenesAdmin(req, res) {  
  
  const datosordenesadmin = await obtenerordenesadmin();      
  const { method } = req;
  const userEmail = req.user.email
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/ordenesadmin' - metodo: ${method} - time: ${time}`);  
  res.render(datosordenesadmin, { 
      user: userEmail,
    });


}

module.exports = {getDatosControllerOrdenesAdmin}

