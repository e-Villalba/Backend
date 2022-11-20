let args
//console.log("slice",process.argv.slice(2).length)
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

async function getinfo() {
    return datosInfo;
  }

//export default getinfo;
module.exports = getinfo