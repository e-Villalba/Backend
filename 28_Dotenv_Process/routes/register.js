const { Router } = require("express");
const  register = Router();
const bcrypt = require("bcrypt")
require('../conexiones/connection'); 
const User = require('../models/User.js'); 

register.get("/", (req, res) => {  
    res.render('register'); 
  });
  
  register.post("/", (req, res) => {
    const { username, password,email } = req.body;
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