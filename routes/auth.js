var express = require("express");
var router = express.Router();
var extractUserFromJwt = require("../functions/extract");
// Middleware
var authenticateLocal = require("../middleware/authlocal");
var verifyJWT = require("../middleware/verifyJWT");
var emailCheck = require("../middleware/emailCheck");
// Controllers
var login = require("../controllers/login");
var signup = require("../controllers/signup");

/* Authenticate a user */
router.post("/login", authenticateLocal, login);

/* Sign up a new user with email */
router.post("/signup", emailCheck, signup);

router.get("/my-profile", verifyJWT, (req, res, next) => {
  let data = extractUserFromJwt(req);
  let obj = {
    username: data.obj.username,
    email: data.obj.email,
  };
  res.json({ obj });
});

module.exports = router;
