import mongoose from "mongoose";
const carritoSchema = new mongoose.Schema(
{
    codigo:{type: Number, required: true, max:100},
    timestamp:{type: String, required: true, max:100},    
    productos:{type:[]}

}
)

export const Carrito = mongoose.model("carritos",carritoSchema)


