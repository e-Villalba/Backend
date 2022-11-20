
const getinfo = require("../persistencia/persist.info")

async function obtenerInfo() {
  return await getinfo();
}

module.exports = obtenerInfo