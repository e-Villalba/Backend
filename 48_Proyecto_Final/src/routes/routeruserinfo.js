
const { Router } = require("express");
const routeruserinfo = Router();
const auth = require('../middleware/auth.js');

const { getDatosControllerUserInfo } = require("../controllers/userinfo.controller")

routeruserinfo.get("/", auth, getDatosControllerUserInfo)

module.exports = routeruserinfo;