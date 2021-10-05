var passport = require("passport");
var LocalStrategy = require("passport-local");
var User = require("../models/User");
var bcrypt = require("bcrypt");

var authenticateLocal = passport.authenticate("local");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {      
      User.findOne({ email: email }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }

        let hash = user.password;

        bcrypt.compare(password, hash, function (err, docs) {
          if (docs) {
            return done(null, user);
          } else if (err) {
            return done(null, false);
          }
        });
      });
    }
  )
);

module.exports = authenticateLocal;
