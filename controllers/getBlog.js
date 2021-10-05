var Blog = require("../models/Blog");

var getBlog = (req, res, next) => {
  let id = req.params.id;

  /* Find the blog and populate only selected fields in the blog object */
  Blog.findOne({ _id: id })
    .populate("author", "username created_at")
    .exec((err, result) => {
      if (err) {
        res.statusCode = 500;
        res.json({ error: "Internal server error" });
        return next(err);
      }
      if (!result) {
        res.statusCode = 404;
        res.json({ error: "Not found" });
        console.log(str);
      } else {
        res.statusCode = 200;
        res.json(result);
      }
    });
};

module.exports = getBlog;
