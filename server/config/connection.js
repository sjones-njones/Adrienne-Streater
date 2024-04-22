const mongoose = require("mongoose");


mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://sjonesnjones:UhTbdQaLys4VIvSy@as.zqjhqtc.mongodb.net/?retryWrites=true&w=majority&appName=AS");

  // mongoose.connect('mongodb://127.0.0.1/test')

  module.exports = mongoose.connection;
