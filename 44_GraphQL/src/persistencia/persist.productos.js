const ProductoDTO = require("../clases/clsProducto/ProductoDTO.class.js")
const config = require("../../conexiones/config.js")

const ProductosDAOMongoDB = require("../clases/clsProducto/ProductosDAO.mongodb")
const ProductosDAOFile = require("../clases/clsProducto/ProductosDAO.file")
const ProductosDAOMem = require("../clases/clsProducto/ProductosDAO.mem")

let prdDAO = null;

const PERSISTENCIA = process.argv.slice(2).toString().trim() || "mongodb"
try {
    switch (PERSISTENCIA) {
        case 'mongodb':
            prdDAO = ProductosDAOMongoDB.getInstanceProducto()
            break;
        case 'file':
            prdDAO = ProductosDAOFile.getInstanceProducto()
            break;
        case 'memoria':
            prdDAO = ProductosDAOMem.getInstanceProducto()
            break;
        default:
            break;
    }
}
catch (err) { console.log("Error Switch", err) }
const ProductoController = {
    async listar(title) {
        let doc = await prdDAO.listar(title);
        return new ProductoDTO(doc._id, doc.title, doc.price, doc.thumbnail);
    },
    async listarID(_id) {
        try {

            let doc = await prdDAO.listarID(_id);
            if (doc) {
                return new ProductoDTO(doc._id, doc.title, doc.price, doc.thumbnail);
            }
            else {
                return { mensajeResult: "Producto Inexistente" }
            }
        } catch (error) {
            console.log("error persist.productos.listarID", error)
            return { mensajeResult: "error persist.productos.listarID" }
        }

    },
    async listarAll() {
        try {
            let docs = await prdDAO.listarAll()
                ;
            let prdDTOs = docs.map(o => {
                return new ProductoDTO(o.id, o.title, o.price, o.thumbnail);
            })
            return prdDTOs;
        }
        catch (error) {
            console.log("error listarAll", error)
        }

    },
    async guardar(elem) {
        let objReturn = {}
        try {
            const { title, price, thumbnail } = elem;
            const Prod = await prdDAO.listar(title);
            const view = "producto-result"
            if (Prod) {
                objReturn = { mensajeResult: "Producto ya existente, no puede registrar un producto con el nombre de uno ya existente" }
            }
            else {
                objReturn = await prdDAO.guardar(elem);
                objReturn["mensajeResult"] = "Producto Registrado Exitosamente"
                //mensajeResult = "Producto Registrado Exitosamente"
                //return prod
            }
            /*objReturn = {
                view: view,
                mensajeResult: mensajeResult
            }*/
            //console.log("objReturn", objReturn)
            return objReturn

        } catch (error) {
            console.log("error persist.productos.guardar", error)
        }

    },
    async actualizar(elem) {
        let objReturn = {}
        try {
            const { _id, title, price, thumbnail } = elem;
            const Prod = await prdDAO.listarID(_id);
            //const view = "producto-result"
            if (!Prod) {
                objReturn = { mensajeResult: "Producto Inexistente, no se puede realizar la actualización" }
            }
            else {
                objReturn = await prdDAO.actualizar(elem);
                objReturn["mensajeResult"] = "Producto Actualizado Exitosamente"
                //mensajeResult = "Producto actualizado Exitosamente"
            }
            /*const objReturn = {
                //view: view,
                mensajeResult: mensajeResult
            }*/
            return objReturn
        } catch (error) {
            console.log("error persist.productos.guardar", error)
            return { mensajeResult: "error persist.productos.guardar" }
        }

    },
    async borrar(_id) {
        let objReturn = {}
        try {
            const Prod = await prdDAO.listarID(_id);
            //const view = "producto-result"
            if (!Prod) {
                objReturn = { mensajeResult: "Producto Inexistente, no se puede eliminar" }
            }
            else {

                await prdDAO.borrar(_id);
                Prod["mensajeResult"] = "Producto eliminado Exitosamente"
                objReturn = Prod
            }
            /*const objReturn = {
                //view: view,
                mensajeResult: mensajeResult
            }*/
            return objReturn
        } catch (error) {
            console.log("error persist.productos.borrar", error)
            return { mensajeResult: "error persist.productos.borrar" }
        }

    },
    async borrarAll() {
        await prdDAO.borrarAll(_id);
    }
}

module.exports = ProductoController