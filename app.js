// imports the express library code

const express = require("express");

// invoke express and return an application object
const app = express();

const studentsController = require("./Controllers/student-controller");
console.log("app:", app);

app.use("/students", studentsController);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/dashboard", (request, response) => {
  response.send("Admin Dashboard");
});

module.exports = app;
