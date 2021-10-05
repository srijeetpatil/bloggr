var User = require("../models/User");
const generateAccessToken = require("../functions/generate");

var login = (req, res, next) => {
  let email = req.body.email;

  User.findOne({ email: email }, function (err, user) {
    if (err) {
      res.statusCode = 500;
      res.json({ error: "Internal server error" });
      return next(err);
    }
    if (!user) {
      res.statusCode = 400;
      res.json({ error: "User not found" });
    } else {
      // Generate a jwt upon login
      let jwt = generateAccessToken(user);

      res.statusCode = 200;
      res.json({ token: jwt });
    }
  });
};

module.exports = login;
