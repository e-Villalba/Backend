const CustomError = require("./CustomError.class.js")
const DBClient = require("./DBClient.class.js");
const config = require("../conexiones/config");
const mongoose = require("mongoose")

class MongoDBClient extends DBClient {
    constructor(){
        super();
        this.connected = false;
        this.client = mongoose;
        console.log(config.mongodb.connstr);
    }

     connect(){
        try {

             this.client.connect(config.mongodb.connstr, config.mongodb.options);
            this.connected = true;

            console.log('Base de datos conectada');
        } catch (error) {
            throw new CustomError(500, "Error al conectarse a mongodb", error);
        }
    }

     disconnect(){
        try {
             this.client.connection.close();
            this.connected = false;

            console.log('Base de datos desconectada');
        } catch (error) {
            throw new CustomError(500, "Error al desconectarse a mongodb", error);
        }
    }
}

module.exports = MongoDBClient