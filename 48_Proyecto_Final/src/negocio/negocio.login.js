
const getlogin = require("../persistencia/persist.login")

async function obtenerLogin() {
  return await getlogin();
}

module.exports = obtenerLogin