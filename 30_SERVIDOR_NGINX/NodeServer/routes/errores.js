//declaro el router
const {Router} = require('express');

const erroresRouter = Router();

/*erroresRouter.get("*", (req, res) => {  
   // res.render("errores-result",{mensajeResult:"Ruta Inexistente"});       
   res.redirect("/");
  
})*/

erroresRouter.post("*", (req, res) => {    
  res.json({ error : -2, descripcion: `ruta inexistente` })
});

erroresRouter.delete("*", (req, res) => {    
  res.json({ error : -2, descripcion: `ruta inexistente` })
});

erroresRouter.put("*", (req, res) => {  
  res.json({ error : -2, descripcion: `ruta inexistente` })
});

module.exports = erroresRouter