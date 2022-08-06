const carritoBank = require("../carritosBank");

class Carrito {
  
  static getAll() {
    const carritos = carritoBank.list();
    return carritos;
  }
  static create() {
    const carrito = carritoBank.add();
    return carrito;
  }
  static addProductos(idCarrito,productos) {
    const carrito = carritoBank.addProductos(idCarrito,productos);
    return carrito;
  }

  static getByID(id) {
    const carritos = carritoBank.findOne(id);
    return carritos;
  }

  static getProductosByID(id) {
    const productosCarrito = carritoBank.findProductosCarrito(id);
    return productosCarrito;
  }

  static delete(id) {    
    const carritos = carritoBank.remove(id);
    return carritos;
  }
  static deleteProductoCarrito(id,id_producto) {    
    const carritos = carritoBank.removeProductoCarrito(id,id_producto);
    return carritos;
  }
  static update(id,title, price,thumbnail) {    
    const carritos = carritoBank.update(id,title,price,thumbnail);
    return carritos;
  }

}

module.exports = Carrito;