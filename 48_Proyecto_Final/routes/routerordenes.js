
const { Router } = require("express");
const routerordenes = Router();
const auth = require('../middleware/auth.js');

const {getDatosControllerOrdenes,getDatosControllerOrdenesUser,deleteDatosControllerOrdenes,putDatosControllerOrdenes} = require("../src/controllers/ordenes.controller")


routerordenes.get("/", auth,getDatosControllerOrdenes ) 
routerordenes.get("/:user",auth, getDatosControllerOrdenesUser ) 
routerordenes.delete("/:id",auth, deleteDatosControllerOrdenes )
routerordenes.put("/:id", auth,putDatosControllerOrdenes) 

module.exports = routerordenes;