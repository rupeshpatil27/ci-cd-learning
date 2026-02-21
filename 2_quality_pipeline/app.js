const express = require("express");
const app = express();

app.use(express.json());

function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }
  return a + b;
}

app.post("/add", (req, res) => {
  try {
    const { a, b } = req.body;
    const result = add(a, b);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = { app, add };
