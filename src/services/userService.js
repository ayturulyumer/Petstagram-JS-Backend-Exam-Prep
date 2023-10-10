const User = require("../models/User.js");

exports.login = (username, password) => {};

exports.register = async (userData) => {
  const user = User.findOne({ username: userData.username });
  if (user) {
    throw new Error("Username already exists !");
  }
  User.create(userData);
};
