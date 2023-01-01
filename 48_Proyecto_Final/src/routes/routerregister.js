  
const { Router } = require("express");
const routerregister = Router();
const auth = require('../middleware/auth.js');

const {getDatosControllerRegister,postDatosControllerRegister} = require("../controllers/register.controller")

routerregister.get("/", getDatosControllerRegister) 
routerregister.post("/", postDatosControllerRegister) 

module.exports = routerregister;