const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  offer: Number,
  image: String
});

module.exports = mongoose.model("Product", productSchema);

