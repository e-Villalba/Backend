
const { Router } = require("express");
const routerordenesadmin = Router();

const {getDatosControllerOrdenesAdmin} = require("../src/controllers/ordenesadmin.controller")

routerordenesadmin.get("/", getDatosControllerOrdenesAdmin ) 
//routerproductos.post("/", postDatosControllerProductos) 

module.exports = routerordenesadmin;