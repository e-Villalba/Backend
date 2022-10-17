const { Router } = require("express");
const Producto = require("../controllers/producto.controller");
const productos = Router();
productos.get("/", (req, res) => {
    Producto.getAll()
        .then(knexres => {
            res.status(200).json(knexres);
        })
        .catch(err => console.log(err))
}
);

productos.post('/', (req, res) => {
    const { title, price, thumbnail } = req.body;
    const produc = Producto.create(title, price, thumbnail);

    res.redirect('/');
})

module.exports = productos