const express = require("express");
const app = express();

app.use(express.json());

app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  const result = parseFloat(num1) + parseFloat(num2);
  
  if (isNaN(result)) {
    return res.status(400).json({ error: "Invalid numbers provided" });
  }
  res.json({ result });
});

module.exports = app
