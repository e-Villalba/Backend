//const { getByID } = require("./controllers/producto.controller");
//const productosRouter = require("./routes/productosRouter");
const {optionsMariaDB} = require("./options/mariaDB")

require('./conexiones/connection'); 
const Productos = require('./models/Products');  
const { query } = require("express");

const data = [];
let id = 0;

/*
OLD usaba MARIADB LOCAL
const list = () => {
    const knex =require("knex")(optionsMariaDB)
    return  knex.from("productos").select("title", "price", "thumbnail")
    .orderBy("id")
    .then(   )
    .catch((err)=>{
        console.log(err)
    }
    )               
}*/
//new para Heroku - trabaja contra mongoatrlas
const list = async () => {
  try {
    const productos = await Productos.find();
    return productos;
  } catch (error) {
    console.log(error);
  }
}

const findOneID = (id) => {
  const produc =data.find((produc) => parseInt(produc.id) === parseInt(id));
  
  if(produc)
  {return produc} else {return { error : 'producto no encontrado' }}
};

const findOneTitle = async (title) => {
  //console.log ("title bank",title)
  const query={title:title}
  /*console.log ("title bank 2",query)
  const produc = Productos.find({query})
  console.log ("title bank 3",produc)
  return produc*/
  try {
    const productos = await Productos.find(query);
    return productos;
  } catch (error) {
    console.log(error);
  }


}

/* OLD utilizado para MARIA DB LOCAL
const add = (title, price,thumbnail) => {
    const produc = { title, price,thumbnail };
  const knex =require("knex")(optionsMariaDB)
  knex("productos")
  .insert(produc)
  .then(() => {
    console.log("Producto insertado");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
  data.push(produc);
  return produc;
};
*/

//New utilizado para Heroku Mongo Atlas
const add = async (product) => { 

  try {
    const newProduct = new Productos(product);     
    const data = await newProduct.save();
    console.log(data);
    return data; 
  } catch (error) {
    console.log(error);
  }

}

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
};


module.exports = { list,add,findOneID,findOneTitle,remove,update};

const produc = [

];
/*
for (let i = 0; i < produc.length; i++) {
  module.exports.add(produc[i].title, produc[i].price,produc[i].thumbnail);
}*/
