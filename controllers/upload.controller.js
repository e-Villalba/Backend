const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploadsssss");
  },
  filename: function (req, file, cb) {
    console.log("Fileee",file)
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

function prueba()
{
    console.log("Gilll")
}

exports.upload = upload.single('foto')
exports.uploadFile =(req,res)=>{
    res.send({data: "Enviar un archivo"})
}