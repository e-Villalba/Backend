
const {obtenercarritosuser,obtenercarritosid, postcarritos,putcarritos,deleteprodcarritos,updateprodcarritos} = require("../negocio/negocio.carritos")
const {loggerConsola} = require("../logger/logger");


async function getDatosControllerCarritos(req, res) {  
  const { method } = req;
  const time = new Date().toLocaleString();
  const username = req.user.username   
  const accion =req.query.accion
  const estado="Abierto"
  loggerConsola.info(`Ruta '/Carrito' - con metodo: ${method} - time: ${time}`);
  const cart = await obtenercarritosuser(username,estado);    
  if (cart) {
    res.render("cartuser", { cart });
  }
  if (!cart) {
    const data = { mensajeResult: "No tiene Carrito con Productos Agregados" }
    res.render("carritoconfresult", { data });
  }
}
async function getDatosControllerCarritosID(req, res) {    
  let _id = req.params.id  
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Carrito X ID' - con metodo: ${method} - time: ${time}`);
  const cart = await obtenercarritosid(_id)  
  res.status(200).json(cart.products)
}

async function postDatosControllerCarritos(req, res) {  
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

  loggerConsola.info(`Ruta '/Carrito' - con metodo: ${method} - ${data.mensajeResult} - time: ${time}`);  
}

async function putDatosControllerCarritos(req, res) {  
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
  
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Carrito Actualizar Cantidad Producto' - con metodo: ${method} - time: ${time}`);
  const datosprod = await updateprodcarritos(idcart,idprod,cantidad);  
  res.json(datosprod)
  loggerConsola.info(`Ruta '/Carrito Actualizar Cantidad Producto' - con metodo: ${method} - ${datosprod.mensajeResult} - time: ${time}`);  
}

module.exports = {getDatosControllerCarritos,getDatosControllerCarritosID,postDatosControllerCarritos,putDatosControllerCarritos,deleteDatosControllerProdCarritos,putDatosControllerProdCarritos}

