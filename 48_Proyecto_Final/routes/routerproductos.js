
const { Router } = require("express");
const routerproductos = Router();

const {getDatosControllerProductos,postDatosControllerProductos,putDatosControllerProductos,getDatosControllerProductosTitle,getDatosControllerProductosCategory,deleteDatosControllerProductos} = require("../src/controllers/productos.controller")

routerproductos.get("/", getDatosControllerProductos ) 
routerproductos.get("/:title", getDatosControllerProductosTitle ) 
routerproductos.get("/category/:category", getDatosControllerProductosCategory ) 
routerproductos.post("/", postDatosControllerProductos) 
routerproductos.put("/:id", putDatosControllerProductos) 
routerproductos.delete("/:id", deleteDatosControllerProductos) 

module.exports = routerproductos;