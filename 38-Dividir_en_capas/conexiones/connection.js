const mongoose = require('mongoose');
const URL = process.env.MONGO_URL_ATLAS

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