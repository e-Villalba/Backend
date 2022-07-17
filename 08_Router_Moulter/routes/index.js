const express = require('express')
const router = express.Router()
//const tweetsRouter = require("./tweets");
const productosRouter=require("./productosRouter")

//router.use("/tweets", tweetsRouter);
router.use("/productos",productosRouter)

module.exports = router;