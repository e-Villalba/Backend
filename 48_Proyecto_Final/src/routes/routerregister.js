  
const { Router } = require("express");
const routerregister = Router();

const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage });
const {getDatosControllerRegister,postDatosControllerRegister} = require("../controllers/register.controller")

routerregister.get("/", getDatosControllerRegister) 
routerregister.post("/",upload.single("foto"), postDatosControllerRegister) 

module.exports = routerregister;