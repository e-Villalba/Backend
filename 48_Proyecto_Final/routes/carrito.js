const { Router } = require("express");
//const Carrito = require("../controllers/carrito.controller");
const Carrito = require('../models/Cart.js');
const Productos = require('../models/Products.js');  
const carrito = Router();
const sendMail= require ('../middleware/nodemailer.js')
const sendSMS = require ('../middleware/twilio.js')

const { loggerConsola } = require("../logger/logger");
const { loggerError } = require("../logger/logger");

carrito.post("/", (req, res,next) => {    
  const { method } = req;
  const time = new Date().toLocaleString();
    const { title,price,_id,thumbnail} = req.body;    
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
      thumbnail:thumbnail
    }
    loggerConsola.info(`Ruta '/carrito' - con metodo: ${method} - time: ${time}`);
  ////////////////////COMIENZO AGREGADO DEL CARRITO Y/O PRODUCTO
  const estado="Abierto"
  Carrito.findOne({ username,estado }, async (err, cart) => {
    if (err) {
      //console.log("register FindOne Error")
      loggerError.error(`Ruta '/carrito' - con metodo: ${method} - time: ${time} - error: ${err}`);
      const data = { mensajeResult: `Error de Registro: ${err}` }
      res.render("carritoaddresult", { data });
    }
    if (cart) {
      //console.log("Productos del Carrito Ahora ",cart.products)
      const products=cart.products
      //products.push(_id)
      products.push(prodAdd) 
      const id=cart._id
      cart.save()
      const data = { ...cartData, mensajeResult: "Producto agregado a carrito en curso" }
      res.render("carritoaddresult", { data });
    }
    if (!cart) {
      //console.log("register FindOne !user")
      const estado = "Abierto"
      const products=[]
      //products.push(_id)
      products.push(prodAdd)
      //console.log("Username",username)
      //console.log ("Array productos",products)

      const newCart = new Carrito({
        username,
        products,
        estado,
      });

      await newCart.save();
 
      const data = { ...cartData, mensajeResult: "Producto Agregado Exitosamente Al Carrito" }
      res.render("carritoaddresult", { data });
    }
  });
})

carrito.get("/", (req, res,next) => {    
  const { method } = req;
  const time = new Date().toLocaleString();
  const username = req.user.username   
  const accion =req.query.accion
////////////////////COMIENZO AGREGADO DEL CARRITO Y/O PRODUCTO
const estado="Abierto"
Carrito.findOne({ username,estado }, async (err, cart) => {
  if (err) {
    //console.log("register FindOne Error")
    loggerError.error(`Ruta '/carrito' - con metodo: ${method} - time: ${time} - error: ${err}`);
    const data = { mensajeResult: `Error de Registro: ${err}` }
    res.render("carritoaddresult", { data });
  }
  if (cart) {
    loggerConsola.info(`Ruta '/carrito' - con metodo: ${method} - time: ${time}`);
    //console.log("Productos del Carrito Ahora ",cart.products)
    const products=cart.products
    const id=cart._id
    if(accion=="confirmar")
    {
      cart.estado="Cerrado"
      cart.save()
      const data = { mensajeResult: "Compra de Carrito Confirmada. Muchas Gracias!" }
      sendMail("C",cart)
      sendSMS()
      res.render("carritoconfresult", { data });
    }
    else
    {
      res.render("cartuser", { cart });
    }
  }
  if (!cart) {
    const data = { mensajeResult: "No tiene Carrito con Productos Agregados" }
    res.render("carritoconfresult", { data });
  }
});

})
//////////////////////////////////////////////////////////get por id
carrito.get("/:id", (req, res,next) => {   
  const { method } = req;
  const time = new Date().toLocaleString();
    
  let _id = req.params.id  
  //console.log ("Carrito id get POR ID",_id)
  const estado="Abierto"
  let prodsCarrito=[]
Carrito.findOne({ _id }, async (err, cart) => {
  if (err) {
    //console.log("register FindOne Error")    
    loggerError.error(`Ruta '/carrito' - con metodo: ${method} - time: ${time} - error: ${err}`);
    const data = { mensajeResult: `Error al buscar Carrito: ${err}` }
    res.render("carritoaddresult", { data });
  }
  if (cart) {
    //console.log("Productos del Carrito Ahora ",cart.products)
    loggerConsola.info(`Ruta '/carrito' - con metodo: ${method} - time: ${time}`);
    let _id
    cart.products.forEach( prod=>{
      _id = prod
      //console.log ("_id",_id)
      const producFind = Productos.findOne({_id});      
      
    }
    )
    res.status(201).json(cart.products)
  }

});

})


carrito.put("/", (req, res,next) => {  
  const { method } = req;
  const time = new Date().toLocaleString();  
  //const { _id} = req.body;    
  const {_id} = req.params; 
  const username = req.user.username   

////////////////////COMIENZO AGREGADO DEL CARRITO Y/O PRODUCTO
const estado="Abierto"
Carrito.findOne({ _id }, async (err, cart) => {
  if (err) {
    //console.log("register FindOne Error")
    loggerError.error(`Ruta '/carrito' - con metodo: ${method} - time: ${time} - error: ${err}`);
    const data = { mensajeResult: `Error de Actualización: ${err}` }    
    res.render("carritoaddresult", { data });
  }
  if (cart) {
    loggerConsola.info(`Ruta '/carrito' - con metodo: ${method} - time: ${time}`);
    const id=cart._id    
    cart.estado="Cerrado"
    
    cart.save()
    const data = { mensajeResult: "Compra de Carrito Confirmada. Muchas Gracias!" }
    res.render("carritoaddresult", { data });
  }
  if (!cart) {
    const data = {  mensajeResult:"Carrito No Encontrado, no se pudo confirmar la Compra" }
    res.render("carritoaddresult", { data });
  }
});

})
module.exports = carrito