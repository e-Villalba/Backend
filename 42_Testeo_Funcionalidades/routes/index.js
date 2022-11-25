const express = require("express");
const router = express.Router();


const home = require("./routerhome");

const login = require("./routerlogin");

const loginerror = require("./routerloginerror");

const logout = require("./routerlogout");

const register = require("./routerregister");

const erroresRouter = require("./routererrores")

const info = require("./routerinfo");

const productos = require("./routerproductos");




router.use("/", home);
router.use("/login", login);
router.use("/loginerror", loginerror);
router.use("/logout", logout);
router.use("/register", register);
router.use("/productos",productos)
router.use("/info",info)

//router.use("*",erroresRouter)

module.exports = router