var Blog = require("../models/Blog");

/* explore controller finds and returns all the blogs from the database */
var explore = (req, res, next) => {
  Blog.find({})
    .populate("author", "username")
    .exec((err, docs) => {
      if (err) {
        res.statusCode = 500;
        res.json({ error: "Internal server error" });
        return next(err);
      } else {
        res.statusCode = 200;
        res.json(docs);
        return;
      }
    });
};

module.exports = explore;
