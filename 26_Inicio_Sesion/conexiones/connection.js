const mongoose = require('mongoose');

console.log ("antes conectar")
const URL = process.env.MONGO_URL || 'mongodb://localhost:27017/ecommerce1';
console.log ("despuess conectar")
//conectarse
mongoose.connect(URL, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('open', _ => {
  console.log('Conectado a MongoDB');
}).on('error', err => {
  console.log('Error de conexion', err);
})

module.exports = mongoose;