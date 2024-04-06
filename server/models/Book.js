const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    min: 0.99
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;