
const UsuarioController = require("../persistencia/persist.userinfo")
const objUser = UsuarioController;

const sendMail = require('../middleware/nodemailer.js')

async function obteneruserinfo(username) {
  return await objUser.listar(username);
}

module.exports = { obteneruserinfo }



