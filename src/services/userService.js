const User = require("../models/User.js");

exports.login = (username, password) => {};

exports.register = (userData) => {
  User.create(userData);
};
