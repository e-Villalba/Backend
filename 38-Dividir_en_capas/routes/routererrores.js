//declaro el router
const {Router} = require('express');

const routererrores = Router();

const {getDatosControllerError,postDatosControllerError,deleteDatosControllerError,putDatosControllerError} = require("../controllers/errores.controller")
routererrores.get("*", getDatosControllerError)  
routererrores.post("*", postDatosControllerError)    
routererrores.delete("*", deleteDatosControllerError)    
routererrores.put("*", putDatosControllerError)    

module.exports = routererrores