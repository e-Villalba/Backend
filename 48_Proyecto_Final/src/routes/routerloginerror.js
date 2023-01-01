
const { Router } = require("express");
const routerloginerror = Router();
const auth = require('../middleware/auth.js');

const {getDatosControllerLoginError} = require("../controllers/loginerror.controller")

routerloginerror.get("/", getDatosControllerLoginError) 

module.exports = routerloginerror;