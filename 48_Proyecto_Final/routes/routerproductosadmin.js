
const { Router } = require("express");
const routerproductosadmin = Router();

const {getDatosControllerProductosAdmin} = require("../src/controllers/productosadmin.controller")

routerproductosadmin.get("/", getDatosControllerProductosAdmin ) 
//routerproductos.post("/", postDatosControllerProductos) 

module.exports = routerproductosadmin;