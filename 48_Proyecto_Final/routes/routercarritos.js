
const { Router } = require("express");
const routercarritos = Router();
const auth = require('../middleware/auth.js');

const {getDatosControllerCarritos,getDatosControllerCarritosID,postDatosControllerCarritos,putDatosControllerCarritos,deleteDatosControllerProdCarritos,putDatosControllerProdCarritos} = require("../src/controllers/carritos.controller")

routercarritos.get("/", auth,getDatosControllerCarritos ) 
routercarritos.get("/:id",auth, getDatosControllerCarritosID ) 
routercarritos.post("/", auth,postDatosControllerCarritos) 
routercarritos.put("/:id",auth, putDatosControllerCarritos) 
routercarritos.delete("/:idcart/productos/:idprod", auth, deleteDatosControllerProdCarritos) 
routercarritos.put("/:idcart/productos/:idprod",auth, putDatosControllerProdCarritos) 

module.exports = routercarritos;