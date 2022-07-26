const express = require('express')
const Producto = require("./controllers/producto.controller");
const router=require('./routes')
const app = express()

const handlebars = require("express-handlebars");

app.engine("hbs",  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layouts",
  })
);
app.set("view engine", "hbs"); // registra el motor de plantillas
app.set("views", "./views"); // especifica el directorio de vistas

///middleware
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/////BEGIN CODIGO NUEVO POR TRABAJO 10
app.get('/', (req, res) => {  
  res.render('main');
})

app.get("/productos", (req, res) => {
  const produc = Producto.getAll();  
  if(produc.length>0)
  {
    res.render('main', {produc})
  }
  else
  {
    let sindatos=1
    res.render('main', {sindatos});
  }
});

app.post('/productos',(req,res)=>{  
  const { title, price,thumbnail } = req.body;
  const produc = Producto.create(title, price,thumbnail);
  res.render('main', {});
})
/////END CODIGO NUEVO POR TRABAJO 10

let PORT = 8080
const server = app.listen(PORT,()=>{
  console.log(`Servidor escuchando el puerto: ${server.address().port}`)
})
server.on("error",error=>`El servidor a tenido un error:${error}`)


