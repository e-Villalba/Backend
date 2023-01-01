const UsuarioController = require("../persistencia/persist.register")
const objUser = UsuarioController;

const sendMail = require('../middleware/nodemailer.js')
async function postregister(obj) {
  const { username, password, password2, email } = obj;
  if (password == password2) {
    const data = await objUser.registrar(obj);
    sendMail("R", obj)
    return data
  }
  else {
    const objReturn = {
      view: "register-result",
      mensajeResult: "Revise las pwds ingresadas, no coinciden"
    }
    return objReturn
  }

}
module.exports = { postregister }



