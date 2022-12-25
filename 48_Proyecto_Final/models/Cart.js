const { Schema, model } = require('mongoose');


const cartSchema = new Schema({
  username: { type: String, required: true, max: 100 }, 
  fecha: { type: String, required: false, max: 20 },
  direccion: { type: String, required: false, max: 10 },
  products: {type: Array, required: true},   
  estado: { type: String, required: true, max: 10 }, 
});

module.exports = new model('Carrito', cartSchema);