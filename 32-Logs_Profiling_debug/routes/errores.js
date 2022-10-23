//declaro el router
const {Router} = require('express');
const {loggerWarn} = require("../logger/logger");

const erroresRouter = Router();

/*erroresRouter.get("*", (req, res) => {  
   // res.render("errores-result",{mensajeResult:"Ruta Inexistente"});       
   res.redirect("/");
  
})*/

erroresRouter.get("*", (req, res) => {  
  const { url, method } = req;   
  loggerWarn.warn(`Ruta ${url} Inexistente - con metodo: ${method}`);  
  //res.render("errores-result",{mensajeResult:"Ruta Inexistente"});       
  res.redirect("/");
 
})

erroresRouter.post("*", (req, res) => {    
  const { url, method } = req;   
  loggerWarn.warn(`Ruta ${url} Inexistente - con metodo: ${method}`);  
  res.json({ error : -2, descripcion: `ruta inexistente` })
});

erroresRouter.delete("*", (req, res) => {    
  const { url, method } = req;   
  loggerWarn.warn(`Ruta ${url} Inexistente - con metodo: ${method}`);  
  res.json({ error : -2, descripcion: `ruta inexistente` })
});

erroresRouter.put("*", (req, res) => {  
  const { url, method } = req;   
  loggerWarn.warn(`Ruta ${url} Inexistente - con metodo: ${method}`);  
  res.json({ error : -2, descripcion: `ruta inexistente` })
});

module.exports = erroresRouter