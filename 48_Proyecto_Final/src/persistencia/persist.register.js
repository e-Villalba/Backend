const bcrypt = require("bcrypt")
require('../../conexiones/connection'); 
const User = require('../../models/User.js'); 

async function getregister() {
    return "register";
  }

async function postregisterpersist(obj) {
    const { username, password,email,apenom } = obj;
    const view="register-result"
    const Usuario = await User.findOne({ username }); 
    let mensajeResult=""
    if (Usuario)
    {
      mensajeResult= "Usuario ya registrado"        
    }
    else
    {
      const hashedPassword =  await bcrypt.hash(password, 8);
      const newUser = new User({
        username,
        password: hashedPassword,
        email,
        apenom
      });
       await newUser.save(); 
       mensajeResult = "Usuario Registrado Exitosamente"
    }
    const objReturn ={
      view: view,
      mensajeResult: mensajeResult
    }
    return objReturn
   
}

module.exports = {getregister,postregisterpersist}
