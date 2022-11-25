const { Schema, model } = require('mongoose');
const mensajeSchema = new Schema({
  email: { type: String, required: true, max: 100 },  
  fecha: { type: String, required: true, max: 100 },
  mensaje: { type: String, required: true, max: 100 },
});

module.exports = new model('Mensaje', mensajeSchema);
