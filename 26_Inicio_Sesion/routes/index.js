const express = require("express");
const router = express.Router();

const home = require("./home");
const login = require("./login");
const loginerror = require("./loginerror");
const logout = require("./logout");
const register = require("./register");
const productos = require("./productos");
const productosmock = require("./productosmock");

router.use("/", home);
router.use("/login", login);
router.use("/loginerror", loginerror);
router.use("/logout", logout);
router.use("/register", register);
router.use("/productos",productos)
router.use("/api/productos-test",productosmock)

module.exports = router