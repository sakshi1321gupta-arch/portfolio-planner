const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("YOUR_MONGODB_URL");

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.listen(process.env.PORT || 5000, () =>
  console.log("Server running")
);