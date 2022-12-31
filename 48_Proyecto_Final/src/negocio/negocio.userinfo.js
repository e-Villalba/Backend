
//const {getregister,postregisterpersist} = require("../persistencia/persist.register")

const UsuarioController = require("../persistencia/persist.userinfo")
const objUser = UsuarioController;

const sendMail= require ('../../middleware/nodemailer.js')

async function obteneruserinfo(username) {
  return await  objUser.listar(username);
}
/*async function postregister(obj) {
  const { username, password,password2,email } = obj;
  if(password==password2)
  {
    const data = await postregisterpersist(obj);
    sendMail("R",obj)
    return data
  }
  else
  {
    const objReturn ={
      view: "register-result",
      mensajeResult: "Revise las pwds ingresadas, no coinciden"
    }
    return objReturn
  }
  
}*/

module.exports = {obteneruserinfo}
//module.exports = {obtenerregister,postregister}


