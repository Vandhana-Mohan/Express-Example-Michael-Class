const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.send("Here are the students");
});

router.get("/:name", (request, response) => {
  const { name } = request.params;
  response.send(`Profile: ${name}`);
});

module.exports = router;
