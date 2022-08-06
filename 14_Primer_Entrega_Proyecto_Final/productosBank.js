//const { getByID } = require("./controllers/producto.controller");
//const productosRouter = require("./routes/productosRouter");

const data = [];
let id = 0;

const list = () => {
   return data;
}
const findOne = (id) => {
  console.log("Id findOne",id)
  console.log("Data",data)
  const produc =data.find((produc) => parseInt(produc.id) === parseInt(id));
  if(produc)
  {return produc} else {return { error : 'producto no encontrado' }}
};

const add = (nombre, descripcion, codigo, foto, precio, stock) => {
  let timestamp= new Date().getTime();
  const produc = { id: ++id, timestamp,nombre, descripcion, codigo, foto, precio, stock };
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

const update = (id, newNombre, newDescripcion, newCodigo, newFoto, newPrecio, newStock) => {  
  const actualizar = data.findIndex(prod=>parseInt(prod.id) === parseInt(id))      
  if (actualizar>-1)
  { 
    const produc=findOne(id)
    if (newNombre) {produc.nombre=newNombre;}
    if (newDescripcion) { produc.descripcion = newDescripcion;}
    if (newCodigo) { produc.codigo = newCodigo;}    
    if (newFoto) { produc.codigo = newFoto;}    
    if (newPrecio) { produc.precio = newPrecio;}    
    if (newStock) { produc.stock = newStock;}    
    return produc
  }
  else {return { error : 'producto no encontrado para actualizar' }}  
};


module.exports = { list,add,findOne,remove,update};
/*Ejemplo objetos de array produc
{
        "nombre": "UNO",
        "descripcion": "Descripcion UNO",
        "codigo": "001",
        "foto": "https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/key-lock-unlock-clef-256.png",
        "precio":11.11,
        "stock": 11
}
*/
const produc = [
];

for (let i = 0; i < produc.length; i++) {
  module.exports.add(produc[i].nombre, produc[i].descripcion,produc[i].codigo,produc[i].foto, produc[i].precio,produc[i].stock);
}
