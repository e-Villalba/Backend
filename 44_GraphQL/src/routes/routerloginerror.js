
const { Router } = require("express");
const routerloginerror = Router();

const {getDatosControllerLoginError} = require("../controllers/loginerror.controller")

routerloginerror.get("/", getDatosControllerLoginError) 

module.exports = routerloginerror;