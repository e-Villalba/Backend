const OrdenDTO = require("../clases/clsOrdenes/OrdenDTO.class")
const config = require("../conexiones/config.js")
const sendSMS = require ('../middleware/twilio.js')

const OrdenDAOMongoDB = require("../clases/clsOrdenes/OrdenDAO.mongodb")

let orderDAO = null;

const PERSISTENCIA = process.argv.slice(3).toString().trim() || "mongodb"
try {
    switch (PERSISTENCIA) {
        case 'mongodb':
            orderDAO = OrdenDAOMongoDB.getInstanceOrden()
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
const OrdenController = {
    async listar(id) {
        try {
            let doc = await orderDAO.listar(id);
            let cartDTOs = new CarritoDTO(doc._id, doc.username, doc.products, doc.estado);
            return cartDTOs;
        }
        catch (error) {
            console.log("error listar Cart ID", error)
        }

    },
    async listarAll() {
        try {
            let docs = await orderDAO.listarAll()
                ;
            let cartDTOs = docs.map(o => {
                return new OrdenDTO(o._id, o.nro_orden, o.username, o.fecha, o.direccion, o.products, o.total, o.estado);
            })
            return cartDTOs;
        }
        catch (error) {
            console.log("error listarAll CART", error)
        }

    },
    async listarUser(user, estado) {
        try {
            let doc = await orderDAO.listarUser(user);
            return doc
        }
        catch (error) {
            console.log("error listar Cart ID", error)
        }

    },
    async crear(username, estado, cartData, prodAdd) {
        try {
            let cart = await cartDAO.listarUser(username, estado);
            if (cart) {
                const products = cart.products
                products.push(prodAdd)
                const id = cart._id
                let doc = cartDAO.actualizarProductoCarrito(cart)
                const data = { ...cartData, mensajeResult: "Producto agregado a carrito en curso" }
                return data
            }
            if (!cart) {
                let date = new Date();
                let fecha = date.toISOString().split('T')[0] + ' ' + date.toISOString().split('T')[1].substring(0, 8);
                const estado = "Abierto"
                const products = []
                const direccion = ""
                const total = 0
                products.push(prodAdd)
                const objCart = {
                    username,
                    fecha,
                    direccion,
                    products,
                    total,
                    estado
                };

                let doc = await cartDAO.agregarCarrito(objCart)

                const data = { ...cartData, mensajeResult: "Producto Agregado Exitosamente Al Carrito" }
                return data
            }
        } catch (error) {
            console.log("error persist.productos.guardar", error)
        }

    },
    async borrar(id) {
        try {
            const view = "producto-result"
            await orderDAO.borrar(id);
            mensajeResult = "Orden Eliminada Exitosamente"
            const objReturn = {
                view: view,
                mensajeResult: mensajeResult
            }
            return objReturn
        } catch (error) {
            console.log("error persist.ordenes.borrar", error)
        }
    },
    async actualizar(id, obj) {
        try {
            await orderDAO.actualizar(id, obj);
            sendSMS()
            mensajeResult = "Orden Confirmada Exitosamente"
            const view = "orderconfresult"
            const objReturn = {
                view: view,
                mensajeResult: mensajeResult
            }
            return objReturn
        } catch (error) {
            console.log("error persist.ordenes.actualizar", error)
        }
    },
}

module.exports = OrdenController