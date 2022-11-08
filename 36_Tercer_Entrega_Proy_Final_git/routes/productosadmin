const { Router } = require("express");
const Producto = require("../controllers/producto.controller");
const productosadmin = Router();
const { loggerConsola } = require("../logger/logger");

productosadmin.get("/", (req, res) => {
    const { method } = req;
    const userEmail = req.user.email
    const time = new Date().toLocaleString();
    loggerConsola.info(`Ruta '/productosadmin' - metodo: ${method} - time: ${time}`);  
    res.render("products", { 
        user: userEmail,
      });
}
);


module.exports = productosadmin