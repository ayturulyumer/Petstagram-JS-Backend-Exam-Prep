const express = require("express");
const handlebarsConfig = require("./config/handlebarsConfig.js");
const expressConfig = require("./config/expressConfig.js");
const routes = require("./routes.js");
const { PORT } = require("./constants.js");
const databaseConnect = require("./config/databaseConfig.js");

// local variables
const app = express();

// app configs
handlebarsConfig(app);
expressConfig(app);

// connect to db
databaseConnect()
  .then(() => console.log("Successfully connected to the database"))
  .catch((err) => console.log("Error", err));

// routing
app.use(routes);

app.listen(PORT, console.log(`Server is listening at port ${PORT}`));
