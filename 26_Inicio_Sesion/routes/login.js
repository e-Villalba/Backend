const { Router } = require("express");
const login = Router();

const passport = require("../middleware/passport.js");
require('../conexiones/connection'); 

login.post("/", passport.authenticate("local", { failureRedirect: "/loginerror" }),
  (req, res) => {
    console.log ("user req",req.body.user)
    res.redirect("/");
  }
);

module.exports = login;