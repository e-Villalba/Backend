const { Router } = require("express");
const loginerror = Router();

loginerror.get("/", (req, res) => {  
  res.render('loginerror'); 
});

module.exports = loginerror