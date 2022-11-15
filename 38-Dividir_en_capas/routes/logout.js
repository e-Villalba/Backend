const { Router } = require("express");
const logout = Router();

require('../conexiones/connection'); 
const User = require('../models/User.js'); 

logout.get("/", async (req, res) => {
    const datosUsuario = await User.findById(req.user._id); 
    const user = datosUsuario.username;  
    req.session.destroy((err) => { 
      if (!err) res.render('logout', {user}); 
      else res.send("Error");
    });
  
});

module.exports = logout