
const getlogout = require("../persistencia/persist.logout")

async function obtenerLogout(user_id) {
  return await getlogout(user_id);
}

module.exports = obtenerLogout