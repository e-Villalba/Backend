const OrdenAdminController = require("../persistencia/persist.ordenesadmin")
const ordenesProdAdmin = OrdenAdminController;

async function obtenerordenesadmin() {
  return await ordenesProdAdmin.getView()
}

module.exports = { obtenerordenesadmin }








