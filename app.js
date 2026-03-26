const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  const userId = req.query.id;
  const sql = "SELECT * FROM users WHERE id = " + userId;
  res.send("Query: " + sql);
});

app.get("/", (req, res) => {
  res.send("Secure CI/CD demo running");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});