const ProductoController = require("../persistencia/persist.productos")
const objProd = ProductoController;

async function obtenerproductos() {
  return await objProd.listarAll()
}

async function obtenerproductostitle(title) {
  return await objProd.listar(title)
}

async function obtenerproductoscategory(category) {
  return await objProd.listarcategory(category)
}

async function postproductos(obj) {
  const doc = await objProd.listar(obj.title)
  if (doc.length == 0) {
    return await objProd.guardar(obj);
  }
  else {
    const objReturn = {
      view: "producto-result",
      mensajeResult: "Producto ya existente, no puede agregar un nuevo Producto con el mismo nombre de uno ya registrado"
    }
    return objReturn
  }
}
async function putproductos(id, obj) {
  return await objProd.actualizar(id, obj);
}

async function deleteproductos(id) {
  return await objProd.borrar(id);
}

module.exports = { obtenerproductos, obtenerproductostitle, obtenerproductoscategory, postproductos, putproductos, deleteproductos }








