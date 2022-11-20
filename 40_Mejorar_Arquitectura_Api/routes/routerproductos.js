
const { Router } = require("express");
const routerproductos = Router();

const {getDatosControllerProductos,postDatosControllerProductos} = require("../src/controllers/productos.controller")

routerproductos.get("/", getDatosControllerProductos ) 
routerproductos.post("/", postDatosControllerProductos) 

module.exports = routerproductos;