const express = require("express");
const handlebarsConfig = require("./config/handlebarsConfig.js");
const expressConfig = require("./config/expressConfig.js");
const routes = require("./routes.js");

// local variables
const app = express();

// app configs
handlebarsConfig(app);
expressConfig(app);

// routing
app.use(routes);

app.listen(3000, console.log("Server is listening at port 3000"));
