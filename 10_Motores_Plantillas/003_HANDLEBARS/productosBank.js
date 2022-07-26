const { getByID } = require("./controllers/producto.controller");
const productosRouter = require("./routes/productosRouter");

const data = [];
let id = 0;

const list = () => {
   return data;
}
const findOne = (id) => {
  const produc =data.find((produc) => parseInt(produc.id) === parseInt(id));
  if(produc)
  {return produc} else {return { error : 'producto no encontrado' }}
};

const add = (title, price,thumbnail) => {
  const produc = { id: ++id, title, price,thumbnail };
  data.push(produc);
  return produc;
};
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


module.exports = { list,add,findOne,remove,update};
/*Ejemplo objetos de array produc
{
  "title": "PEPE3",
  "price": "RAZA3",
  "thumbnail": "IMAGEN3"
 }*/
const produc = [

];

for (let i = 0; i < produc.length; i++) {
  module.exports.add(produc[i].title, produc[i].price,produc[i].thumbnail);
}
