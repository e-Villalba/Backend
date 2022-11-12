const { Router } = require("express");
const { json } = require("express");
const { faker } = require('@faker-js/faker')
const productosmock = Router();

productosmock.get("/", (req, res) => {
    const cant = req.query.cantidad || 5
    let id = 0;
    const productosTest = []
    for (let i = 0; i < cant; i++) {
      productosTest.push({
        id: ++id,
        title: faker.commerce.productName(),
        price: faker.commerce.price(1000, 2000, 0, '$'),
        thumbnail: faker.image.imageUrl()
      })
    }
    res.status(200).send(productosTest)
    }
  );

  module.exports = productosmock