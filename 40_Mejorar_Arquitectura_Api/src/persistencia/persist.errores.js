
async function getErrores() {
    return "/";
  }

async function postErrores() {
  const msgerror={ error : -2, descripcion: `ruta POST inexistente` }
   return msgerror;
  }

async function deleteErrores() {
  const msgerror={ error : -2, descripcion: `ruta DELETE inexistente` }
  return msgerror;
  }

async function putErrores() {
  const msgerror={ error : -2, descripcion: `ruta PUT inexistente` }
  return msgerror;
}
  

//export default getinfo;
module.exports = {getErrores,postErrores,deleteErrores,putErrores}