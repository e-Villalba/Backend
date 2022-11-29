const supertest = require("supertest")
const  {expect}  = require("chai")
const generar = require("./generador/productos")
const app = require( "../server.js")
require('dotenv').config() 
let request;

describe("test api rest full productos", () => {
  before(async function () { 
    request = supertest(
        `http://localhost:3000/productos`
      );
  });

  describe("GET", () => {
    it("debería retornar un status 200, CONSULTA todos los productos", async () => {
      const response = await request.get("/");
      expect(response.status).to.eql(200);
    });
  });

  describe("POST", () => {
    it("debería INSERTAR un producto", async () => {
      const producto = generar();
      const response = await request.post("/").send(producto);
      expect(response.status).to.eql(200);

      const prod = response.body;
      expect(prod).to.include.keys("_id");      
      expect(prod.title).to.eql(producto.title);
      expect(prod.price).to.eql(producto.price);
      expect(prod.thumbnail).to.eql(producto.thumbnail);
    });
  });
 
  const idProdActualizar="63841e985e6ea05c47d4ec36"
  describe("PUT", () => {
    it("debería ACTUALIZAR un producto existente", async () => {
      const producto = generar();
      const response = await request.put( `/${idProdActualizar}`).send(producto);
      expect(response.status).to.eql(200);

      const prod = response.body;
      expect(prod).to.include.keys("_id");      
      expect(prod.title).to.eql(producto.title);
      expect(prod.price).to.eql(producto.price);
      expect(prod.thumbnail).to.eql(producto.thumbnail);
    });
  });

  const idProdEliminar="63841e985e6ea05c47d4ec36"
  describe("DELETE", () => {
    it("debería ELIMINAR un producto existente", async () => {
      const response = await request.delete( `/${idProdEliminar}`);
      expect(response.status).to.eql(200);
    
    });
  });
});

