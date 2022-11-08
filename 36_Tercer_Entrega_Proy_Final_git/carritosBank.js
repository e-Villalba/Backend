
require('./conexiones/connection'); 
const Carrito = require('./models/Cart');  
const { query } = require("express");

const data = [];
let id = 0;

//new para Heroku - trabaja contra mongoatrlas
const list = async () => {
  try {
    const carritos = await Carrito.find();
    return carritos;
  } catch (error) {
    console.log(error);
  }
}


const findOneId = async (id) => {
  //console.log ("title bank",title)
  const query={_id:id}
  /*console.log ("title bank 2",query)
  const produc = Productos.find({query})
  console.log ("title bank 3",produc)
  return produc*/
  try {
    const carrito = await Carrito.find(query);
    return carrito;
  } catch (error) {
    console.log(error);
  }
}

//New utilizado para Heroku Mongo Atlas
const add = async (carrito) => { 

  try {
    const newCart = new Carrito(carrito);     
    const data = await newCart.save();
    console.log(data);
    return data; 
  } catch (error) {
    console.log(error);
  }

}
/*
const remove = (id) => {  
  const eliminar = data.findIndex(prod=>parseInt(prod.id) === parseInt(id))  
  if (eliminar>-1){
    const produc= data.splice(data.findIndex(prod=>parseInt(prod.id) === parseInt(id)),1)
    return produc
  }  
  else {return { error : 'producto no encontrado para eliminar' }}  
};

const update = (id, newTitle,newPrice,newThumbnail) => {  
  const actualizar = data.findIndex(prod=>parseInt(prod.id) === parseInt(id))      
  if (actualizar>-1)
  { 
    const produc=findOne(id)
    if (newTitle) {produc.title=newTitle;}
    if (newPrice) { produc.price = newPrice;}
    if (newThumbnail) { produc.thumbnail = newThumbnail;}    
    return produc
  }
  else {return { error : 'producto no encontrado para actualizar' }}  
};*/


module.exports = { list,add,findOneID,findOneTitle,remove,update};

const produc = [

];
/*
for (let i = 0; i < produc.length; i++) {
  module.exports.add(produc[i].title, produc[i].price,produc[i].thumbnail);
}*/
