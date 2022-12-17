
const {obtenerproductosadmin} = require("../negocio/negocio.productosadmin")
const {loggerConsola} = require("../logger/logger");


async function getDatosControllerProductosAdmin(req, res) {  
  
  const datosproductosadmin = await obtenerproductosadmin();    

  const { method } = req;
  const userEmail = req.user.email
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/productosadmin' - metodo: ${method} - time: ${time}`);  
  res.render(datosproductosadmin, { 
      user: userEmail,
    });


}

module.exports = {getDatosControllerProductosAdmin}

