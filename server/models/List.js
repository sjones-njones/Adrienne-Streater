const mongoose = require("mongoose");

const { Schema } = mongoose;

const listSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true
  }
});

const List = mongoose.model("List", listSchema);

module.exports = List;