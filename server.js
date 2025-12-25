const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("AquaVistaPure backend running");
});
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running on port 5000");
});
