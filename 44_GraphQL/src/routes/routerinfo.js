const { Router } = require("express");
const routerinfo = Router();

const {getDatosControllerInfo} = require("../controllers/info.controller")

routerinfo.get("/", getDatosControllerInfo) 

module.exports = routerinfo;