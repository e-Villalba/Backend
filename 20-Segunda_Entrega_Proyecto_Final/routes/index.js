import express from 'express';
let router = express.Router();

import {productosRouter} from "../routes/productosRouter.js"
import {carritosRouter} from "../routes/carritosRouter.js"
import {erroresRouter} from "../routes/erroresRouter.js"

router.use("/productos",productosRouter)
router.use("/carrito",carritosRouter)
router.use("*",erroresRouter)

export {router}