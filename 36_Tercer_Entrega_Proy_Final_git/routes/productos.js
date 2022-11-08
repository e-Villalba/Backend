const { Router } = require("express");
const Producto = require("../controllers/producto.controller");
const productos = Router();
const { loggerConsola } = require("../logger/logger");
const { loggerError } = require("../logger/logger");

require('dotenv').config()
productos.get("/", (req, res) => {
    const { method } = req;
    const time = new Date().toLocaleString();
    console.log("llamo a productos")
    Producto.getAll()
        .then(knexres => {
            loggerConsola.info(`Ruta '/productos' - metodo: ${method} - time: ${time}`);
            res.status(200).json(knexres);
        })
        .catch(err => {
            loggerError.error(`Ruta '/productos - metodo: ${method} - time: ${time} - error: ${err}`);
            //console.log(err)

        })

}
);



productos.get("/:title", (req, res) => {
    const { title } = req.params;
    const { method } = req;
    const time = new Date().toLocaleString();
    const products = Producto.getByTitle(title)
        .then(knexres => {
            loggerConsola.info(`Ruta '/productos' - metodo: ${method} - time: ${time}`);            
            const product = res.status(200).json(knexres);

        })
        .catch(err => {
            loggerError.error(`Ruta '/productos - metodo: ${method} - time: ${time} - error: ${err}`);
            console.log(err)
        }
        )

});


productos.post('/', (req, res) => {
    const { method } = req;
    const time = new Date().toLocaleString();
    const { title, price, thumbnail } = req.body;
    try {
        loggerConsola.info(`Ruta '/productos' - con metodo: ${method} - time: ${time}`);
        const produc = Producto.create({ title, price, thumbnail });
        res.redirect('/productosadmin');
    }
    catch (err) {
        loggerError.error(`Ruta '/productos' - con metodo: ${method} - time: ${time} - error: ${err}`);
    }
})

module.exports = productos