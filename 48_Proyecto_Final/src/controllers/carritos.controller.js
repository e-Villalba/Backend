
const {obtenercarritosuser,obtenercarritosid} = require("../negocio/negocio.carritos")
const {loggerConsola} = require("../logger/logger");


async function getDatosControllerCarritos(req, res) {  
  const { method } = req;
  const time = new Date().toLocaleString();
  const username = req.user.username   
  const accion =req.query.accion
  const estado="Abierto"
  loggerConsola.info(`Ruta '/Carrito' - con metodo: ${method} - time: ${time}`);
  const cart = await obtenercarritosuser(username,estado);  
  //res.status(200).json(datosproductos);  
  res.render("cartuser", { cart });
}
async function getDatosControllerCarritosID(req, res) {    
  let _id = req.params.id  
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Carrito X ID' - con metodo: ${method} - time: ${time}`);
  const cart = await obtenercarritosid(_id)
  console.log("Cart Controller",cart.products)
  res.status(200).json(cart.products)
}
/*
async function postDatosControllerCarritos(req, res) {
  //console.log("controller prod",req.body)
  const { title, price, category,thumbnail } = req.body;
  const objProd = {
    title:title,
    price:price,
    category: category,
    thumbnail:thumbnail,    
  }
  
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Producto' - con metodo: ${method} - time: ${time}`);
  const datosprod = await postproductos(objProd);  
   res.render(datosprod.view,{mensajeResult:datosprod.mensajeResult});  

  loggerConsola.info(`Ruta '/Producto' - con metodo: ${method} - ${datosprod.mensajeResult} - time: ${time}`);  
}

async function putDatosControllerCarritos(req, res) {
  //console.log("controller prod",req.body)
  const {id} = req.params;  
  const { title, price, category,thumbnail } = req.body;
  const objProd = {
    title:title,
    price:price,
    category: category,
    thumbnail:thumbnail,    
  }
  
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Producto' - con metodo: ${method} - time: ${time}`);
  const datosprod = await putproductos(id,objProd);  
  //console.log("prodcontroller",datosprod)
  //res.render(datosprod.view,{mensajeResult:datosprod.mensajeResult});  
  res.json(datosprod)
   

  loggerConsola.info(`Ruta '/Producto' - con metodo: ${method} - ${datosprod.mensajeResult} - time: ${time}`);  
}*/

/*async function deleteDatosControllerProductos(req, res) {
  const {id} = req.params;  
  
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Producto' - con metodo: ${method} - time: ${time}`);
  const datosprod = await deleteproductos(id);  
  res.json(datosprod)
   

  loggerConsola.info(`Ruta '/Producto' - con metodo: ${method} - ${datosprod.mensajeResult} - time: ${time}`);  
}*/
module.exports = {getDatosControllerCarritos,getDatosControllerCarritosID}

