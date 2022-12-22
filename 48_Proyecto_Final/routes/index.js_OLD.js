const express = require("express");
const router = express.Router();

const home = require("./home");
const login = require("./login");
const loginerror = require("./loginerror");
const logout = require("./logout");
const register = require("./register");
const userinfo = require("./userinfo");
const productos = require("./productos");
const productosadmin = require("./productosadmin");
const carrito = require("./carrito");
//const productosmock = require("./productosmock");
const erroresRouter = require("./errores");
const info = require("./info");
const random  =require("./random")

router.use("/", home);
router.use("/login", login);
router.use("/loginerror", loginerror);
router.use("/logout", logout);
router.use("/register", register);
router.use("/userinfo", userinfo);
router.use("/productos",productos)
router.use("/productosadmin",productosadmin)
router.use("/carrito",carrito)
//router.use("/api/productos-test",productosmock)
router.use("/info",info)
router.use ("/api/randoms",random)

router.use("*",erroresRouter)



module.exports = router