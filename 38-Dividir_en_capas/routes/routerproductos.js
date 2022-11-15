/*const { Router } = require("express");
const Producto = require("../controllers/producto.controller");
const productos = Router();
const {loggerConsola} = require("../logger/logger");
const {loggerError} = require("../logger/logger");
productos.get("/", (req, res) => {
    const { method } = req;
    const time = new Date().toLocaleString();
    Producto.getAll()
        .then(knexres => {
            loggerConsola.info(`Ruta '/productos' - metodo: ${method} - time: ${time}`);
            res.status(200).json(knexres);
        })
        .catch(err => {          
            loggerError.error(`Ruta '/productos - metodo: ${method} - time: ${time} - error: ${err}`);
            console.log(err)
        })
}
);

productos.post('/', (req, res) => {
    const { method } = req;
    const time = new Date().toLocaleString();
    const { title, price, thumbnail } = req.body;
    try{
    const produc = Producto.create(title, price, thumbnail);
    loggerConsola.info(`Ruta '/productos' - con metodo: ${method} - time: ${time}`);

    res.redirect('/');
    }
    catch (err)
    {
        loggerError.error(`Ruta '/productos' - con metodo: ${method} - time: ${time} - error: ${err}`);
    }
})

module.exports = productos*/
const { Router } = require("express");
const routerproductos = Router();

const {getDatosControllerProductos,postDatosControllerProductos} = require("../controllers/productos.controller")

routerproductos.get("/", getDatosControllerProductos) 
routerproductos.post("/", postDatosControllerProductos) 

module.exports = routerproductos;