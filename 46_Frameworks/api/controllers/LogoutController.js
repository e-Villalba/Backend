module.exports = {
loginPOST: function(req,res){
    console.log("entre a login POST")
    if (req.body.user)
    {
        console.log("entre IF",req.body.user)
      const userName = req.body.user
      res.view('pages/form', {
        user: userName
      });
    }
     if (!req.body.user) {
        return res.status(400).json({
          status_code: 0,
          error_msg: "Require Params Missing",
        });
      }
  
  },
  logoutPOST: function(req,res){
    if (!req.body.user)
    {
      const userName = req.body.user
      req.session.userName = userName
      res.redirect("http://localhost:1337")
    }
    else{
      console.log("entro al else del logout")
    res.view('pages/logout', {
        user: req.body.user
      });
    }
}
}