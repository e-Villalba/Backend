  
const { Router } = require("express");
const routerregister = Router();

const {getDatosControllerRegister,postDatosControllerRegister} = require("../src/controllers/register.controller")

routerregister.get("/", getDatosControllerRegister) 
routerregister.post("/", postDatosControllerRegister) 

module.exports = routerregister;