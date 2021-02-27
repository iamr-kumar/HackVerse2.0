const mongoose = require("mongoose");
const User = require("./User");

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
  text: { type: String },
  verified: { type: Boolean, default: false },
  illness: { type: String, required: true },
  // doctor: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  date: { type: Date, default: Date.now },
  likes: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: "user" } }],
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
      name: { type: String },
      text: { type: String, required: true },
      date: { type: Date, default: Date.now },
    },
  ],
});

const Post = mongoose.model("post", PostSchema);

module.exports = Post;
