require('../conexiones/connection'); 
const User = require('../models/User.js'); 

async function gethome(userid) {
  const datosUser = await User.findById(userid); // En la BD Mongo se busca el usuario por el ID
  const userEmail = datosUser.email;  //Se obtiene el email    
  return userEmail;
  }

//export default getinfo;
module.exports = gethome

/*
const auth = require('../middleware/auth.js');
const {loggerConsola} = require("../logger/logger");

require('../conexiones/connection'); 
const User = require('../models/User.js'); 

home.get("/", auth, async (req, res) => {
    const { method } = req;
    const time = new Date().toLocaleString();
    const datosUser = await User.findById(req.user._id); // En la BD Mongo se busca el usuario por el ID
    const userEmail = datosUser.email;  //Se obtiene el email    
    loggerConsola.info(`Ruta '/Home' - con metodo: ${method} - time: ${time}`);
    res.render("form", { //Se muestra la página principal y se pasa el mail del usuario tal lo solicitado en el desafío
      user: userEmail,
    });
  });*/