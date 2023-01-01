require('../conexiones/connection'); 

const User = require('../models/User.js'); 

async function gethome(userid) {
  const datosUser = await User.findById(userid); // En la BD Mongo se busca el usuario por el ID
  const userEmail = datosUser.email;  //Se obtiene el email    
  return userEmail;
  }
module.exports = gethome

