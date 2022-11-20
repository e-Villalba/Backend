//require('../conexiones/connection'); 
const User = require('../../models/User.js'); 

 async function getlogout(user_id) {
    console.log("getlogout")
    const datosUsuario = await User.findById(user_id); 
    const user = datosUsuario.username;  
    return user;
   
  }


module.exports = getlogout