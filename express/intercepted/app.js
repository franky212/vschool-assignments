const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const morgan = require("morgan");

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/events", require("./routes/events.js"));
app.use("/artists", require("./routes/artists.js"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
