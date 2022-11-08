const { Router } = require("express");
const Producto = require("../controllers/producto.controller");
const productos = Router();
const { loggerConsola } = require("../logger/logger");
const { loggerError } = require("../logger/logger");

require('dotenv').config()
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
            //console.log(err)

        })

}
);

productos.get("/admin", (req, res) => {
    const { method } = req;
    const userEmail = req.user.email
    const time = new Date().toLocaleString();
    loggerConsola.info(`Ruta '/productos/admin' - metodo: ${method} - time: ${time}`);
    res.render("products", { //Se muestra la página principal y se pasa el mail del usuario tal lo solicitado en el desafío
        user: userEmail,
      });
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
        res.redirect('/productos/admin');
    }
    catch (err) {
        loggerError.error(`Ruta '/productos' - con metodo: ${method} - time: ${time} - error: ${err}`);
    }
})

module.exports = productos