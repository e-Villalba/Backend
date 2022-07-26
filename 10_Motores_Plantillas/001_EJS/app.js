const express = require('express')
//const productosRouter=require("./routes/productosRouter")
const Producto = require("./controllers/producto.controller");
const router=require('./routes')
const app = express()

///middleware
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//Implementación ejs
app.set('views', './views');
app.set('view engine', 'ejs');

/////BEGIN CODIGO NUEVO POR TRABAJO 10
app.get('/', (req, res) => {
  res.render('form', {});
})

app.get("/productos", (req, res) => {
  const produc = Producto.getAll();  
  res.render('products', {produc});
});

app.post('/productos',(req,res)=>{  
  const { title, price,thumbnail } = req.body;
  const produc = Producto.create(title, price,thumbnail);  
  res.render('form', {});
})
/////END CODIGO NUEVO POR TRABAJO 10

let PORT = 8080
const server = app.listen(PORT,()=>{
  console.log(`Servidor escuchando el puerto: ${server.address().port}`)
})
server.on("error",error=>`El servidor a tenido un error:${error}`)

