const { Router } = require("express");
const login = Router();

const passport = require("../middleware/passport.js");
require('../conexiones/connection'); 

const {loggerConsola} = require("../logger/logger");

login.post("/", passport.authenticate("local", { failureRedirect: "/loginerror" }),
  (req, res) => {
    //console.log ("user req",req.body.user)
    const { method } = req;
    const time = new Date().toLocaleString();
    loggerConsola.info(`Ruta '/login' - con metodo: ${method} - time: ${time}`);
    res.redirect("/");
  }
);

module.exports = login;