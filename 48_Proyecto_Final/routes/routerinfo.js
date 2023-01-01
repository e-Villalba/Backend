const { Router } = require("express");
const routerinfo = Router();
const auth = require('../middleware/auth.js');

const {getDatosControllerInfo} = require("../src/controllers/info.controller")

routerinfo.get("/", auth,getDatosControllerInfo) 

module.exports = routerinfo;