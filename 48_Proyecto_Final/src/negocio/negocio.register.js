
const {getregister,postregisterpersist} = require("../persistencia/persist.register")
const sendMail= require ('../../middleware/nodemailer.js')

async function obtenerregister() {
  return await getregister();
}
async function postregister(obj) {
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
  
}


module.exports = {obtenerregister,postregister}


