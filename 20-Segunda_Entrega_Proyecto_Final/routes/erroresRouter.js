//declaro el router
import {Router} from 'express';



const erroresRouter = Router();

erroresRouter.get("*", (req, res) => {  
  res.json({ error : -2, descripcion: `ruta inexistente` })
});

erroresRouter.post("*", (req, res) => {  
  res.json({ error : -2, descripcion: `ruta inexistente` })
});

erroresRouter.delete("*", (req, res) => {  
  res.json({ error : -2, descripcion: `ruta inexistente` })
});

erroresRouter.put("*", (req, res) => {  
  res.json({ error : -2, descripcion: `ruta inexistente` })
});

export {erroresRouter}