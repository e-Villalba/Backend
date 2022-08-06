const express = require('express')
const router = express.Router()

const productosRouter=require("./productosRouter")
const carritosRouter=require("./carritosRouter")
const erroresRouter=require("./erroresRouter")

router.use("/productos",productosRouter)
router.use("/carrito",carritosRouter)
router.use("*",erroresRouter)

module.exports = router;