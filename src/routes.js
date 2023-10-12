const router = require("express").Router();

const homeController = require("./controllers/homeController.js");
const userController = require("./controllers/userController.js");
const photoController = require("./controllers/photoController.js");

router.use(homeController);
router.use("/users", userController);
router.use("/photos", photoController);
router.get("*", (req, res) => {
  res.redirect("/404");
});

module.exports = router;
