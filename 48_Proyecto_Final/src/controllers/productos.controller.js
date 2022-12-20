
const {obtenerproductos,obtenerproductostitle,obtenerproductoscategory,postproductos,putproductos,deleteproductos} = require("../negocio/negocio.productos")
const {loggerConsola} = require("../logger/logger");


async function getDatosControllerProductos(req, res) {  
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Producto' - con metodo: ${method} - time: ${time}`);
  const datosproductos = await obtenerproductos();  
  res.status(200).json(datosproductos);
}
async function getDatosControllerProductosTitle(req, res) {    
  const { title } = req.params;
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Producto X Title' - con metodo: ${method} - time: ${time}`);
  const datosproductos = await obtenerproductostitle(title)
  res.status(200).json(datosproductos)
}
async function getDatosControllerProductosCategory(req, res) {    
  const { category } = req.params;
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Producto X Categoria' - con metodo: ${method} - time: ${time}`);
  const datosproductos = await obtenerproductoscategory(category)
 
  res.status(200).json(datosproductos)
}
async function postDatosControllerProductos(req, res) {
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

async function putDatosControllerProductos(req, res) {
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
}

async function deleteDatosControllerProductos(req, res) {
  //console.log("controller prod",req.body)
  const {id} = req.params;  
  /*const { title, price, category,thumbnail } = req.body;
  const objProd = {
    title:title,
    price:price,
    category: category,
    thumbnail:thumbnail,    
  }*/
  
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Producto' - con metodo: ${method} - time: ${time}`);
  const datosprod = await deleteproductos(id);  
  //console.log("prodcontroller",datosprod)
  //res.render(datosprod.view,{mensajeResult:datosprod.mensajeResult});  
  res.json(datosprod)
   

  loggerConsola.info(`Ruta '/Producto' - con metodo: ${method} - ${datosprod.mensajeResult} - time: ${time}`);  
}
module.exports = {getDatosControllerProductos,postDatosControllerProductos,getDatosControllerProductosTitle,getDatosControllerProductosCategory,putDatosControllerProductos,deleteDatosControllerProductos}

