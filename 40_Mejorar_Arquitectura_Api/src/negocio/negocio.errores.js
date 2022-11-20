
const {getErrores,postErrores,deleteErrores,putErrores}= require("../persistencia/persist.errores")

async function getError() {
  return await getErrores();
}

async function postError() {
  return await postErrores();
}

async function deleteError() {
  return await deleteErrores();
}

async function putError() {
  return await putErrores();
}

module.exports = {getError,postError,deleteError,putError}