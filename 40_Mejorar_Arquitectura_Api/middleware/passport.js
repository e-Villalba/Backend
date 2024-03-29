const passport = require("passport"); 
const LocalStrategy = require("passport-local").Strategy; 
const bcrypt = require('bcrypt'); 
const User = require('../models/User'); 

 

//Se define la estrategia de autenticacion que de acuerdo a lo solicitado en el desafío es LOCAL
passport.use(
  new LocalStrategy({usernameField: 'email'},(username, password, done) => {    
    
    User.findOne({ email: username }, (err, user) => {
        
      //console.log("passport auth findone")
      if (err) console.log(err);
      if (!user)
      {
        //console.log("!user")
         return done(null, false);
         
      }
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) console.log(err);
        if (isMatch) 
        { //console.log("ismatch")
          //console.log(user)
          //console.log(password)
          return done(null, user);
          
        }
        //console.log("llegÓ a Done")
        conn.disconnect();   
        return done(null, false);
       
      }
      );
      
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);  
  return done(null, user);
});


module.exports = passport;