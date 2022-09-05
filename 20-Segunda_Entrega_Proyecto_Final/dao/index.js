let productosDao;
let carritosDao;
//Firebase
import daoCarritoFirebase from "./Carrito/daoCarritoFirebase.js"
import daoProductoFirebase from "./Producto/daoProductoFirebase.js"
//Mongo
import daoCarritoMongo from "./Carrito/daoCarritoMongo.js"
import daoProductoMongo from "./Producto/daoProductoMongo.js"
//Memoria
import daoCarritoMemoria from "./Carrito/daoCarritoMemoria.js"
import daoProductoMemoria from "./Producto/daoProductoMemoria.js"
//Archivo
import daoCarritoArchivo from "./Carrito/daoCarritoArchivo.js"
import daoProductoArchivo from "./Producto/daoProductoArchivo.js"

const pers="memoria"
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
    case "memoria":    
        productosDao= new daoProductoMemoria();
        carritosDao = new daoCarritoMemoria();
        break;
    case "archivo":    
        productosDao= new daoProductoArchivo();
        carritosDao = new daoCarritoArchivo();
        break;        
    }

export {productosDao,carritosDao}