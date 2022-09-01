let productosDao;
let carritosDao;
import daoCarritoFirebase from "./Carrito/daoCarritoFirebase.js"
import daoProductoFirebase from "./Producto/daoProductoFirebase.js"
import daoCarritoMongo from "./Carrito/daoCarritoMongo.js"
import daoProductoMongo from "./Producto/daoProductoMongo.js"

const pers="mongo"
switch(pers)
{
    case "firebase":
        productosDao= new daoProductoFirebase();
        carritosDao = new daoCarritoFirebase();
        break;
    case "mongo":    
        productosDao= new daoProductoMongo();
        carritosDao = new daoCarritoMongo();
        break;
}

export {productosDao,carritosDao}