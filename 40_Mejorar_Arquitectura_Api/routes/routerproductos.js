
const { Router } = require("express");
const routerproductos = Router();

const {getDatosControllerProductos,postDatosControllerProductos} = require("../controllers/productos.controller")

routerproductos.get("/", getDatosControllerProductos ) 
routerproductos.post("/", postDatosControllerProductos) 

module.exports = routerproductos;