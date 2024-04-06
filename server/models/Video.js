const mongoose = require("mongoose");

const { Schema } = mongoose;

const videoSchema = new Schema({
  videoId: {
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

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;