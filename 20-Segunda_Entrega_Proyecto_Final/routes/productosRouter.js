
import {Router} from 'express';
import checkAdmin from '../middleware/checkAdmin.js';
const productosRouter = Router()

import  {productosDao} from "../dao/index.js"
//Lista todos los Productos
productosRouter.get("/", (req, res) => {
  productosDao.listarTodos()
    .then(producto =>  res.send(producto))
    .catch(err => console.log(err));
});
//Muestra un Producto por su Id
productosRouter.get("/:id", (req, res) => {
  const {id} = req.params;  
  productosDao.buscarPorCodigo(id)
  .then(producto => res.send(producto))
  .catch(err => console.log(err));
})
const isAdmin=false
/////////////////////////////////////Operaciones solo permitidas para usuario ADMINISTRADOR/////////////////////////////////
//Agrega Productos a la Lista
productosRouter.post('/',(req,res)=>{  
  if(isAdmin)  
  {
    //Ejemplo Objeto Post para Postman
    /*{
        "nombre":"Prod 33",
        "descripcion": "Descrip 33",
        "codigo": "33",
        "foto": "Foto 33",
        "precio": 1.20  
        }*/
    productosDao.crear(req.body)
    .then(producto=>res.status(201).send(producto))
    .catch(err=>console.log(err))
  }
  else
  {
    res.json({ error : -1, descripcion: "ruta /api/productos método POST no autorizado" })
  }
})
//Elimina un Producto Específico
productosRouter.delete("/:id", (req, res) => {
  if(isAdmin)
  {
    const {id} = req.params;  
    const produc = productosDao.eliminar(id);
    res.send("Producto Eliminado");
  }
  else
  {
    res.json({ error : -1, descripcion: "ruta /api/productos método DELETE no autorizado" })
  }

});
//Actualiza un producto Específico
productosRouter.put("/:id", (req, res) => {
  if(isAdmin)
  {
    //Ejemplo Objeto Put para Postman
    /*{
        "nombre":"Prod 33",
        "descripcion": "Descrip 33",
        "codigo": "33",
        "foto": "Foto 33",
        "precio": 1.20  
        }*/
    const {id} = req.params;  
    productosDao.actualizar(id,req.body)
    .then(()=> res.send("Producto Actualizado"))
    .catch(err=>console.log(err));
  }
  else
  {
    res.json({ error : -1, descripcion: "ruta /api/productos método PUT no autorizado" })
  }
});

export {productosRouter}