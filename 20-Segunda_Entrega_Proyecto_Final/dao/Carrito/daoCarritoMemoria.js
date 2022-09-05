import contenedorMemoria from "../../contenedores/contenedorMemoria.js"
let carrito = []
class daoCarritoMemoria extends contenedorMemoria {
    constructor() {
        super(carrito)
    }

    async agregarProductos(codCarrito, product) {
        try {
            const arrCart = await super.listarTodos()
            if (arrCart.length === 0) { return ({ "Error": "No hay Carritos en al Array" }) }

            let indexCart = arrCart.findIndex(el => Number(el.codigo) == Number(codCarrito))
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
                return ("Productos Agregados");
            }

            /*arrCart[indexCart].products.push(product)
            await super.actualizar(codCarrito, arrCart[indexCart])
            return "Producto Agregado"*/
        }
        catch (err) {
            throw new Error('Error de escritura', err)
        }
    }

}

export default daoCarritoMemoria;
