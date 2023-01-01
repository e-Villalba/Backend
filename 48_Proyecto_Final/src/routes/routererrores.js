//declaro el router
const {Router} = require('express');
const auth = require('../middleware/auth.js');
const routererrores = Router();

const {postDatosControllerError,deleteDatosControllerError,putDatosControllerError} = require("../controllers/errores.controller")
routererrores.post("*", auth,postDatosControllerError)    
routererrores.delete("*", auth,deleteDatosControllerError)    
routererrores.put("*",auth, putDatosControllerError)    

module.exports = routererrores