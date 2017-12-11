const express = require("express");
const artists = express.Router();

const data = [
  {
    "artist": "RAMIREZ",
    "date": "Today"
  }
];

artists.route("/")
  .get((req, res) => {
    return res.send(data);
  });

module.exports = artists;
