const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("BackEnd'e hos geldin");
});

app.listen(5000);
