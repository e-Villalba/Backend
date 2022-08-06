const productoBank = require("../productosBank");

class Producto {
  
  static getAll() {
    const productos = productoBank.list();
    return productos;
  }
  static create(nombre, descripcion, codigo, foto, precio, stock) {
    const producto = productoBank.add(nombre, descripcion, codigo, foto, precio, stock);
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
  static update(id,nombre, descripcion, codigo, foto, precio, stock) {    
    const producto = productoBank.update(id,nombre, descripcion, codigo, foto, precio, stock);
    return producto;
  }
}

module.exports = Producto;