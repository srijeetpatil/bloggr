var express = require("express");
var router = express.Router();
/* Middleware */
var verifyJWT = require("../middleware/verifyJWT");
/* Controllers */
var createBlog = require("../controllers/create");
var getBlog = require("../controllers/getBlog");
var explore = require("../controllers/explore");
var getMyBlogs = require("../controllers/getMyBlogs");

/* *Create a new blog
 * with create api, user can create a new blog.
 * after the user's jwt is verified using verifyJWT middleware
 * */
router.post("/create", verifyJWT, createBlog);

/* Get a particular blog's data with the help of it's unique title */
router.get("/:id", getBlog);

/* Get my blogs */
router.get("/my-blogs/all", verifyJWT, getMyBlogs);

/* Get different types of blogs */
router.get("/", explore);

module.exports = router;
