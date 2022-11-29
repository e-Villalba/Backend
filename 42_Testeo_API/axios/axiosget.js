const axios = require("axios");

const PORT = process.env.PORT || 3000
let url ="http://localhost:"+PORT.toString()+"/productos"

let productos=[]
const getProductos = () => {
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
getProductos()

