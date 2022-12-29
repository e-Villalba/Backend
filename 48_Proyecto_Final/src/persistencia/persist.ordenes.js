const OrdenDTO = require("../clases/clsOrdenes/OrdenDTO.class")
const config = require("../../conexiones/config.js")

const OrdenDAOMongoDB = require("../clases/clsOrdenes/OrdenDAO.mongodb")
//const ProductosDAOFile = require("../clases/clsProducto/ProductosDAO.file")
//const ProductosDAOMem = require("../clases/clsProducto/ProductosDAO.mem")

let orderDAO = null;

const PERSISTENCIA = process.argv.slice(2).toString().trim() || "mongodb"
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
            /*let cartDTOs = doc.map(o => {
                return new CarritoDTO(o._id, o.username, o.products, o.estado);
            })*/
            let cartDTOs = new CarritoDTO(doc._id, doc.username, doc.products, doc.estado);
            //console.log("cartDTOs", cartDTOs)
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
                return new CarritoDTO(o._id, o.username, o.products, o.estado);
            })
            //console.log("listar All",prdDTOs)
            return cartDTOs;
        }
        catch (error) {
            console.log("error listarAll CART", error)
        }

    },
    async listarUser(user, estado) {
        try {
            let doc = await orderDAO.listarUser(user, estado);
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
    async crear(username, estado, cartData, prodAdd) {
        
        try {
            //const estado = "Abierto"
            let cart = await cartDAO.listarUser(username, estado);
            if (cart) {
                //console.log("Productos del Carrito Ahora ",cart.products)                
                const products = cart.products
                //products.push(_id)
                products.push(prodAdd)
                const id = cart._id
                let doc = cartDAO.actualizarProductoCarrito(cart)
                const data = { ...cartData, mensajeResult: "Producto agregado a carrito en curso" }    
                return data            
            }
            if (!cart) {
                let date = new Date();
                let fecha = date.toISOString().split('T')[0] + ' ' +date.toISOString().split('T')[1].substring(0,8);
                //console.log("register FindOne !CART")
                const estado = "Abierto"
                const products = []
                const direccion=""
                const total=0
                //products.push(_id)
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
                //res.render("carritoaddresult", { data });
            }
        } catch (error) {
            console.log("error persist.productos.guardar", error)
        }

    },
    /*async actualizar(title) {
        await prdDAO.actualizar(title);
    },*/
    async actualizar(id, obj) {
        try {            
            await orderDAO.actualizar(id, obj);
            mensajeResult = "Carrito Actuealizado Exitosamente"
            const view = "carritoconfresult"
            const objReturn = {
                view: view,
                mensajeResult: mensajeResult
            }
            return objReturn
        } catch (error) {
            console.log("error persist.carritos.actualizar", error)
        }

    },

 
}

module.exports = OrdenController