const CarritoDTO = require("../clases/clsCarrito/CarritoDTO.class")
const config = require("../conexiones/config.js")

const CarritosDAOMongoDB = require("../clases/clsCarrito/CarritosDAO.mongodb")
const OrdenesDAOMongoDB = require("../clases/clsOrdenes/OrdenDAO.mongodb")
//const ProductosDAOFile = require("../clases/clsProducto/ProductosDAO.file")
//const ProductosDAOMem = require("../clases/clsProducto/ProductosDAO.mem")

let cartDAO = null;
let orderDAO = null;
const PERSISTENCIA = process.argv.slice(3).toString().trim() || "mongodb"
try {
    switch (PERSISTENCIA) {
        case 'mongodb':
            cartDAO = CarritosDAOMongoDB.getInstanceCarrito()
            orderDAO = OrdenesDAOMongoDB.getInstanceOrden()
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
            let cartDTOs = new CarritoDTO(doc._id, doc.username, doc.products, doc.estado);
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
            return cartDTOs;
        }
        catch (error) {
            console.log("error listarAll CART", error)
        }

    },
    async listarUser(user, estado) {
        try {
            let doc = await cartDAO.listarUser(user, estado);
            return doc
        }
        catch (error) {
            console.log("error listar Cart ID", error)
        }

    },
    async buscarProductoCarrito(user, estado, idprod) {
        try {
            let cart = await cartDAO.listarUser(user, estado);
            let prod
            if (cart && cart.products.length > 0) {
                prod = cart.products.findIndex(prod => prod.id.trim() === idprod.trim())
            }
            else {
                prod = -1
            }
            return prod
        }
        catch (error) {
            console.log("error Buscar Producto en Cart", error)
        }

    },
    async guardar(username, estado, cartData, prodAdd) {
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
    async actualizar(id, obj) {
        try {
            let cart = await cartDAO.actualizar(id, obj);
            mensajeResult = "Carrito Actualizado Exitosamente"
            const view = "carritoconfresult"
            const objReturn = {
                view: view,
                mensajeResult: mensajeResult,
                cartConfirmado: ""
            }            
            if (obj.estado == "Cerrado") {
                let cartConfirmado = await cartDAO.listar(id.trim());
                let date = new Date();
                let fecha = date.toISOString().split('T')[0] + ' ' + date.toISOString().split('T')[1].substring(0, 8);
                let nro_orden = await orderDAO.cantidadOrdenes()             
                const orderData = {
                    nro_orden: nro_orden += 1,
                    username: cartConfirmado.username,
                    fecha: fecha,
                    direccion: cartConfirmado.direccion,
                    products: cartConfirmado.products,
                    total: cartConfirmado.total,
                    estado: "Generada"
                }                
                objReturn.cartConfirmado = cartConfirmado
                orderDAO.crearOrden(orderData)
            }
            return objReturn
        } catch (error) {
            console.log("error persist.carritos.actualizar", error)
        }

    },
    async eliminarprodcarrito(idCart, idprod) {
        try {
            let cart = await cartDAO.listar(idCart);
            if (cart) {
                const products = cart.products
                const produc = products.splice(products.findIndex(prod => prod.id === idprod), 1)
                const id = cart._id
                cartDAO.actualizarProductoCarrito(cart)                
                return produc
            }
            if (!cart) {
                const estado = "Abierto"
                const products = []
                products.push(prodAdd)
                const objCart = {
                    username,
                    products,
                    estado,
                };

                let doc = cartDAO.agregarCarrito(objCart)

                const data = { ...cartData, mensajeResult: "Producto Agregado Exitosamente Al Carrito" }
                return data
            }
        } catch (error) {
            console.log("error persist.productos.guardar", error)
        }


    },
    async updateprodcarritos(idCart, idprod, cantidad) {
        try {
            let cart = await cartDAO.listar(idCart);
            if (cart) {
                const products = cart.products
                const prodIndex = products.findIndex(prod => prod.id.trim() === idprod.trim())
                products[prodIndex].cantidad = cantidad
                products[prodIndex].valor = products[prodIndex].price * cantidad
                cartDAO.actualizarProductoCarrito(cart)
                return products[prodIndex]
            }
            if (!cart) {
                const estado = "Abierto"
                const products = []
                products.push(prodAdd)

                const objCart = {
                    username,
                    products,
                    estado,
                };

                let doc = cartDAO.agregarCarrito(objCart)

                const data = { ...cartData, mensajeResult: "Producto Agregado Exitosamente Al Carrito" }
                return data

            }
        } catch (error) {
            console.log("error persist.productos.guardar", error)
        }
    }
}

module.exports = CarritoController