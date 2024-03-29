const { Router } = require("express");
const  register = Router();
const bcrypt = require("bcrypt")
require('../conexiones/connection'); 
const User = require('../models/User.js'); 
const {loggerConsola} = require("../logger/logger");

register.get("/", (req, res) => {  
    const { method } = req;
    const time = new Date().toLocaleString();
    loggerConsola.info(`Ruta '/register' - con metodo: ${method} - time: ${time}`);
    res.render('register'); 
  });
  
  register.post("/", (req, res) => {
    const { username, password,email } = req.body;
    const { method } = req;
    const time = new Date().toLocaleString();
    loggerConsola.info(`Ruta '/register' - con metodo: ${method} - time: ${time}`);
    User.findOne({ username }, async (err, user) => {
      if (err) 
      {
        //console.log("register FindOne Error")
        res.render("register-result",{mensajeResult:`Error de Registro: ${err}`});        
      }
      if (user) 
      {
        //console.log("register FindOne Usuairo Encontrado")
        res.render("register-result",{mensajeResult:"Usuario ya registrado"});
      }
      if (!user) {
        //console.log("register FindOne !user")
        const hashedPassword = await bcrypt.hash(password, 8);
        const newUser = new User({
          username,
          password: hashedPassword,
          email,
        });
        await newUser.save();
        res.render("register-result",{mensajeResult:"Usuario Registrado Exitosamente"});
      }
    });
  });

  module.exports = register