const { Router } = require("express");
const routerchat = Router();
const auth = require('../middleware/auth.js');

const {getDatosControllerMensajes,getDatosControllerMensajesEmail,postDatosControllerMensajes,getViewControllerMensajesUser} = require("../src/controllers/mensajes.controller")

routerchat.get("/",getDatosControllerMensajes) 
routerchat.get("/:email", getDatosControllerMensajesEmail) 
routerchat.post("/",postDatosControllerMensajes) 

module.exports = routerchat;