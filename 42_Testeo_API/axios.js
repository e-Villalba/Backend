const axios = require("axios");
const { get } = require("mongoose");
//const { putproductos } = require("./src/negocio/negocio.productos");
const PORT = process.env.PORT || 3000
let url ="http://localhost:"+PORT.toString()+"/productos"

let productos=[]
/*const getProductos = () => {
  axios
    .get(url, { })
    .then((res) => {        
      console.log(res.data);
      productos = res.data
    })
    .catch((error) => {
      console.log(error);
    });
};
getProductos()*/

/*const postProductos = () => {
    axios
      .post(url, {title:"Prueba Domingo 27/11-002" ,price:88.80,thumbnail:"https://picsum.photos/201" })
      .then((res) => {        
        console.log(res.data);
        productos = res.data
      })
      .catch((error) => {
        console.log(error);
      });
  };
  postProductos()*/
  
 /* let idProd="/638358ef82673e2bda0fe511"
  url+=idProd
  //console.log("url concat",url)
  const putProductos = () => {
    axios
      .put(url, {title:"Prueba Domingo 27/11-003" ,price:11.22,thumbnail:"https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/key-lock-unlock-clef-256.png"})
      .then((res) => {        
        console.log(res.data);
        productos = res.data
      })
      .catch((error) => {
        console.log(error);
      });
  };

  putProductos()*/



  let idProd="/638358ef82673e2bda0fe511"
  url+=idProd
  //console.log("url concat",url)
  const deleteProducto = () => {
    axios
      .delete(url, {})
      .then((res) => {        
        console.log(res.data);
        productos = res.data
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deleteProducto()