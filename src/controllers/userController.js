const router = require("express").Router();
const userService = require("../services/userService.js");

router.get("/login", (req, res) => {
  res.render("users/login");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const token = await userService.login({ username, password });
});

router.get("/register", (req, res) => {
  res.render("users/register");
});

router.post("/register", async (req, res) => {
  const userData = req.body;
  await userService.register(userData);
  res.redirect("/users/login");
});

module.exports = router;
