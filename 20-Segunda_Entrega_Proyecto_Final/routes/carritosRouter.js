import {Router} from 'express';

const carritosRouter = Router()

import  {carritosDao} from "../dao/index.js"



const listaCarritos = []

carritosRouter.get("/", (req, res) => {
  carritosDao.listarTodos()
    .then(carrito =>  res.send(carrito))
    .catch(err => console.log(err));
});
//Crea un Carrito
carritosRouter.post('/',(req,res)=>{
   //Ejemplo Objeto Post para Postman
    /*{
        "codigo": "3",
        "timestamp":"2022-09-01",
        "productos":[]
    }*/   
  carritosDao.crear(req.body)
  .then(carrito=>res.status(201).send(carrito))
  .catch(err=>console.log(err))
})

//Agrega Productos a Carrito Existente
carritosRouter.post('/:id/productos',(req,res)=>{   
  const productos = req.body;    
  const {id} = req.params;  
  carritosDao.agregarProductos(id,productos)
  .then(carrito=>res.status(201).json(carrito))
  .catch(err=>console.log(err))
})

//Obtiene un Carrito por su Codigo.
carritosRouter.get("/:id", (req, res) => {
  const {id} = req.params;  
  carritosDao.buscarPorCodigo(id)
  .then(carrito => res.send(carrito))
  .catch(err => console.log(err));
});
//Obtiene los Productos de un Carrito
carritosRouter.get("/:id/productos", (req, res) => {
  const {id} = req.params;  
  carritosDao.findProductosCarrito(id)
  .then(prodsCarrito => res.status(201).json(prodsCarrito))
  .catch(err => console.log(err));
});

//Elimina un Carrito
carritosRouter.delete("/:id", (req, res) => {
  const {id} = req.params;    
  carritosDao.eliminar(id)
  .then(carrito => res.send(carrito))
  .catch(err => console.log(err));
});
//Elimina un Producto de un Carrito
carritosRouter.delete("/:id/productos/:id_prod", (req, res) => {
  const id = req.params.id;  
  const id_prod = req.params.id_prod;  
  carritosDao.eliminarProducto(id,id_prod)
  .then(carrito=>res.status(201).json(carrito))
  .catch(err=>console.log(err))
});

//Actualiza el carrito
carritosRouter.put("/:id", (req, res) => { 
  //Ejemplo Objeto Put para Postman
    /*{
        "codigo": "3",
        "timestamp":"2022-09-02 00:00",        
    }*/  
  const {id} = req.params;    
  carritosDao.actualizar(id,req.body)
  .then(carrito => res.send(carrito))
  .catch(err => console.log(err));
});

export {carritosRouter}