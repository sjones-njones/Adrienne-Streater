const mongoose = require("mongoose");

const { Schema } = mongoose;

const supportEventSchema = new Schema({
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  event: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  image: {
    type: String
  },
  image2: {
    type: String
  }, 
  image3: {
    type: String
  }
});

const SupportEvent = mongoose.model("SupportEvent", supportEventSchema);

module.exports = SupportEvent;