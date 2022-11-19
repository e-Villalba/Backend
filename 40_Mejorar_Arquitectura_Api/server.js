//const { Server } = require("engine.io")
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
//Minimist para obtener el puerto
const minimist = require("minimist")
const ConnectionClass = require("./conexiones/connection");

const objConn = ConnectionClass.getInstance()
objConn.connect()
require('dotenv').config()

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

const mongoUrl = process.env.MONGO_URL_ATLAS//"mongodb+srv://evillalba:esteban1776@cluster0.fybwz2j.mongodb.net/ecommerce?retryWrites=true&w=majority"//
//Se genera Session
console.log("antes app.us")
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
console.log("despues app.us")
//Passport
const passport = require("./middleware/passport.js");
app.use(passport.initialize());
app.use(passport.session());
//Rutas
const router = require("./routes");
const { Console } = require("console");
app.use("/",router)


const PORT = process.env.PORT || 3000

//Enciendo el Server
httpServer.listen(PORT, () => {
  console.log(`Server on Port ${(PORT.toString())}`)
})

//Array de mjes para luego cargar en Base de Datos
const messages = [];
app.use(express.static("public"));
console.log ("Antes io.on")

io.on('connection', socket => {
  //Obtengo los productos con un Fetch y los devuelvo en un json a través de io.sockets
  fetch("http://localhost:"+PORT.toString()+"/productos")  
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




