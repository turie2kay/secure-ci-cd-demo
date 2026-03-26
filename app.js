const express = require("express");

const app = express();

const password = "admin123"; // intentional vulnerability

app.get("/", (req, res) => {
  res.send("Secure CI/CD demo running");
});

app.listen(3000);