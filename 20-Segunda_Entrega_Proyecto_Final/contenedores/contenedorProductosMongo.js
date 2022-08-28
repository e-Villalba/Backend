
import mongoose from "mongoose";

import {Producto} from "../modules/productoModel.js"

class contenedorProductosMongo{

    constructor(){
        mongoose.connect("mongodb+srv://evillalba:esteban1776@cluster0.fybwz2j.mongodb.net/ecommerce?retryWrites=true&w=majority")
        console.log("Conectado a mongoDB")        
    }

    async listarTodos()
    {                
        return await Producto.find({})        
    }
    async buscarPorCodigo(criteria)    
    {        
        return await Producto.find({codigo:criteria})
        
    }
    async crear(prod)    
    {        
 
        const newProduct = new Producto(prod)
        return await newProduct.save()
    }

    async actualizar(criteria,prod)
    {
        return await Producto.updateOne( {codigo: criteria }, {
            $set: {descripcion: prod.descripcion}
            });
    }

    async eliminar(criteria)
    {
        return await Producto.deleteOne( {codigo: criteria }) 
            
    }

}

export default contenedorProductosMongo;