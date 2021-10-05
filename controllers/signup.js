var User = require("../models/User");
var bcrypt = require("bcrypt");
var saltRounds = 10;
var generateAccessToken = require("../functions/generate");
var validateEmail = require("../functions/emailVerification");

var signup = (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  if (username && email && password) {
    /* Email format verification */
    if (validateEmail(email)) {
      bcrypt.hash(password, saltRounds, (error, hash) => {
        let newUser = new User({
          email: email,
          password: hash,
          username: username,
        });

        newUser.save((err, docs) => {
          if (err) {
            res.statusCode = 500;
            res.json({ error: "Internal server error" });
            return next(err);
          } else {
            let jwt = generateAccessToken(docs);
            res.statusCode = 200;
            res.json({ token: jwt });
          }
        });
      });
    } else {
      res.statusCode = 400;
      res.json({ error: "Invalid email ID" });
    }
  } else {
    res.statusCode = 400;
    res.json({ error: "Please provide the complete details" });
  }
};

module.exports = signup;
