import mongoose from "mongoose";
const productoSchema = new mongoose.Schema(
{
    nombre:{type: String, required: true, max:100},
    descripcion:{type: String, required: true, max:100},
    codigo:{type: String, required: true, max:100},
    //precio:{type: , required: true, max:100},
    //timestamp, 
    //nombre, 
    //descripcion, 
    //codigo, 
    //foto, 
    //precio, 
    //stock 

}
)

export const Producto = mongoose.model("productos",productoSchema)

