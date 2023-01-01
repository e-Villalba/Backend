
const express = require("express");
const router = express.Router();


const home = require("./routerhome");
//const home = require("./home");

const login = require("./routerlogin");
//const login = require("./login");

const loginerror = require("./routerloginerror");
//const loginerror = require("./loginerror");

const logout = require("./routerlogout");
//const logout = require("./logout");

const register = require("./routerregister");
//const register = require("./register");

const erroresRouter = require("./routererrores")
//const erroresRouter = require("./errores");

//const info = require("./routerinfo");
//const info = require("./info");

const productos = require("./routerproductos");
const productosadmin = require("./routerproductosadmin");
//const carrito = require("./carrito");
const carrito = require("./routercarritos");
const ordenesadmin=require("./routerordenesadmin")
const orden=require("./routerordenes")
const userinfo = require("./routeruserinfo");
const chat = require("./routerchat");
const chatxuser = require("./routerchatxuseradmin");
router.use("/", home);
router.use("/login", login);
router.use("/loginerror", loginerror);
router.use("/logout", logout);
router.use("/register", register);
router.use("/productos",productos)
router.use("/productosadmin",productosadmin)
router.use("/userinfo", userinfo);
router.use("/carrito",carrito)
router.use("/ordenesadmin",ordenesadmin)
router.use("/ordenes",orden)
router.use("/chat",chat)
router.use("/chatuser",chatxuser)


router.use("*",erroresRouter)

module.exports = router