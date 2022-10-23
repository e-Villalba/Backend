const { Router } = require("express");
const logout = Router();
const {loggerConsola} = require("../logger/logger");

require('../conexiones/connection'); 
const User = require('../models/User.js'); 

logout.get("/", async (req, res) => {
    const datosUsuario = await User.findById(req.user._id); 
    const user = datosUsuario.username;  
    req.session.destroy((err) => { 
      if (!err) {
        const { method } = req;
        const time = new Date().toLocaleString();
        loggerConsola.info(`Ruta '/logout' - con metodo: ${method} - time: ${time}`)
        res.render('logout', {user}); 
      }
      else {
        res.send("Error");
      }
    });
  
});

module.exports = logout