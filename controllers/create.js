var Blog = require("../models/Blog");
var extractUserFromJwt = require("../functions/extract");

var createBlog = (req, res, next) => {
  let title = req.body.title;
  let content = req.body.content;
  let user = extractUserFromJwt(req);

  if (title && content) {
    let blog = new Blog({
      title: title,
      content: content,
      author: user.obj._id,
    });

    blog.save((err, docs) => {
      if (err) {
        res.statusCode = 500;
        res.json({ error: "Internal server error" });
        return next(err);
      } else if (docs) {
        res.statusCode = 200;
        res.json({ message: "Success" });
      }
    });
  } else {
    res.statusCode = 400;
    res.json({ error: "Provide complete details" });
  }
};

module.exports = createBlog;
