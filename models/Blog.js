var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
