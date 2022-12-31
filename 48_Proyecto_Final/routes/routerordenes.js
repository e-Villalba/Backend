
const { Router } = require("express");
const routerordenes = Router();

const {getDatosControllerOrdenes} = require("../src/controllers/ordenes.controller")

//routerordenes.get("/:username", getDatosControllerOrdenes ) 
routerordenes.get("/", getDatosControllerOrdenes ) 
/*routerordenes.get("/:id", getDatosControllerCarritosID ) 
routerordenes.post("/", postDatosControllerCarritos) 
routerordenes.put("/:id", putDatosControllerCarritos) 
routerordenes.delete("/:idcart/productos/:idprod", deleteDatosControllerProdCarritos) 
routerordenes.put("/:idcart/productos/:idprod", putDatosControllerProdCarritos) 
routerproductos.delete("/:id", deleteDatosControllerProductos) */

module.exports = routerordenes;