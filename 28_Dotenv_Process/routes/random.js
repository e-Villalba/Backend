const { Router } = require("express");
const randoms = Router();
//importo fork
const { fork } = require("child_process");



randoms.get("/", function (req, res) {
  const child = fork("./controllers/random.controller.js");
  //obtengo cant de url
  let cant;
  //verifico que sea un numero
  //console.log("req.query.cantidad",req.query.cantidad)
  //console.log("isNaN(req.query.cantidad)",typeof(isNaN(req.query.cantidad)))
  //typeof(params.p) === "number"?puerto = params.p:puerto=8080
  isNaN(req.query.cantidad)?cant=100000000:cant=req.query.cantidad
  //console.log("Cantidad",cant)
  child.send(['start', cant]);  
    child.on("message", (numerosRandom) => {
      res.send(numerosRandom);
    });  
});



module.exports = randoms;
