//declaro el router
const {Router} = require('express');
const auth = require('../middleware/auth.js');
const routererrores = Router();

const {postDatosControllerError,deleteDatosControllerError,putDatosControllerError} = require("../src/controllers/errores.controller")
//routererrores.get("*", getDatosControllerError)  
routererrores.post("*", auth,postDatosControllerError)    
routererrores.delete("*", auth,deleteDatosControllerError)    
routererrores.put("*",auth, putDatosControllerError)    

module.exports = routererrores