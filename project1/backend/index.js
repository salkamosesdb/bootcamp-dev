var express = require("express");
const mongoose = require("mongoose");

const { APP_PORT, DB_URL } = require("./config/vars");
const routes = require("./routes/main");

var cors = require("cors");
var app = express();
app.use(cors());
app.use(express.json());

app.get("/", function (req, res, next) {
  res.json({ status: "ok" });
});

routes.forEach((route) => {
  routes.forEach((route) => {
    try {
      app[route.method.toLowerCase()](route.url, route.handler);
    } catch {
      console.warn(`Error creating route ${route}}`);
    }
  });
});

const start = async () => {
  var server;
  try {
    server = app.listen(80, async function () {
      console.log("Server started at port 80");
      await mongoose.connect(DB_URL);
      console.log("Database successfully connected");
    });
  } catch {
    console.log("Error in starting server");
    server.close();
  }
};

start();
