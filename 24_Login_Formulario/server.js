const { Server } = require("engine.io")
const express = require("express")
const app = express()
const fetch = require('node-fetch');
const { Server: HttpServer } = require("http")
const { Server: IOServer } = require("socket.io")
const fs = require('fs');
const cookieParser = require("cookie-parser");
const session = require("express-session");
/////////////Base de Datos SQLite para guardar mensajes//////////
const { options } = require("./options/sqliteDB")
const { optionsMariaDB } = require("./options/mariaDB")
//const {cors}=require("cors")
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const Producto = require("./controllers/producto.controller");
const { json } = require("express");
const { faker } = require('@faker-js/faker')

app.use(express.json())
//app.use(cors());
app.use(express.urlencoded({ extended: true }))
//Implementación ejs
app.set('views', './public');
app.set('view engine', 'ejs');

//inicialización de MongoAtlas
const MongoStore = require("connect-mongo");
const advanceOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
app.use(cookieParser());
require('dotenv').config()

//let mongoUrl = "mongodb+srv://evillalba:esteban1776@cluster0.fybwz2j.mongodb.net/ecommerce?retryWrites=true&w=majority"//process.env.MONGO_URL;
let mongoUrl = process.env.MONGO_URL
console.log("mongoURl",process.env.MONGO_URL)

app.use(
  session({
    store: new MongoStore({ 
      mongoUrl: mongoUrl,
      mongoOptions: advanceOptions,
      ttl: 600000,
      expires: 600000
    }),     
    secret: "coderhouse",
    resave: false,
    saveUninitialized: false,    
    rolling: true, //según google es para que se renueve el tiempo de expiración con una petición nuevo
    cookie: { maxAge: 600000 }, //tiempo de expiración de la cookie
  })
);
/////////////////////////////////////////////////// BEGIN - RUTAS LOGIN//////////////////////////////////////////////////////////////////
const  auth = (req,res,next)=>{
  if (req.session.userName) {
    return next()
  }
 res.redirect ("http://localhost:8080/login")
}

app.get("/login",(req,res)=>{
  res.render("login")
})

app.post("/login",(req,res)=>{
  if (req.body.user)
  {
    const userName = req.body.user
    req.session.userName = userName
    res.redirect("http://localhost:8080")
  }
   if (!req.body.user) {
      return res.status(400).json({
        status_code: 0,
        error_msg: "Require Params Missing",
      });
    }

})

app.get("/logout",auth,(req,res)=>{
    res.render("logout",{ user: req.session.userName })
    req.session.destroy(err=>{
      if (err)
      {
        return res.json({status: "Error de Logout", body: err})  
      }
    })  
  
})
/////////////////////////////////////////////////// END   - RUTAS LOGIN//////////////////////////////////////////////////////////////////

app.get('/', auth,(req, res) => {
  res.render('form', {
    user: req.session.userName
  });
})

app.get("/productos", (req, res) => {
  Producto.getAll()
    .then(knexres => {
      res.status(200).json(knexres);
    })
    .catch(err => console.log(err))
}
);

app.post('/productos', (req, res) => {
  const { title, price, thumbnail } = req.body;
  const produc = Producto.create(title, price, thumbnail);

  res.redirect('/');
})

//Ruta agregada por Desafío 22 Datos y Normalización
app.get("/api/productos-test", (req, res) => {
  const cant = req.query.cantidad || 5
  let id = 0;
  const productosTest = []
  for (let i = 0; i < cant; i++) {
    productosTest.push({
      id: ++id,
      title: faker.commerce.productName(),
      price: faker.commerce.price(1000, 2000, 0, '$'),
      thumbnail: faker.image.imageUrl()
    })
  }
  res.status(200).send(productosTest)
  }
);

httpServer.listen(8080, () => {
  console.log("Server on Port 8080")
})


const messages = [];

app.use(express.static("public"));

io.on('connection', socket => {
  console.log('Un cliente se ha conectado');
  //Obtengo los productos con un Fetch y los devuelvo en un json a través de io.sockets
  fetch("http://localhost:8080/api/productos-test")
    .then(response => response.json())
    .then(data => { io.sockets.emit('productos', data) });
  //Obtengo todos los msjes de la BD SQLite
  getAllMessages()
    .then(knexres => {
      if (messages.length === 0) {
        knexres.map(msj => messages.push(msj))
      }
      io.sockets.emit('messages', knexres);
    })
    .catch(err => console.log(err))

  io.sockets.emit('messages', messages);

  socket.on('new-message', data => {
    messages.push(data);
    saveMessage(data)
    io.sockets.emit('messages', messages);

  });
});


async function saveMessage(msj) {
  try {
    const knex = require("knex")(options)
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
  catch (err) {
    console.log(err)
  }
}

function getAllMessages() {
  const knex = require("knex")(options)

  return knex.from("mensajes").select("email", "fecha", "mensaje")
    .orderBy("fecha")
    .then((rows) => {
      return rows
    }
    )
    .catch((err) => {
      console.log("getAllMessages", err)

    }
    )


}





