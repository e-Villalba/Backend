  
const { Router } = require("express");
const routerregister = Router();
const auth = require('../middleware/auth.js');

const {getDatosControllerRegister,postDatosControllerRegister} = require("../src/controllers/register.controller")

routerregister.get("/",auth, getDatosControllerRegister) 
routerregister.post("/",auth, postDatosControllerRegister) 

module.exports = routerregister;