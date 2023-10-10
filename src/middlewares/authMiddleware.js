const jwt = require("../lib/jwt.js");
const { SECRET } = require("../constants.js");

exports.auth = async (req, res, next) => {
  const token = req.cookies["token"];

  if (token) {
    try {
      const decodedToken = await jwt.verify(token, SECRET);
      // set the token to req.user
      req.user = decodedToken;
      next();
    } catch (err) {
      res.clearCookie("token");
      res.redirect("/users/login")
    }
  } else {
    next();
  }
};
