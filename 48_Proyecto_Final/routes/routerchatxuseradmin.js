
const { Router } = require("express");
const routerchatxuseradmin = Router();
const auth = require('../middleware/auth.js');

const {getDatosControllerChatxUSerAdmin} = require("../src/controllers/routerchatxuseradmin.controller")

routerchatxuseradmin.get("/",getDatosControllerChatxUSerAdmin ) 


module.exports = routerchatxuseradmin;