
const { Router } = require("express");
const routerproductosadmin = Router();

const {getDatosControllerOrdenesAdmin} = require("../src/controllers/ordenesadmin.controller")

routerproductosadmin.get("/", getDatosControllerOrdenesAdmin) 
//routerproductos.post("/", postDatosControllerProductos) 

module.exports = routerproductosadmin;