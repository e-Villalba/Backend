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
//Entrega 30 NGINX
const cluster = require("cluster");
const numProcesadores = require("os").cpus().length;

require('dotenv').config()


if (cluster.isPrimary) {
  console.log("num CPUs: " + numProcesadores);
  console.log(`I am a master ${process.pid}`);
  for (let i = 0; i < numProcesadores; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker) => {
    console.log(`${worker.process.pid} is finished`);
  });
} else {
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

        const mongoUrl = process.env.MONGO_URL_LOCAL
        //Se genera Session
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
        //Passport
        const passport = require("./middleware/passport.js");
        app.use(passport.initialize());
        app.use(passport.session());
        //Rutas
        const router = require("./routes")
        app.use("/", router)

        //Obtengo el puerto enviado por  Línea de comandos, utilizo minimist. Si no se pasa el parámetro seteo 8080
        const params = minimist(["-p", process.argv.slice(2)])
        let puerto
        typeof (params.p) === "number" ? puerto = params.p : puerto = 8080

        //Enciendo el Server
        /* COMENTADO PARA ENTREGA 30-NGINX
        httpServer.listen(puerto, () => {
          console.log(`Server on Port ${(puerto.toString())}`)
        })
        */

        httpServer.listen(puerto, function () {
          console.log(`Servidor corriendo en puerto ${puerto}`);
        })

        console.log(`Worker ${process.pid} started`);
        //Array de mjes para luego cargar en Base de Datos
      const messages = [];

      //app.use(express.static("public")); //Comentada por implementación NGINX

      io.on('connection', socket => {
        //console.log('Un cliente se ha conectado');
        //Obtengo los productos con un Fetch y los devuelvo en un json a través de io.sockets
        fetch("http://localhost:" + puerto.toString() + "/api/productos-test")
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

}



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





