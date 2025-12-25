const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("AquaVistaPure backend running");
});

// DB CONNECT
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

// PORT (IMPORTANT FOR RENDER)
const PORT = process.env.PORT || 5000;

// START SERVER
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
