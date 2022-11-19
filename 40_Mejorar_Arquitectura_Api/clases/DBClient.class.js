const CustomError = require ("./CustomError.class.js")

class DBClient {
    async connect(){
        throw new CustomError(500, "Falta implementar 'connect' en Sub Clase")
    }

    async disconnect(){
        throw new CustomError(500, "Falta implementar 'connect' en Sub Clase")
    }
}

//export default DBClient;
module.exports = DBClient