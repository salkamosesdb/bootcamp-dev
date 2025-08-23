var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

app.get("/", function (req, res, next) {
  res.json({ status: "ok" });
});

app.listen(80, function () {
  console.log("Server started at port 80");
});
