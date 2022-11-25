const { Router } = require("express");
const home = Router();
const auth = require('../middleware/auth.js');

const routerhome = Router();

const {getDatosControllerHome} = require("../src/controllers/home.controller")

routerhome.get("/", auth, getDatosControllerHome) 

module.exports = routerhome;


