const express = require("express");
const { Router } = require("express");
const randoms = Router();
const numProcesadores = require("os").cpus().length;

const PORT = parseInt(process.argv[2]) || 8080;

const random = () => {
  return Math.floor(Math.random() * 1000) + 1;
};

randoms.get("/", function (req, res) {
  //noconsole.log(`puerto: ${PORT} -> FechaHora: ${Date.now()}`);
  const nroRandom = random();
  const info = {
    puerto: PORT,
    nro_random: nroRandom,
    procesadores: numProcesadores,
  }
  res.send(info);  
});



module.exports = randoms;
