const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
  nro_orden: {type: Number, required: true},
  username: { type: String, required: true, max: 100 }, 
  fecha: { type: String, required: false, max: 20 },
  direccion: { type: String, required: false, max: 10 },
  products: {type: Array, required: true},  
  total: {type: Number, required: true},
  estado: { type: String, required: true, max: 10 }, 
});
module.exports = new model('Orders', orderSchema);