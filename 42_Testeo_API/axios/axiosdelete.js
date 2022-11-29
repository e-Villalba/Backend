
const axios = require("axios");
const { get } = require("mongoose");
//const { putproductos } = require("./src/negocio/negocio.productos");
const PORT = process.env.PORT || 3000
let url ="http://localhost:"+PORT.toString()+"/productos"

let productos=[]

let idProd="/6384a6554ea2302fbadd38b7"
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