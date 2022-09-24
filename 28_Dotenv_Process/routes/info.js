const { Router } = require("express");
const info = Router();

const datosInfo = {
  Argumentos_Entrada: process.argv.slice(2),
  Nombre_Plataforma: process.platform,
  Version_Node: process.version,
  Memoria_Reservada: process.memoryUsage,
  Path_Ejecucion: process.execPath,
  Process_id: process.pid,  
  Carpeta_Proyecto: process.cwd()  
}


info.get("/", (req, res) => { 
  res.status(200).send(datosInfo); 
});

module.exports = info;