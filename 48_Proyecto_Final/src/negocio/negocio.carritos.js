
const CarritoController = require("../persistencia/persist.carritos")
const cartProd = CarritoController;

const sendMail= require ('../middleware/nodemailer.js')
async function obtenercarritos() {
  return await cartProd.listarAll()
}

async function obtenercarritosid(id) {
  return await cartProd.listar(id)
}

async function obtenercarritosuser(user,estado) {
  return await cartProd.listarUser(user,estado)
}

async function postcarritos(username, estado,cartData,prodAdd) {  
  const prod= await cartProd.buscarProductoCarrito(username,estado,prodAdd.id)    
  if(prod==-1)
  {
      return await cartProd.guardar(username, estado,cartData,prodAdd)
  }
  else
  {      
    const data = { title_producto:prodAdd.title, mensajeResult: "Producto ya agregado a carrito, no lo puede agregar nuevamente" }  
    return data
  }
}
async function putcarritos(id,obj) {  
  try{
    const data = await cartProd.actualizar(id,obj);
    if (obj.estado="Cerrado")
    {     
      sendMail("C",data.cartConfirmado)
    }
    return data
  }
  catch(error)
  {
    console.log("Error actualizar carritos",error)
  }
}

async function deleteprodcarritos(idcart,idprod) {  
  return await cartProd.eliminarprodcarrito(idcart,idprod);
}

async function updateprodcarritos(idcart,idprod,cantidad) {  
  return await cartProd.updateprodcarritos(idcart,idprod,cantidad);
}

module.exports = {obtenercarritosuser,obtenercarritosid,postcarritos,putcarritos,deleteprodcarritos,updateprodcarritos}








