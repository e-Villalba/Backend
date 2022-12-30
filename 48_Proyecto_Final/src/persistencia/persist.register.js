/*const bcrypt = require("bcrypt")
require('../../conexiones/connection'); 
const User = require('../../models/User.js'); 

async function getregister() {
    return "register";
  }

async function postregisterpersist(obj) {
    const { username, password,email,apenom } = obj;
    const view="register-result"
    const Usuario = await User.findOne({ username }); 
    let mensajeResult=""
    if (Usuario)
    {
      mensajeResult= "Usuario ya registrado"        
    }
    else
    {
      const hashedPassword =  await bcrypt.hash(password, 8);
      const newUser = new User({
        username,
        password: hashedPassword,
        email,
        apenom
      });
       await newUser.save(); 
       mensajeResult = "Usuario Registrado Exitosamente"
    }
    const objReturn ={
      view: view,
      mensajeResult: mensajeResult
    }
    return objReturn
   
}

module.exports = {getregister,postregisterpersist}*/
const UsuarioDTO = require("../clases/clsUsuario/UsuarioDTO.class")
const config = require("../../conexiones/config.js")

const UsuariosDAOMongoDB = require("../clases/clsUsuario/UsuarioDAO.mongodb")
/*const ProductosDAOFile = require("../clases/clsProducto/ProductosDAO.file")
const ProductosDAOMem = require("../clases/clsProducto/ProductosDAO.mem")*/

let userDAO = null;

const PERSISTENCIA = process.argv.slice(2).toString().trim() || "mongodb"
try {
    switch (PERSISTENCIA) {
        case 'mongodb':
          userDAO = UsuariosDAOMongoDB.getInstanceUsuario()
            break;
       /* case 'file':
            prdDAO = ProductosDAOFile.getInstanceProducto()
            break;
        case 'memoria':
            prdDAO = ProductosDAOMem.getInstanceProducto()
            break;*/
        default:
            break;
    }
}
catch (err) { console.log("Error Switch", err) }
const UsuarioPersist = {
    async listar(username) {
        try {
            let doc = await userDAO.listar(username);            
            let userDTO = new UsuarioDTO(doc.username, doc.email, doc.apenom);            
            return userDTO;
        }
        catch (error) {
            console.log("error listar user", error)
        }

    },
    /*async guardar(elem) {
        try {
            const { title, price, category, thumbnail } = elem;
            const Prod = await prdDAO.listar(title);
            const view = "producto-result"
            console.log("prod persist", Prod.length)
            if (Prod.length > 0) {
                mensajeResult = "Producto ya existente, no puede registrar un producto con el nombre de uno ya existente"
            }
            else {
                await prdDAO.guardar(elem);
                mensajeResult = "Producto Registrado Exitosamente"
            }
            const objReturn = {
                view: view,
                mensajeResult: mensajeResult
            }
            return objReturn
        } catch (error) {
            console.log("error persist.productos.guardar", error)
        }

    },*/

}

module.exports = UsuarioPersist
