
const express = require("express");
const router = express.Router();


const home = require("./routerhome");
const login = require("./routerlogin");
const loginerror = require("./routerloginerror");
const logout = require("./routerlogout");
const register = require("./routerregister");
const erroresRouter = require("./routererrores")
const productos = require("./routerproductos");
const productosadmin = require("./routerproductosadmin");
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