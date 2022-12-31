const { Router } = require("express");
const routerchat = Router();

const {getDatosControllerMensajes,getDatosControllerMensajesEmail,postDatosControllerMensajes,} = require("../src/controllers/mensajes.controller")

routerchat.get("/", getDatosControllerMensajes) 
routerchat.get("/:username", getDatosControllerMensajesEmail) 
routerchat.post("/", postDatosControllerMensajes) 

module.exports = routerchat;