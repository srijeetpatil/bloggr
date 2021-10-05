var jwt = require("jsonwebtoken");

var secret = process.env.REACT_APP_JWT_SECRET;

function generateAccessToken(obj) {
  return jwt.sign({ obj }, secret, { expiresIn: 84600 });
}

module.exports = generateAccessToken;
