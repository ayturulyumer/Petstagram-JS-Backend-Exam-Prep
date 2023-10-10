const User = require("../models/User.js");

exports.login = (username, password) => {};

exports.register = async (userData) => {
  const user = await User.exists({ username: userData.username });
  if (user) {
    throw new Error("Username already exists !");
  }

  return User.create(userData);
};
