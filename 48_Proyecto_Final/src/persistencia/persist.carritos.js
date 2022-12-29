const CarritoDTO = require("../clases/clsCarrito/CarritoDTO.class")
const config = require("../../conexiones/config.js")

const CarritosDAOMongoDB = require("../clases/clsCarrito/CarritosDAO.mongodb")
const OrdenesDAOMongoDB = require("../clases/clsOrdenes/OrdenDAO.mongodb")
//const ProductosDAOFile = require("../clases/clsProducto/ProductosDAO.file")
//const ProductosDAOMem = require("../clases/clsProducto/ProductosDAO.mem")

let cartDAO = null;
let orderDAO=null;
const PERSISTENCIA = process.argv.slice(2).toString().trim() || "mongodb"
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
    async listarUser(user, estado) {
        try {
            let doc = await cartDAO.listarUser(user, estado);
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
    async buscarProductoCarrito(user,estado,idprod) {
        try {
            let cart = await cartDAO.listarUser(user, estado);
            const prod = cart.products.findIndex(prod=>prod.id === idprod)              
            return prod
        }
        catch (error) {
            console.log("error Buscar Producto en Cart", error)
        }

    },
    async guardar(username, estado, cartData, prodAdd) {
        
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
            let cart= await cartDAO.actualizar(id, obj);
            mensajeResult = "Carrito Actualizado Exitosamente"
            const view = "carritoconfresult"
            const objReturn = {
                view: view,
                mensajeResult: mensajeResult,
                cartConfirmado:""
            }
            console.log("Actualizar Carrito - Estado",obj.estado)
            if(obj.estado=="Cerrado")
            {
                console.log("Cart actulizar CArt PERSIST OBJ",obj)
                let cartConfirmado = await cartDAO.listar(id.trim());
                let date = new Date();
                let fecha = date.toISOString().split('T')[0] + ' ' +date.toISOString().split('T')[1].substring(0,8);
                let nro_orden= await orderDAO.cantidadOrdenes()
                console.log("nro_orden",nro_orden)
                const orderData={nro_orden:nro_orden+=1,
                    username:cartConfirmado.username,
                    fecha:fecha,
                    direccion:cartConfirmado.direccion,
                    products:cartConfirmado.products,
                    total:cartConfirmado.total,
                    estado: "Generada"}
                console.log("Orden Creada",orderData)
                objReturn.cartConfirmado=cartConfirmado
                orderDAO.crearOrden(orderData)
            }
            return objReturn
        } catch (error) {
            console.log("error persist.carritos.actualizar", error)
        }

    },
    async eliminarprodcarrito(idCart,idprod)
    {
        try {
            //const estado = "Abierto"
            let cart = await cartDAO.listar(idCart);
            if (cart) {
                //console.log("Productos del Carrito Ahora ",cart.products)                
                const products = cart.products
                //products.push(_id)
                const produc= products.splice(products.findIndex(prod=>prod.id === idprod),1)
                //products.push(prodAdd)
                const id = cart._id
                //let doc = cartDAO.agregarProductoCarrito(cart)
                //const data = { ...cartData, mensajeResult: "Producto agregado a carrito en curso" }   
                cartDAO.actualizarProductoCarrito(cart) 
                console.log("persist eliminar",products)
                return produc            
            }
            if (!cart) {
                //console.log("register FindOne !user")
                const estado = "Abierto"
                const products = []
                //products.push(_id)
                products.push(prodAdd)
                //console.log("Username",username)
                //console.log ("Array productos",products)

                const objCart = {
                    username,
                    products,
                    estado,
                };

                let doc = cartDAO.agregarCarrito(objCart)

                const data = { ...cartData, mensajeResult: "Producto Agregado Exitosamente Al Carrito" }
                return data
                //res.render("carritoaddresult", { data });
            }
        } catch (error) {
            console.log("error persist.productos.guardar", error)
        }


    },
    async updateprodcarritos(idCart,idprod,cantidad)
    {
        try {
            console.log(idCart)
            //const estado = "Abierto"
            let cart = await cartDAO.listar(idCart);
            if (cart) {
                console.log("Productos del Carrito Ahora ",cart.products)                
                const products = cart.products
                //products.push(_id)
                const prodIndex= products.findIndex(prod=>parseInt(prod.id) === parseInt(idprod))
                //console.log("Productos prodIndex",prodIndex)
                //console.log("Productos products[prodIndex].cantidad ANTES",products[prodIndex].cantidad)
                products[prodIndex].cantidad=cantidad
                products[prodIndex].valor=products[prodIndex].price*cantidad
                console.log("Productos products[prodIndex].cantidad DESPUES",products[prodIndex].cantidad)
                //products.push(prodAdd)
                //const id = cart._id
                //let doc = cartDAO.agregarProductoCarrito(cart)
                //const data = { ...cartData, mensajeResult: "Producto agregado a carrito en curso" }   
                console.log("Cart Antes de actualizarProductoCarrito",cart)
                cartDAO.actualizarProductoCarrito(cart) 
                //console.log("persist eliminar",products)
                return  products[prodIndex]            
            }
            if (!cart) {
                //console.log("register FindOne !user")
                const estado = "Abierto"
                const products = []
                //products.push(_id)
                products.push(prodAdd)
                //console.log("Username",username)
                //console.log ("Array productos",products)

                const objCart = {
                    username,
                    products,
                    estado,
                };

                let doc = cartDAO.agregarCarrito(objCart)

                const data = { ...cartData, mensajeResult: "Producto Agregado Exitosamente Al Carrito" }
                return data
                //res.render("carritoaddresult", { data });
            }
        } catch (error) {
            console.log("error persist.productos.guardar", error)
        }


    }
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