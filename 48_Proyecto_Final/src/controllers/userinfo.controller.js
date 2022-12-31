
//const {obtenerregister,postregister} = require("../negocio/negocio.register")
const {obteneruserinfo} = require("../negocio/negocio.userinfo")
const {loggerConsola} = require("../logger/logger");


async function getDatosControllerUserInfo(req, res) {
  //console.log("entré acá")
  //console.log("req.params",req.user.username)  
  const { method } = req;
  const user =req.user.username
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Register' - con metodo: ${method} - time: ${time}`);
  const datosregister = await obteneruserinfo(user);
  const userData = {username: datosregister.username ,email:datosregister.email,apenom:datosregister.apenom}    
  res.render('user_info', {userData}); 
}
/*
async function postDatosControllerRegister(req, res) { 
  const { username, password,password2,apenom,email } = req.body;
  const objUser = {
    username:username,
    password:password,
    password2:password2,
    email:email,
    apenom:apenom
  }
  const { method } = req;
  const time = new Date().toLocaleString();
  loggerConsola.info(`Ruta '/Register' - con metodo: ${method} - time: ${time}`);
  const datosregister = await postregister(objUser);    
  res.render(datosregister.view,{mensajeResult:datosregister.mensajeResult});  
  }
*/
module.exports = {getDatosControllerUserInfo}


