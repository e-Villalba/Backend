
const {obtenerordenesuser,postordenes,putordenes} = require("../negocio/negocio.ordenes")
const {loggerConsola} = require("../logger/logger");


async function getDatosControllerOrdenes(req, res) {  
  const { method } = req;
  const time = new Date().toLocaleString();
  const username = req.user.username   
  const estado =req.query.estado
  const userEmail = username
  loggerConsola.info(`Ruta '/Ordenes' - con metodo: ${method} - time: ${time}`);
  const orders = await obtenerordenesuser(username,estado);  
  //res.status(200).json(datosproductos);  
  if (orders) {
    //res.render("cartuser", { cart });
    //res.json(cart)
    res.render("ordenes", { 
      user: userEmail,
    });

  }
  if (!orders) {
    const data = { mensajeResult: "No tiene Carrito con Productos Agregados" }
    //res.render("carritoconfresult", { data });
    res.json(orders)
  }
}
/*
async function getDatosControllerCarritosID(req, res) {    
  let _id = req.params.id  
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Carrito X ID' - con metodo: ${method} - time: ${time}`);
  const cart = await obtenercarritosid(_id)
  //console.log("Cart Controller",cart.products)
  res.status(200).json(cart.products)
}*/

async function postDatosControllerOrdenes(req, res) {
  console.log("postDatosControllerCarritos")
  const { method } = req;
  const time = new Date().toLocaleString();
  
  const { title,price,_id,thumbnail,cantidad} = req.body;    
    const username = req.user.username   
    const cartData ={
      user: req.user.username,
      idproducto:_id,
      title_producto:title,
      price_producto:price,
    }
    const prodAdd={
      id:_id,
      title:title,
      price:price,
      cantidad:cantidad,
      valor:price*cantidad,
      thumbnail:thumbnail
    }
    loggerConsola.info(`Ruta '/carrito' - con metodo: ${method} - time: ${time}`);
    const estado="Abierto"
  
    const data = await postcarritos(username, estado,cartData,prodAdd);  
    res.render("carritoaddresult", { data });
   //res.render(datosprod.view,{mensajeResult:datosprod.mensajeResult});  

  loggerConsola.info(`Ruta '/Carrito' - con metodo: ${method} - ${data.mensajeResult} - time: ${time}`);  
}
/*
async function putDatosControllerCarritos(req, res) {
  //console.log("controller prod",req.body)
  const {id} = req.params;  
  const { estado,direccion,total } = req.body;
  const objCart = {
    estado: estado ,
    direccion:direccion,
    total:total
  }
  
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Carrito' - con metodo: ${method} - time: ${time}`);
  const datoscart = await putcarritos(id,objCart);  
  //console.log("prodcontroller",datosprod)
  //res.render(datosprod.view,{mensajeResult:datosprod.mensajeResult});  
  res.json(datoscart)
   

  loggerConsola.info(`Ruta '/Carrito' - con metodo: ${method} - ${datoscart.mensajeResult} - time: ${time}`);  
}

async function deleteDatosControllerProdCarritos(req, res) {
  const {idcart,idprod} = req.params;  
  
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Carrito Eliminar Productos' - con metodo: ${method} - time: ${time}`);
  const datosprod = await deleteprodcarritos(idcart,idprod);  
  res.json(datosprod)
   

  loggerConsola.info(`Ruta '/Carrito Eliminar Productos' - con metodo: ${method} - ${datosprod.mensajeResult} - time: ${time}`);  
}

async function putDatosControllerProdCarritos(req, res) {
  const {idcart,idprod} = req.params;  
  const {cantidad}=req.body;
  //console.log("putDatosControllerProdCarritos idcart",idcart)
  //console.log("putDatosControllerProdCarritos idprod",idprod)
  
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Carrito Actualizar Cantidad Producto' - con metodo: ${method} - time: ${time}`);
  const datosprod = await updateprodcarritos(idcart,idprod,cantidad);  
  res.json(datosprod)
  loggerConsola.info(`Ruta '/Carrito Actualizar Cantidad Producto' - con metodo: ${method} - ${datosprod.mensajeResult} - time: ${time}`);  
}*/

module.exports = {getDatosControllerOrdenes,postDatosControllerOrdenes,}

