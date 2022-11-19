
const gethome = require("../persistencia/persist.home")

async function obtenerHome(userid) {
  return await gethome(userid);
}

module.exports = obtenerHome

