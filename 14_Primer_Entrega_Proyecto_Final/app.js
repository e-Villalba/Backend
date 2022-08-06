const express = require('express')
const router=require('./routes')
const app = express()

///middleware
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api',router)

let PORT = 8080
const server = app.listen(PORT,()=>{
  console.log(`Servidor escuchando el puerto: ${server.address().port}`)
})
server.on("error",error=>`El servidor a tenido un error:${error}`)

