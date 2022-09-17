const { Router } = require("express");
const login = Router();


/*function auth(req, res, next) {
    console.log(req.session);
    if (req.session.user == "pepe") return next();
    return res.status(401).send("error de autorización");
  }*/
  
  function  auth (req,res,next){
    if (req.session.userName) {
      return next()
    }
   res.redirect ("http://localhost:8080/login")
  }
  
  login.get("/login",(req,res)=>{
    res.render("login")
  })
  
  login.post("/login",(req,res)=>{
    if (req.body.user)
    {
      const userName = req.body.user
      req.session.userName = userName
      res.redirect("http://localhost:8080")
    }
     if (!req.body.user) {
        return res.status(400).json({
          status_code: 0,
          error_msg: "Require Params Missing",
        });
      }
  
  })
  
  login.get("/logout",auth,(req,res)=>{
      res.render("logout",{ user: req.session.userName })
      req.session.destroy(err=>{
        if (err)
        {
          return res.json({status: "Error de Logout", body: err})  
        }
      })  
    
  })
  
  module.exports = login;