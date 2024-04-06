const mongoose = require("mongoose");

const { Schema } = mongoose;

const blogSchema = new Schema({
  blogURL: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  }
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;