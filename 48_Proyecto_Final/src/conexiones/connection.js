const mongoosecon = require('mongoose');
require('dotenv').config()
let instance = null;

class ConnectionClass {
  constructor() {
    if (process.argv.slice(2).toString().trim() === "DEV") {
      this.URL = process.env.MONGO_URL_LOCAL
    }
    else {
      this.URL = process.env.MONGO_URL_ATLAS
    }
  }
  connect() {
    mongoosecon.connect(this.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    mongoosecon.connection.on('open', _ => {
      console.log(this.URL);
      console.log('Conectado a MongoDB');
    }).on('error', err => {
      console.log('Error de conexion', err);
    })

  }

  static getInstance() {
    if (!instance) {
      instance = new ConnectionClass();
    }
    return instance;
  }
}

module.exports = ConnectionClass;