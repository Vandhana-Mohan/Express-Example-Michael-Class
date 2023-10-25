const app = require("./app");

// setting port to run our app on
const port = 3003;

app.listen(port, () => {
  console.log("App is running on port", port);
});
