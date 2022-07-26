const express = require('express')
const productosRouter = express.Router()
const Producto = require("../controllers/producto.controller");
const ProductoBank = require("../productosBank");


const listaProductos = []



productosRouter.get('/', (req, res) => {
  console.log("Render del JS")
  res.render('form', {});
})

productosRouter.get("/", (req, res) => {
  const produc = Producto.getAll();
  res.send(produc);
});

productosRouter.post('/',(req,res)=>{  
  const { title, price,thumbnail } = req.body;
  const produc = Producto.create(title, price,thumbnail);
  res.status(201).send(produc);
})
productosRouter.get("/:id", (req, res) => {
  const {id} = req.params;  
  const produc = Producto.getByID(id);
  res.send(produc);
});

productosRouter.delete("/:id", (req, res) => {
  const {id} = req.params;  
  const produc = Producto.delete(id);
  res.send(produc);
});

productosRouter.put("/:id", (req, res) => {
  const {id} = req.params;  
  const { title, price,thumbnail } = req.body;
  const produc = Producto.update(id,title,price,thumbnail);
  res.send(produc);
});


/*productosRouter.post('/',(req,res)=>{
  if(req.body.producto){
    listaProductos.push(req.body.producto)
    res.status(201).json({Agregado:req.body.producto})
  }

  if(!req.body.producto){
    const newProducto = {
      title:req.body.title,
      price:req.body.price,
      thumbnail:req.body.thumbnail
    }
    listaProductos.push(newProducto)
      res.status(201).json({Agregada:newProducto})
  }
}

)*/

module.exports = productosRouter