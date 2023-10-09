const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("TEST");
  });

module.exports = router;
