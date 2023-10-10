const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt.js");
const { SECRET } = require("../constants.js");

exports.login = async (username, password) => {
  // find user

  const user = await User.findOne({ username });


  if (!user) {
    throw new Error("Invalid username or password !");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid username or password !");
  }

  // create the payload
  const payload = {
    _id: user._id,
    username: user.username,
    email: user.email,
  };

  // generate the token
  const token = await jwt.sign(payload, SECRET, { expiresIn: "2d" });

  // if everything goes right return the generated token
  return token;
};

exports.register = async (userData) => {
  const user = await User.exists({ username: userData.username });
  if (user) {
    throw new Error("Username already exists !");
  }

  return User.create(userData);
};
