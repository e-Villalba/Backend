const { Server } = require("engine.io")
const express = require("express")
const app=express()
const fetch = require('node-fetch');
const {Server:HttpServer}= require("http")
const {Server:IOServer}= require("socket.io")
const fs = require('fs');  
/////////////Base de Datos SQLite para guardar mensajes//////////
const {options} = require("./options/sqliteDB")
const {optionsMariaDB} = require("./options/mariaDB")

const httpServer=new HttpServer(app)
const io= new IOServer(httpServer)

const Producto = require("./controllers/producto.controller");
const { json } = require("express");
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//Implementación ejs
app.set('views', './public');
app.set('view engine', 'ejs');


app.get('/', (req, res) => {  
  res.render('form', {});
  /*const knex =require("knex")(optionsMariaDB)
  knex.from("productos").select("*")
  .orderBy("id")
  .then((rows)=>{      
      produc=rows    
      res.render('form', {rows});
  }
  )
  .catch((err)=>{
      console.log(err)
      
   }
  )*/

})

app.get("/productos", (req, res) => {
  Producto.getAll()
  .then(knexres=>{       
    res.status(200).json(knexres); })       
  .catch(err=>console.log(err))
}
);

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
    //Obtengo todos los msjes de la BD SQLite
    getAllMessages()  
    .then(knexres=>{
       if (messages.length===0)        
       {
        knexres.map(msj=>messages.push(msj))
       }
        io.sockets.emit('messages', knexres);        
     })
    .catch(err=>console.log(err))

    io.sockets.emit('messages', messages);
    
    socket.on('new-message',data => {
      messages.push(data);
      saveMessage(data)
      io.sockets.emit('messages', messages);
      
    });
 });

 
 async function saveMessage(msj){
  try{     
        const knex =require("knex")(options)
        knex("mensajes")
          .insert(msj)
          .then(() => {
            console.log("Mensaje insertado");
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            knex.destroy();
          });                   
  }
  catch(err)
  {
      console.log(err)	
  }     
 }

 function getAllMessages(){
    const knex =require("knex")(options)
    
    return  knex.from("mensajes").select("email", "fecha", "mensaje")
    .orderBy("fecha")
    .then((rows)=>{      
      return rows
    }
    )
    .catch((err)=>{
        console.log("getAllMessages",err)
        
    }
    )               
  
       
}