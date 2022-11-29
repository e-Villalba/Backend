const axios = require("axios");
const PORT = process.env.PORT || 3000
let url ="http://localhost:"+PORT.toString()+"/productos"

let productos=[]
  
 let idProd="/6384a6554ea2302fbadd38b7"
  url+=idProd
  //console.log("url concat",url)
  const putProductos = () => {
    axios
      .put(url, {title:"Prueba Lunes 28/11-001" ,price:11.22,thumbnail:"https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/key-lock-unlock-clef-256.png"})
      .then((res) => {        
        console.log(res.data);
        productos = res.data
      })
      .catch((error) => {
        console.log(error);
      });
  };

  putProductos()



 