const { Router } = require("express");
const home = Router();

const auth = require('../middleware/auth.js');

require('../conexiones/connection'); 
const User = require('../models/User.js'); 

home.get("/", auth, async (req, res) => {
    const datosUser = await User.findById(req.user._id); // En la BD Mongo se busca el usuario por el ID
    const userEmail = datosUser.email;  //Se obtiene el email
    res.render("form", { //Se muestra la página principal y se pasa el mail del usuario tal lo solicitado en el desafío
      user: userEmail,
    });
  });
  
module.exports = home