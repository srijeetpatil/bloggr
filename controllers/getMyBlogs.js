var Blog = require("../models/Blog");
var extractUserFromJwt = require("../functions/extract");

var getMyBlogs = (req, res, next) => {
  let user = extractUserFromJwt(req);  

  Blog.find({ author: user.obj._id })
    .populate("author", "username created_at")
    .exec((err, result) => {
      if (err) {
        res.statusCode = 500;
        res.json({ error: err });
        return next(err);
      } else {
        res.statusCode = 200;
        res.json(result);
      }
    });
};

module.exports = getMyBlogs;
