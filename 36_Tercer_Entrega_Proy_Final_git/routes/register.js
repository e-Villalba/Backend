const { Router } = require("express");
const  register = Router();
const bcrypt = require("bcrypt")
require('../conexiones/connection'); 
const sendMail= require ('../middleware/nodemailer.js')
const User = require('../models/User.js'); 
const {loggerConsola} = require("../logger/logger");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

register.get("/", (req, res) => {
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/register' - con metodo: ${method} - time: ${time}`);  
  res.render('register'); 
});

  register.post("/",upload.single("foto"), (req, res,next) => {
    const { username, password,email,direccion,edad,telefono} = req.body;
    const { method } = req;
    const time = new Date().toLocaleString();
    loggerConsola.info(`Ruta '/register' - con metodo: ${method} - time: ${time}`);
    const foto = req.file.filename;
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
          direccion,
          edad,
          telefono,
          foto,
        });
        
        await newUser.save();
 
        //console.log("sendmail 1")
        sendMail("R",newUser)
        //console.log("Sendmail newuser",newUser)
        //console.log("sendmail 2")
        res.render("register-result",{mensajeResult:"Usuario Registrado Exitosamente"});
      }
    });
  });

  /*userInfo.get("/", auth, async (req, res) => {  

    const userData = await usersDao.getById(req.user._id); //busco el usuario en la base de datos, y guardo los datos en una variable el req.user_id es el id del usuario que se guarda en la session  /
    res.render('user', {userData}); //si no hay error, renderizo la vista logout y le paso el parametro user  
    
  });*/

  register.get("/:user", (req, res) => {
    const {user} = req.params;  
    //console.log ("title router",title)
    /*Producto.getByTitle(title)
    .then(knexres => {
        res.status(200).json(knexres);
        //res.render("productos",res.status(200).json(knexres))*/
    const userData = {username: "pepe10",email:"efv@mail",direccion:"gral paz 861",edad:"46",telefono:"456789"}    
    res.render('user_info', {userData}); //si no hay error, renderizo la vista logout y le paso el parametro user  
    //})
    //.catch(err => console.log(err))    
  });

  module.exports = register