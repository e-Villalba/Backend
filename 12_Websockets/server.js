const { Server } = require("engine.io")
const express = require("express")
const app=express()
const fetch = require('node-fetch');
const {Server:HttpServer}= require("http")
const {Server:IOServer}= require("socket.io")
const fs = require('fs');  


const httpServer=new HttpServer(app)
const io= new IOServer(httpServer)

const Producto = require("./controllers/producto.controller");
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//Implementación ejs
app.set('views', './public');
app.set('view engine', 'ejs');

/////BEGIN CODIGO NUEVO POR TRABAJO 10
app.get('/', (req, res) => {
  const produc = Producto.getAll(); 
  res.render('form', {produc});
})

app.get("/productos", (req, res) => {
  const produc = Producto.getAll();  

  res.status(200).json(produc); 
});

app.post('/productos',(req,res)=>{  
  const { title, price,thumbnail } = req.body;
  const produc = Producto.create(title, price,thumbnail);    
  
  res.redirect('/');  
})

httpServer.listen(8080,()=>{
    console.log("Server on Port 8080")
    
})


const messages = [ ];

app.use(express.static("public"));

io.on('connection',socket => {
    console.log('Un cliente se ha conectado');
    //Obtengo los productos con un Fetch y los devuelvo en un json a través de io.sockets
    fetch("http://localhost:8080/productos")
    .then(response => response.json())
    .then(data => {io.sockets.emit('productos', data)}); 

    socket.on('new-message',data => {
      messages.push(data);
      saveMessage(data)
      io.sockets.emit('messages', messages);
    });
 });

 
 async function saveMessage(msj){

  try{
      await fs.promises.appendFile("logMensajes.log",JSON.stringify(msj)+ `\n`)                   
  }
  catch(err)
  {
      console.log(err)	
  }     
       
}