
const ProductoAdminController = require("../persistencia/persist.productosadmin")
const objProdAdmin = ProductoAdminController;

async function obtenerproductosadmin() {
  return await objProdAdmin.getView()
}

module.exports = { obtenerproductosadmin }








