const path = require("path");
const express = require("express");
const nunjucks = require("nunjucks");

const routes = require(path.resolve(__dirname, "routes", "index"));

const server = express();

server.use(express.static(path.resolve(__dirname, "../public")));
server.use(routes);
server.set("view engine", "njk");

nunjucks.configure(path.resolve(__dirname, "views"), {
  express: server,
  autoescape: false,
  noCache: true,
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
