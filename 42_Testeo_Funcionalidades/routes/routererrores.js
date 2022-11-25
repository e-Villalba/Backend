//declaro el router
const {Router} = require('express');

const routererrores = Router();

const {postDatosControllerError,deleteDatosControllerError,putDatosControllerError} = require("../src/controllers/errores.controller")
//routererrores.get("*", getDatosControllerError)  
routererrores.post("*", postDatosControllerError)    
routererrores.delete("*", deleteDatosControllerError)    
routererrores.put("*", putDatosControllerError)    

module.exports = routererrores