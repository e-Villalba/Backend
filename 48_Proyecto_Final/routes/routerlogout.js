
const { Router } = require("express");
const routerlogout = Router();
const auth = require('../middleware/auth.js');

const {getDatosControllerLogout} = require("../src/controllers/logout.controller")

routerlogout.get("/", auth,getDatosControllerLogout) 

module.exports = routerlogout;






