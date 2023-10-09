const mongoose = require("mongoose");
const { url } = require("../constants.js");

async function databaseConnect() {
  await mongoose.connect(url);
}

module.exports = databaseConnect;
