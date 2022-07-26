const express = require('express')
const router = express.Router()

const productosRouter=require("./productosRouter")


router.use("/productos",productosRouter)

module.exports = router;