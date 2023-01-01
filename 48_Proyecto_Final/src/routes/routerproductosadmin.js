
const { Router } = require("express");
const routerproductosadmin = Router();
const auth = require('../middleware/auth.js');

const {getDatosControllerProductosAdmin} = require("../controllers/productosadmin.controller")

routerproductosadmin.get("/", auth,getDatosControllerProductosAdmin) 


module.exports = routerproductosadmin;