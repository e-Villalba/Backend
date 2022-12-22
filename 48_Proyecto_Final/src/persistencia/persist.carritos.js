const CarritoDTO = require("../clases/clsCarrito/CarritoDTO.class")
const config = require("../../conexiones/config.js")

const CarritosDAOMongoDB = require("../clases/clsCarrito/CarritosDAO.mongodb")
//const ProductosDAOFile = require("../clases/clsProducto/ProductosDAO.file")
//const ProductosDAOMem = require("../clases/clsProducto/ProductosDAO.mem")

let cartDAO = null;

const PERSISTENCIA = process.argv.slice(2).toString().trim() || "mongodb"
try {
    switch (PERSISTENCIA) {
        case 'mongodb':
            cartDAO = CarritosDAOMongoDB.getInstanceCarrito()
            break;
        /*case 'file':
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
const CarritoController = {
    async listar(id) {
        try {
            let doc = await cartDAO.listar(id);
            /*let cartDTOs = doc.map(o => {
                return new CarritoDTO(o._id, o.username, o.products, o.estado);
            })*/
            let cartDTOs = new CarritoDTO(doc._id, doc.username, doc.products, doc.estado);
            console.log("cartDTOs",cartDTOs)
            return cartDTOs;
        }
        catch (error) {
            console.log("error listar Cart ID", error)
        }

    },
    async listarAll() {
        try {
            let docs = await cartDAO.listarAll()
                ;
            let cartDTOs = docs.map(o => {
                return new CarritoDTO(o._id, o.username, o.products, o.estado);
            })
            //console.log("listar All",prdDTOs)
            return cartDTOs;
        }
        catch (error) {
            console.log("error listarAll CART", error)
        }

    },
    async listarUser(user,estado) {
        try {
            let doc = await cartDAO.listarUser(user,estado);
            /*let cartDTOs = doc.map(o => {
                return new CarritoDTO(o._id, o.username, o.products, o.estado);
            })*/
            //return cartDTOs;
            return doc
        }
        catch (error) {
            console.log("error listar Cart ID", error)
        }

    },
    async guardar(elem) {
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

    },
    /*async actualizar(title) {
        await prdDAO.actualizar(title);
    },*/
    async actualizar(id, obj) {
        try {
            const view = "producto-result"
            await prdDAO.actualizar(id, obj);
            mensajeResult = "Producto Actuealizado Exitosamente"

            const objReturn = {
                view: view,
                mensajeResult: mensajeResult
            }
            return objReturn
        } catch (error) {
            console.log("error persist.productos.actualizar", error)
        }

    },
 /*   async borrar(id) {
        try {
            const view = "producto-result"
            await prdDAO.borrar(id);
            mensajeResult = "Producto Eliminado Exitosamente"

            const objReturn = {
                view: view,
                mensajeResult: mensajeResult
            }
            return objReturn
        } catch (error) {
            console.log("error persist.productos.eliminar", error)
        }

      
    },
    async borrarAll() {
        await prdDAO.borrarAll();
    }*/
}

module.exports = CarritoController