/*const mongoosecon = require('mongoose');
const URL = process.env.MONGO_URL_ATLAS

//conectarse
console.log("con")
mongoosecon.connect(URL, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoosecon.connection.on('open', _ => {
  console.log('Conectado a MongoDBBBB');
}).on('error', err => {
  console.log('Error de conexion', err);
})*/

//module.exports = mongoosecon;
const mongoosecon = require('mongoose');
require('dotenv').config()
let instance = null;

class ConnectionClass {
  constructor() {
    this.URL=process.env.MONGO_URL_ATLAS
  }
  connect(){   
    mongoosecon.connect(this.URL, { 
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    mongoosecon.connection.on('open', _ => {
      console.log('Conectado a MongoDB');
    }).on('error', err => {
      console.log('Error de conexion', err);
    })

  }

  static getInstance() {
    console.log("getInstance")
    if (!instance) {
      instance = new ConnectionClass();
    }
    return instance;
  }
}

module.exports = ConnectionClass;