const mongoose = require("mongoose")
const supertest = require("supertest")
const  {expect}  = require("chai")
const generar = require("./generador/productos")
const app = require( "../server.js")
require('dotenv').config() 
let request;
let server;


describe("test api rest full productos", () => {
  before(async function () {
    //await connectDb();
    //server = await startServer();
    //console.log("SuperTest",server.address().port)
    //request = supertest(
      //`http://localhost:${server.address().port}/productos`
    //);
    request = supertest(
        `http://localhost:3000/productos`
      );
  });

 /* after(function () {
    mongoose.disconnect();
    server.close();
  });*/

  describe("GET", () => {
    it("debería retornar un status 200", async () => {
      const response = await request.get("/");
      expect(response.status).to.eql(200);
    });
  });

  describe("POST", () => {
    it("debería incorporar un producto", async () => {
      const producto = generar();
        /*const producto = {
            "title": "Artesanal Acero Queso 3",
            "price": 10,
            "thumbnail": "https://loremflickr.com/640/480"
          }*/
      //console.log("producto faker",producto)  
      const response = await request.post("/").send(producto);
      expect(response.status).to.eql(200);

      const prod = response.body;
      expect(prod).to.include.keys("_id");
      //console.log("responseeeee",prod)
      expect(prod.title).to.eql(producto.title);
      expect(prod.price).to.eql(producto.price);
      expect(prod.thumbnail).to.eql(producto.thumbnail);
    });
  });
});

/*async function connectDb() {
  try {
    //await mongoose.connect("mongodb://localhost/mibase", {
    mongoose.connect(this.URL = process.env.MONGO_URL_ATLAS,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Base de datos conectada!");
  } catch (error) {
    throw new Error(`Error de conexión en la base de datos: ${err}`);
  }
}*/

async function startServer() {
  return new Promise((resolve, reject) => {
    const PORT = 0;
    const server = app.listen(PORT, () => {
      console.log(
        `Servidor express escuchando en el puerto ${server.address().port}`
      );
      resolve(server);
    });
    server.on("error", (error) => {
      console.log(`Error en Servidor: ${error}`);
      reject(error);
    });
  });
}
