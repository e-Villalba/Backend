const bcrypt = require("bcrypt")
require('../conexiones/connection'); 
const User = require('../models/User.js'); 
const view="register-result"
async function getregister() {
    return "register";
  }

async function postregisterpersist(obj) {
    const { username, password,email } = obj;
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
//export default getinfo;
module.exports = {getregister,postregisterpersist}
