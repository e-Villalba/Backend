  
const { Router } = require("express");
const routeruserinfo = Router();

const {getDatosControllerUserInfo} = require("../src/controllers/userinfo.controller")

routeruserinfo.get("/", getDatosControllerUserInfo) 


module.exports = routeruserinfo;