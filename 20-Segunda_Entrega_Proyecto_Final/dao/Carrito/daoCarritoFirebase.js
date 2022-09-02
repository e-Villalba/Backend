import contenedorFirebase from "../../contenedores/contenedorFirebase.js"

class daoCarritoFirebase extends contenedorFirebase {
    constructor() {
        super("Carrito")
    }
    async agregarProductos(codCarrito, product) {
        //Ejemplo Array Productos Post para Postman
        //[7,8]
        try {

            const arrCart = await super.listarTodos()
            if (arrCart.length === 0) { return ({ "Error": "No hay Carritos" }) }
            let indexCart = arrCart.findIndex(el => el.codigo == codCarrito)

            if (indexCart == -1) {
                return ({ error: 'Carrito no encontrado' })
            }

            if (typeof arrCart[indexCart].productos === 'undefined') {
                arrCart[indexCart].productos = []
            }

            if (indexCart >= 0) {
                for (const prod of product) {
                    arrCart[indexCart].productos.push(prod)
                }
                await super.actualizar(codCarrito, arrCart[indexCart])
                return ("Producto Agregado");
            }
        }
        catch (err) {
            throw new Error('Error de escritura', err)
        }
    }
    async findProductosCarrito(codCarrito, codProducto) {
        try {
            const arrCart = await super.listarTodos()

            if (arrCart.length === 0) { return ({ "Error": "No hay Carritos" }) }

            let indexCart = arrCart.findIndex(el => el.codigo == codCarrito)
            //console.log("indexCart", indexCart)
            if (indexCart == -1) {
                return ({ error: 'Carrito no encontrado' })
            }

            if (indexCart >= 0) {
                if (typeof arrCart[indexCart].productos === 'undefined') {
                    return []
                }
                else {
                    return arrCart[indexCart].productos
                }
            }

        }
        catch (err) {
            throw new Error('Error de escritura', err)
        }
    };
    async eliminarProducto(codCarrito,codProducto) {
        try {
            const arrCart = await super.listarTodos()
            if (arrCart.length === 0) { return ({ "Error": "No hay Carritos" }) }

            let indexCart = arrCart.findIndex(el => el.codigo == codCarrito)            
            if (indexCart == -1) {
                return ({ error: 'Carrito no encontrado' })
            }
            //console.log("indexCart",indexCart)
            const cartUpdated =  arrCart[indexCart]
            if (indexCart >= 0) {
                const productoBuscado = (element) => element == codProducto;
                const prodIndex = arrCart[indexCart].productos.findIndex(productoBuscado);
                //console.log("prodIndex",prodIndex)

                if (prodIndex >= 0) {
                    const newProductos = arrCart[indexCart].productos.filter((item) => item != codProducto)
                    cartUpdated.productos=newProductos                    
                    super.actualizar(codCarrito,cartUpdated)
                    return "Producto eliminado del Carrito"
                }
            }

        }
        catch (err) {
            throw new Error('Error de escritura', err)
        }
    };
}

export default daoCarritoFirebase;