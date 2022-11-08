const { Router } = require("express");
const loginerror = Router();
const {loggerConsola} = require("../logger/logger");
loginerror.get("/", (req, res) => { 
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/login' - con metodo: ${method} - time: ${time}`); 
  res.render('loginerror'); 
});

module.exports = loginerror