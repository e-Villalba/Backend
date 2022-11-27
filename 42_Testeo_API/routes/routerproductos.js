
const { Router } = require("express");
const routerproductos = Router();

const {getDatosControllerProductos,postDatosControllerProductos,putDatosControllerProductos,deleteDatosControllerProductos} = require("../src/controllers/productos.controller")

routerproductos.get("/", getDatosControllerProductos ) 
routerproductos.post("/", postDatosControllerProductos) 
routerproductos.put("/:id", putDatosControllerProductos) 
routerproductos.delete("/:id", deleteDatosControllerProductos) 
module.exports = routerproductos;