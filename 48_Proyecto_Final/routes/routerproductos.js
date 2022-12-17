
const { Router } = require("express");
const routerproductos = Router();

const {getDatosControllerProductos,postDatosControllerProductos,getDatosControllerProductosTitle,getDatosControllerProductosCategory} = require("../src/controllers/productos.controller")

routerproductos.get("/", getDatosControllerProductos ) 
routerproductos.post("/", postDatosControllerProductos) 
routerproductos.get("/:title", getDatosControllerProductosTitle ) 
routerproductos.get("/category/:category", getDatosControllerProductosCategory ) 


module.exports = routerproductos;