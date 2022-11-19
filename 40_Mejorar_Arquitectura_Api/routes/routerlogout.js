
const { Router } = require("express");
const routerlogout = Router();


const {getDatosControllerLogout} = require("../controllers/logout.controller")

routerlogout.get("/", getDatosControllerLogout) 

module.exports = routerlogout;






