const productoBank = require("../productosBank");


class Producto {
  static getAll() {
    return productoBank.list()
    .then()       
    .catch(err=>console.log(err))
  }
  static create(object) {    
    const producto = productoBank.add(object);
    return producto;
  }
  static getByID(id) {
    const producto = productoBank.findOne(id);
    return producto;
  }
  static delete(id) {    
    const producto = productoBank.remove(id);
    return producto;
  }
  static update(id,title, price,thumbnail) {    
    const producto = productoBank.update(id,title,price,thumbnail);
    return producto;
  }
}

module.exports = Producto;
/*
//const productos = require("../utils/productos")
const productos = require("../utils/products")

//controller - Utiliza las funciones declaradas en productos.js
class Contenedor { 
  
  static getAll() {
   return productos.list();
  }

  static save(object) {
    return productos.save(object);    
  }

} 

module.exports = Contenedor;*/