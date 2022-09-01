import contenedorMongo from "../../contenedores/contenedorMongo.js"

class daoProductoMongo extends contenedorMongo{
    constructor(){
        super("Producto")
    }

}

export default daoProductoMongo;