var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var passport = require("passport");
var mongoose = require("mongoose");
var cors = require("cors");
var dotenv = require("dotenv");

dotenv.config({ path: "./.env.local" });

// Parsers externally added
var multer = require("multer");
var upload = multer();

// Routers
var authRouter = require("./routes/auth");
var blogRouter = require("./routes/blog");

var app = express();

app.use(express.static(path.join(__dirname, "/views/build")));

// Use CORS
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// for parsing application/json
app.use(express.json());

// for parsing application/xwww-
app.use(express.urlencoded({ extended: true }));
//form-urlencoded
app.use(passport.initialize());
app.use(passport.session());

// Serialize and deserialize a user
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

// for parsing multipart/form-data
app.use(upload.array());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// connect to mongodb via mongoose
mongoose.connect(process.env.REACT_APP_MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to bloggr db");
});
mongoose.connection.on("error", (error) => {
  console.log(error);
});

// Use all the routes
app.use("/auth", authRouter);
app.use("/blog", blogRouter);

app.get("*", function (req, res) {
  cd;
  res.sendFile(path.join(__dirname, "/views/build/index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
