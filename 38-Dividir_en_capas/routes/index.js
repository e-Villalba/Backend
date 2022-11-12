const express = require("express");
const router = express.Router();

//const home = require("./home");
const home = require("./routerhome");
//const login = require("./login");
const login = require("./routerlogin");
const loginerror = require("./routerloginerror");
//const logout = require("./logout");
const logout = require("./routerlogout");
const register = require("./register");
const productos = require("./productos");
const productosmock = require("./productosmock");
//const erroresRouter = require("./errores");
const erroresRouter = require("./routererrores")
//const info = require("./info");
const routerinfo = require("./routerinfo");
const random  =require("./random")

router.use("/", home);
router.use("/login", login);
router.use("/loginerror", loginerror);
router.use("/logout", logout);
router.use("/register", register);
router.use("/productos",productos)
router.use("/api/productos-test",productosmock)
//router.use("/info",info)
router.use("/routerinfo",routerinfo)
router.use ("/api/randoms",random)

router.use("*",erroresRouter)



module.exports = router