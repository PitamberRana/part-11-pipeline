const express = require("express");
const routes = require("@util/routes");
const errorMiddleware = require("@middleware/errorMiddleware");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.send("ok");
});

app.get("/version", (req, res) => {
  res.send("1");
});

app.use(routes);

app.use(errorMiddleware);

module.exports = app;
