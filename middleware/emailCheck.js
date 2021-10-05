var User = require("../models/User");

/* Middleware to check, whether this email already exists in the database */
var emailCheck = (req, res, next) => {
  let email = req.body.email;

  User.findOne({ email: email }, (err, result) => {
    if (err) {
      res.statusCode = 500;
      res.json({ error: "Internal server error" });
      return;
    }
    if (!result) {
      return next();
    } else {
      res.statusCode = 400;
      res.json({ error: "Email already exists in the database" });
      return;
    }
  });
};

module.exports = emailCheck;
