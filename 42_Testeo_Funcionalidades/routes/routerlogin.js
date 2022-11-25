const passport = require("../middleware/passport.js");

const { Router } = require("express");
const routerlogin = Router();

const {getDatosControllerLogin} = require("../src/controllers/login.controller")

routerlogin.post("/", passport.authenticate("local", { failureRedirect: "/loginerror" }),getDatosControllerLogin) 

module.exports = routerlogin;