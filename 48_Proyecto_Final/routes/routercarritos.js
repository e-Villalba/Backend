
const { Router } = require("express");
const routercarritos = Router();

const {getDatosControllerCarritos,getDatosControllerCarritosID} = require("../src/controllers/carritos.controller")

routercarritos.get("/", getDatosControllerCarritos ) 
routercarritos.get("/:id", getDatosControllerCarritosID ) 
/*routerproductos.get("/category/:category", getDatosControllerProductosCategory ) 
routerproductos.post("/", postDatosControllerProductos) 
routerproductos.put("/:id", putDatosControllerProductos) 
routerproductos.delete("/:id", deleteDatosControllerProductos) */

module.exports = routercarritos;