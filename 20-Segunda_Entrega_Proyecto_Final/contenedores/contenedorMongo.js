import mongoose from "mongoose";

import {Carrito} from "../modules/carritoModel.js"
import {Producto} from "../modules/productoModel.js"
class contenedorMongo{

    constructor(opcionModelo){
        mongoose.connect("mongodb+srv://evillalba:esteban1776@cluster0.fybwz2j.mongodb.net/ecommerce?retryWrites=true&w=majority")
        console.log("Conectado a mongoDB") 
        if(opcionModelo=="Producto")
        {       
            console.log("Constructor Producto")
            this.modelo=Producto
        }
        else
        {
            this.modelo=Carrito
        }

    }

    async listarTodos()
    {                
        //return await Carrito.find({})        
        console.log("Listar Todos mongo")
        //console.log(this.modelo.find({}))
        return await this.modelo.find({})        
    }
    async buscarPorCodigo(criteria)    
    {        
        return await this.modelo.find({codigo:criteria})
        
    }
    async crear(elementData)    
    {        
 
        const newElement = new this.modelo(elementData)
        return await newElement.save()
    }

    async actualizar(criteria,elementData)
    {
        return await this.modelo.findOneAndUpdate( {codigo: criteria},elementData)
    }

    async eliminar(criteria)
    {
        return await this.modelo.deleteOne( {codigo: criteria }) 
            
    }

}

export default contenedorMongo;