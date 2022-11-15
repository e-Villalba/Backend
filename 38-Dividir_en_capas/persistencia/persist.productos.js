const bcrypt = require("bcrypt")
require('../conexiones/connection'); 
const Productos = require('../models/Products');  

async function getproductos() {
  try {
    console.log("productos find")
    const productos = await Productos.find();
    return productos;
  } catch (error) {
    console.log(error);
  }
  }

async function postproductospersist(obj) {
    const { title, price, thumbnail } = obj;    
    const view="/"
    const Prod = await Productos.findOne({ title }); 
    let mensajeResult=""
    if (Prod)
    {
      mensajeResult= "Producto ya registrado"        
    }
    else
    {
      
      const newProd = new Productos({
        title,
        price,
        thumbnail,
      });
       await newProd.save(); 
       mensajeResult = "Producto Registrado Exitosamente"
    }
    const objReturn ={
      view: view,
      mensajeResult: mensajeResult
    }
    return objReturn
   
}

module.exports = {getproductos,postproductospersist}


/*
const Producto = require("../controllers/producto.controller");
const productos = Router();
const {loggerConsola} = require("../logger/logger");
const {loggerError} = require("../logger/logger");
productos.get("/", (req, res) => {
    const { method } = req;
    const time = new Date().toLocaleString();
    Producto.getAll()
        .then(knexres => {
            loggerConsola.info(`Ruta '/productos' - metodo: ${method} - time: ${time}`);
            res.status(200).json(knexres);
        })
        .catch(err => {          
            loggerError.error(`Ruta '/productos - metodo: ${method} - time: ${time} - error: ${err}`);
            console.log(err)
        })
}*/