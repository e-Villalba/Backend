
const { Router } = require("express");
const routerordenesadmin = Router();

const {getDatosControllerOrdenesAdmin} = require("../controllers/ordenesadmin.controller")
const auth = require('../middleware/auth.js');

routerordenesadmin.get("/",auth, getDatosControllerOrdenesAdmin ) 


module.exports = routerordenesadmin;