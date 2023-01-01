
const { Router } = require("express");
const routerproductos = Router();
const auth = require('../middleware/auth.js');

const {getDatosControllerProductos,postDatosControllerProductos,putDatosControllerProductos,getDatosControllerProductosTitle,getDatosControllerProductosCategory,deleteDatosControllerProductos} = require("../controllers/productos.controller")

routerproductos.get("/",getDatosControllerProductos ) 
routerproductos.get("/:title",auth, getDatosControllerProductosTitle ) 
routerproductos.get("/category/:category",auth, getDatosControllerProductosCategory ) 
routerproductos.post("/",auth, postDatosControllerProductos) 
routerproductos.put("/:id",auth, putDatosControllerProductos) 
routerproductos.delete("/:id",auth, deleteDatosControllerProductos) 

module.exports = routerproductos;