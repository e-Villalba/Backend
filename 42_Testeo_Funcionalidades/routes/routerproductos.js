
const { Router } = require("express");
const routerproductos = Router();

const {getDatosControllerProductos,postDatosControllerProductos,putDatosControllerProductos} = require("../src/controllers/productos.controller")

routerproductos.get("/", getDatosControllerProductos ) 
routerproductos.post("/", postDatosControllerProductos) 
routerproductos.put("/:id", putDatosControllerProductos) 

module.exports = routerproductos;