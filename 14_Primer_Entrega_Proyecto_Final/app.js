const express = require('express')
const router=require('./routes')
const app = express()
const fs = require("fs")
///middleware
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api',router)

let PORT = 8080
const server = app.listen(PORT,()=>{
  console.log(`Servidor escuchando el puerto: ${server.address().port}`)
})
server.on("error",error=>`El servidor ha tenido un error:${error}`)

//Elimino Archivos de Persistencia de Productos y Carritos
const archivoProductos = "./archivos/productos.txt"
const archivoCarritos = "./archivos/carritos.txt"
//Elimino Archivo Productos
try {
  fs.unlinkSync(archivoProductos)
}
catch (err) {
  console.log(err)
}
//Elimino Archivo Carritos
try {
  fs.unlinkSync(archivoCarritos)
}
catch (err) {
  console.log(err)
}