
const { Router } = require("express");
const routerlogout = Router();


const {getDatosControllerLogout} = require("../src/controllers/logout.controller")

routerlogout.get("/", getDatosControllerLogout) 

module.exports = routerlogout;






