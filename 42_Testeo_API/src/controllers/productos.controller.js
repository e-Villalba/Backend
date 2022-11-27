const {obtenerproductos,postproductos,putproductos,deleteproductos} = require("../negocio/negocio.productos")
const {loggerConsola} = require("../logger/logger");


async function getDatosControllerProductos(req, res) {  
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Producto' - con metodo: ${method} - time: ${time}`);
  const datosproductos = await obtenerproductos();  
  //res.status(200).json(datosproductos);
  res.json(datosproductos)
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
  //res.render(datosprod.view,{mensajeResult:datosprod.mensajeResult});  
  //res.send(datosprod.mensajeResult)
  res.send(datosprod)
  loggerConsola.info(`Ruta '/Producto' - con metodo: ${method} - ${datosprod.mensajeResult} - time: ${time}`);  
}

async function putDatosControllerProductos(req, res) {
  const {id} = req.params;  
  console.log("PUT ID",id)
  const { title, price, thumbnail } = req.body;  
  const objProd={
    _id: id,
    title:title,
    price:price,
    thumbnail:thumbnail
  }    
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Producto' - con metodo: ${method} - time: ${time}`);
  const datosprod = await putproductos(objProd);
  const {mensajeResult}=datosprod
  console.log("Return datos prod",datosprod)  
  //res.render(datosprod.view,{mensajeResult:datosprod.mensajeResult});  

  loggerConsola.info(`Ruta '/Producto' - con metodo: ${method} - ${mensajeResult} - time: ${time}`);  
    res.send(datosprod)

}

async function deleteDatosControllerProductos(req, res) {
  const {id} = req.params;  
  console.log("PUT ID",id)
  /*const { title, price, thumbnail } = req.body;  
  const objProd={
    _id: id,
    title:title,
    price:price,
    thumbnail:thumbnail
  } */   
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Producto' - con metodo: ${method} - time: ${time}`);
  const datosprod = await deleteproductos(id);
  const {mensajeResult}=datosprod
  console.log("Return datos prod",datosprod)  
  //res.render(datosprod.view,{mensajeResult:datosprod.mensajeResult});  

  loggerConsola.info(`Ruta '/Producto' - con metodo: ${method} - ${mensajeResult} - time: ${time}`);  
    res.send(datosprod)

}



module.exports = {getDatosControllerProductos,postDatosControllerProductos,putDatosControllerProductos,deleteDatosControllerProductos}



