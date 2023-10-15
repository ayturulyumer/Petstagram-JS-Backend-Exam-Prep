const router = require("express").Router();

const photoService = require("../services/photoService.js");
const { isAuth } = require("../middlewares/authMiddleware.js");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/404", (req, res) => {
  res.render("404");
});

router.get("/profile", isAuth, async (req, res) => {
  const userId = req.user._id;
  const posts = await photoService.getByOwner(userId).lean();

  res.render("profile", { posts, postCount: posts.length });
});

module.exports = router;
