const { createTransport }  = require("nodemailer");

const EMAIL = process.env.EMAIL
const PASS_MAIL = process.env.PASS_MAIL

const transporter = createTransport({
  service: 'gmail',  
  port: 587,
  auth: {
      user: EMAIL,
      pass: PASS_MAIL,
  }
});

/* Envío de mail */

const sendMail = async (type,data) => {  
  let contentmail=""
  let subjectmail=""
  if (type=="R") //Registro Usuario
  {    
    subjectmail="Registro Nuevo Usuario"
    contentmail= `<h1 style='color: black'>Nuevo Usuario Registrado</h1><p>Nombre: ${data.username}</p><p>Email: ${data.email}</p><p>Edad: ${data.edad}</p><p>Telefono: ${data.telefono}</p><p>Direccion: ${data.direccion}</p><p>Imagen: ${data.foto}</p>`  
  }
  if (type=="C") //Compra de Carrito Confirmada
  {    
    subjectmail=`Nuevo Pedido de ${data.username}`
    const productos = data.products; 
    const productosArr = productos.map(el => el.title);
    contentmail= `
    <h3 style='color: black'>Muchas gracias por su compra ${data.username}</h3>    
    <p>Productos: ${productosArr}</p>      
    `
  }
  const emailContent = {
    from: subjectmail,
    to: EMAIL,
    subject: subjectmail,
    text: subjectmail,    
    html: contentmail
  };

  try {
    const info = await transporter.sendMail(emailContent);     
  } catch (error) {
    console.log('error de nodemailer', error);
  }

}

module.exports =sendMail;