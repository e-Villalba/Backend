const { Router } = require("express");
const  userinfo = Router();
require('../conexiones/connection'); 

const User = require('../models/User.js'); 

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });


userinfo.post("/",upload.single("foto"), (req, res,next) => {
    const { username, password,email,direccion,edad,telefono} = req.body;
   
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
 
   
        sendMail("R",newUser)
   
        res.render("register-result",{mensajeResult:"Usuario Registrado Exitosamente"});
      }
    });
  });

  
  userinfo.get("/", (req, res) => {
    const {user} = req;    
    const userData = {username: user.username ,email:user.email,direccion:user.direccion,edad:user.edad,telefono:user.telefono,foto:user.foto}    
    res.render('user_info', {userData}); 
    });

  module.exports = userinfo