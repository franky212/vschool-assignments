const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const uuid = require("uuid/v4");



app.use(bodyParser.json());

const bounties = [];

app.get("/bounties", (req, res) => {
  return res.send(bounties);
});

app.post("/bounties", (req, res) => {
  bounties.push(req.body);
  return res.send({
    message: "Here is your new Bounty",
    bounty: req.body
  });
});

app.listen(port, (req, res) => {
  console.log(`App is running on port ${port}`)
});
