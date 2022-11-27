
const getloginerror = require("../persistencia/persist.loginerror")

async function obtenerloginerror() {
  return await getloginerror();
}

module.exports = obtenerloginerror