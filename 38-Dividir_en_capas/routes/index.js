/*const express = require("express");
const router = express.Router();

const home = require("./home");
const login = require("./login");
const loginerror = require("./loginerror");
const logout = require("./logout");
const register = require("./register");
const productos = require("./productos");
const erroresRouter = require("./errores");
const info = require("./info");


router.use("/", home);
router.use("/login", login);
router.use("/loginerror", loginerror);
router.use("/logout", logout);
router.use("/register", register);
router.use("/productos",productos)
router.use("/info",info)

router.use("*",erroresRouter)

module.exports = router*/

const express = require("express");
const router = express.Router();


const home = require("./routerhome");
const login = require("./routerlogin");
const loginerror = require("./routerloginerror");
const logout = require("./routerlogout");
const register = require("./routerregister");
const erroresRouter = require("./routererrores")
const routerinfo = require("./routerinfo");
const productos = require("./routerproductos");

router.use("/", home);
router.use("/login", login);
router.use("/loginerror", loginerror);
router.use("/logout", logout);
router.use("/register", register);
router.use("/productos",productos)
router.use("/info",routerinfo)

router.use("*",erroresRouter)

module.exports = router