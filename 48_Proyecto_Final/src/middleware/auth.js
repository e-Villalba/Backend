const auth = (req, res, next) => {
    if (req.isAuthenticated()) { // Este método lo vimos en Clase 26
      next();
    } else {
      res.render("login");
    }
  };
  
  module.exports = auth;