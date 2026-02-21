const express = require("express");
const app = express();

app.get("/add", (req, res) => {
  const { a, b } = req.query;
  const result = Number(a) + Number(b);
  res.json({ result });
});

module.exports = app;
