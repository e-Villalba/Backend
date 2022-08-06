const express = require('express')
const carritosRouter = express.Router()
const Carrito = require("../controllers/carrito.controller");
const CarritoBank = require("../carritosBank");


const listaCarritos = []

carritosRouter.get("/", (req, res) => {
  const carrito = Carrito.getAll();
  res.send(carrito);
});

carritosRouter.post('/',(req,res)=>{   
  const productos = req.body;    
  const carrito = Carrito.create();
  res.status(201).json(carrito);
})

carritosRouter.post('/:id/productos',(req,res)=>{   
  const productos = req.body;    
  const {id} = req.params;  
  const carrito = Carrito.addProductos(id,productos);
  res.status(201).json(carrito);
})

carritosRouter.get("/:id", (req, res) => {
  const {id} = req.params;  
  const carrito = Carrito.getByID(id);
  res.status(201).json(carrito);
});

carritosRouter.get("/:id/productos", (req, res) => {
  const {id} = req.params;  
  const carrito = Carrito.getProductosByID(id);
  res.status(201).json(carrito);
});

//Elimina un Carrito
carritosRouter.delete("/:id", (req, res) => {
  const {id} = req.params;  
  const carrito = Carrito.delete(id);
  res.status(201).json(carrito);
});
//Elimina un Producto de un Carrito
carritosRouter.delete("/:id/productos/:id_prod", (req, res) => {
  const id = req.params.id;  
  const id_prod = req.params.id_prod;  
  const carrito = Carrito.deleteProductoCarrito(id,id_prod);
  res.status(201).json(carrito);
});


carritosRouter.put("/:id", (req, res) => {
  const {id} = req.params;  
  const { title, price,thumbnail } = req.body;
  const carrito = Carrito.update(id,title,price,thumbnail);
  res.send(carrito);
});




module.exports = carritosRouter