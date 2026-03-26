const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  const userId = req.query.id;

  if (!/^\d+$/.test(userId)) {
    return res.status(400).send("Invalid user id");
  }

  const sql = "SELECT * FROM users WHERE id = ?";
  res.send("Parameterized query would be used safely here");
});

app.get("/", (req, res) => {
  res.send("Secure CI/CD demo running");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});