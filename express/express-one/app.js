// Nodemon is a module that restarts your server when changes are made to start our server we use nodemon app.js instead of node
const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const animals = [];

app.get("/animals", (req, res) => {
  return res.send(animals);
});

app.post("/animals", (req, res) => {
  console.log(req.body);
  animals.push(req.body);
  return res.send({message: "Here is your new animal", object: req.body});
})

// Listen takes a port parameter for your local host, second paramter takes a function.
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
