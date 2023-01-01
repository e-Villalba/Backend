
const { Router } = require("express");
const routerloginerror = Router();
const auth = require('../middleware/auth.js');

const {getDatosControllerLoginError} = require("../src/controllers/loginerror.controller")

routerloginerror.get("/", auth,getDatosControllerLoginError) 

module.exports = routerloginerror;