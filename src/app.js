const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("TEST");
});

app.listen(3000, console.log("Server is listening at port 3000"));
