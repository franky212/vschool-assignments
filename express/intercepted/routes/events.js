const express = require("express");
const events = express.Router();

events.route("/")
  .get((req, res) => {
    return res.send(req.body);
  })

module.exports = events;
