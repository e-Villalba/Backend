
const {getregister,postregisterpersist} = require("../persistencia/persist.register")


async function obtenerregister() {
  return await getregister();
}
async function postregister(obj) {
  return await postregisterpersist(obj);
}


module.exports = {obtenerregister,postregister}


