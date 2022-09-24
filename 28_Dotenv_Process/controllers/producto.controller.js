const productoBank = require("../productosBank");


class Producto {
  static getAll() {
    return productoBank.list()
    .then()       
    .catch(err=>console.log(err))
  }
  static create(title, price,thumbnail) {
    const producto = productoBank.add(title, price,thumbnail);
   

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