const express = require('express')
const productosRouter = express.Router()
const Producto = require("../controllers/producto.controller");
const Admin = require("../controllers/administrador.controller")
const ProductoBank = require("../productosBank");

//Declaro variable user y seteo el valor que determina si es admin o no implemento con .isAdmin()
const user = new Admin(true)

//Lista todos los Productos
productosRouter.get("/", (req, res) => {
  const produc = Producto.getAll();
  res.send(produc);
});
//Muestra un Producto por su Id
productosRouter.get("/:id", (req, res) => {
  const {id} = req.params;  
  const produc = Producto.getByID(id);
  res.send(produc);
});
/////////////////////////////////////Operaciones solo permitidas para usuario ADMINISTRADOR/////////////////////////////////
//Agrega Productos a la Lista
productosRouter.post('/',(req,res)=>{  
  if(user.isAdmin())
  {
    const { nombre, descripcion, codigo, foto, precio, stock } = req.body;
    const produc = Producto.create(nombre, descripcion, codigo, foto, precio, stock);
    res.status(201).send(produc);
  }
  else
  {
    res.json({ error : -1, descripcion: "ruta /api/productos método POST no autorizado" })
  }
})
//Elimina un Producto Específico
productosRouter.delete("/:id", (req, res) => {
  if(user.isAdmin())
  {
    const {id} = req.params;  
    const produc = Producto.delete(id);
    res.send(produc);
  }
  else
  {
    res.json({ error : -1, descripcion: "ruta /api/productos método DELETE no autorizado" })
  }

});
//Actualiza un producto Específico
productosRouter.put("/:id", (req, res) => {
  if(user.isAdmin())
  {
    const {id} = req.params;  
    const { nombre, descripcion, codigo, foto, precio, stock  } = req.body;
    const produc = Producto.update(id,nombre, descripcion, codigo, foto, precio, stock );
    res.send(produc);
  }
  else
  {
    res.json({ error : -1, descripcion: "ruta /api/productos método PUT no autorizado" })
  }
});
module.exports = productosRouter