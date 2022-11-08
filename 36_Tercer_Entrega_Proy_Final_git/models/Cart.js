const { Schema, model } = require('mongoose');


const cartSchema = new Schema({
  username: { type: String, required: true, max: 100 }, 
  products: {type: Array, required: true},   
  estado: { type: String, required: true, max: 10 }, 
});

module.exports = new model('Carrito', cartSchema);