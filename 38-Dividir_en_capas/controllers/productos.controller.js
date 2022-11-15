
const {obtenerproductos,postproductos} = require("../negocio/negocio.productos")
const {loggerConsola} = require("../logger/logger");


async function getDatosControllerProductos(req, res) {
  console.log("getDatosControllerProductos adentro")
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Register' - con metodo: ${method} - time: ${time}`);
  const datosproductos = await obtenerproductos();
  //res.redirect(datosregister);
  res.status(200).json(datosproductos);
  //res.json(datosInfo);
  //res.status(200).send(datosInfo); 
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
  res.redirect(datosprod.view);
  loggerConsola.info(`Ruta '/Producto' - con metodo: ${method} - ${datosprod.mensajeResult} - time: ${time}`);  
  //res.render("register-result",{mensajeResult:"Usuario Registrado Exitosamente"});  
}
module.exports = {getDatosControllerProductos,postDatosControllerProductos}

