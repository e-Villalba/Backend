
const { Router } = require("express");
const routercarritos = Router();

const {getDatosControllerCarritos,getDatosControllerCarritosID,postDatosControllerCarritos,putDatosControllerCarritos,deleteDatosControllerProdCarritos,putDatosControllerProdCarritos} = require("../src/controllers/carritos.controller")

routercarritos.get("/", getDatosControllerCarritos ) 
routercarritos.get("/:id", getDatosControllerCarritosID ) 
routercarritos.post("/", postDatosControllerCarritos) 
routercarritos.put("/:id", putDatosControllerCarritos) 
routercarritos.delete("/:idcart/productos/:idprod", deleteDatosControllerProdCarritos) 
routercarritos.put("/:idcart/productos/:idprod", putDatosControllerProdCarritos) 
//routerproductos.delete("/:id", deleteDatosControllerProductos) */

module.exports = routercarritos;