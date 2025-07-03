const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/predict", async (req, res) => {
  const inputData = req.body;

  // Forward to Python (if needed) or run logic here
  const response = await axios.post("http://localhost:5000/predict", inputData);
  res.json(response.data);
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
