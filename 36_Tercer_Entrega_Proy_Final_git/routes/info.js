const { Router } = require("express");
const info = Router();
const {loggerConsola} = require("../logger/logger");
let args
console.log("slice",process.argv.slice(2).length)
if(process.argv.slice(2).length===0)
{
   args="No informados"
}
else
{
  args=process.argv.slice(2)
}
const datosInfo = {
  Argumentos_Entrada: args,
  Nombre_Plataforma: process.platform,
  Version_Node: process.version,
  Memoria_Reservada: process.memoryUsage,
  Path_Ejecucion: process.execPath,
  Process_id: process.pid,  
  Carpeta_Proyecto: process.cwd()  
}


info.get("/", (req, res) => { 
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Info' - con metodo: ${method} - time: ${time}`);
  res.status(200).send(datosInfo); 
  //res.render('info',{datosInfo}); 
});

module.exports = info;