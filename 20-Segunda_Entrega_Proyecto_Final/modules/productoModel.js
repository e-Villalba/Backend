import mongoose from "mongoose";
const productoSchema = new mongoose.Schema(
{
    nombre:{type: String, required: true, max:100},
    descripcion:{type: String, required: true, max:100},
    codigo:{type: Number, required: true},
    precio:{type: Number , required: true},
    foto:{type: String , required: true, max:100},    
}
)

export const Producto = mongoose.model("productos",productoSchema)

