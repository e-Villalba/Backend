const express = require("express");
const app = express();
app.use(express.json())
//app.use(cors());
app.use(express.urlencoded({ extended: true }))
//Implementación ejs
app.set('views', './public');
app.set('view engine', 'ejs');

//importo el router (index.js)
const router = require("./routes")

app.use("/", router);