const axios = require("axios");
const PORT = process.env.PORT || 3000
let url ="http://localhost:"+PORT.toString()+"/productos"

const postProductos = () => {
    axios
      .post(url, {title:"Prueba Lunes 28/11-001" ,price:88.80,thumbnail:"https://picsum.photos/201" })
      .then((res) => {        
        console.log(res.data);
        productos = res.data
      })
      .catch((error) => {
        console.log(error);
      });
  };
  postProductos()
 