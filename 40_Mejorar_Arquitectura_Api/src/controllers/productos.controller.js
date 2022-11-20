
const {obtenerproductos,postproductos} = require("../negocio/negocio.productos")
const {loggerConsola} = require("../logger/logger");


async function getDatosControllerProductos(req, res) {  
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Producto' - con metodo: ${method} - time: ${time}`);
  const datosproductos = await obtenerproductos();  
  res.status(200).json(datosproductos);
}

async function postDatosControllerProductos(req, res) {
  const { title, price, thumbnail } = req.body;
  const objUser = {
    title:title,
    price:price,
    thumbnail:thumbnail
  }
  
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Producto' - con metodo: ${method} - time: ${time}`);
  const datosprod = await postproductos(objUser);  
   res.render(datosprod.view,{mensajeResult:datosprod.mensajeResult});  
//    res.redirect(datosprod.view);

  loggerConsola.info(`Ruta '/Producto' - con metodo: ${method} - ${datosprod.mensajeResult} - time: ${time}`);  
}
module.exports = {getDatosControllerProductos,postDatosControllerProductos}

