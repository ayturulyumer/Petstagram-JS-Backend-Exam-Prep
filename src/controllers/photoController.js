const router = require("express").Router();
const photoService = require("../services/photoService.js");
const { getErrorMessage } = require("../utils/errorHelpers.js");

router.get("/", async (req, res) => {
  const posts = await photoService.getAllPosts().lean();
  res.render("photos", { posts });
});

router.get("/create", (req, res) => {
  res.render("photos/create");
});

router.post("/create", async (req, res) => {
  const postData = {
    ...req.body,
    owner: req.user._id,
  };
  try {
    await photoService.create(postData);
    res.redirect("/photos");
  } catch (err) {
    res.render("photos/create", { error: getErrorMessage(err) });
  }
});

router.get("/details/:postId", async (req, res) => {
  const postId = req.params.postId;
  const post = await photoService.getOnePost(postId).lean();
  const isOwner = req.user._id == post.owner._id;
  res.render("photos/details", { post, isOwner });
});

router.get("/details/:postId/delete", async (req, res) => {
  const postId = req.params.postId;
  await photoService.deleteOnePost(postId);
  res.redirect("/photos");
});

router.get("/details/:postId/edit", async (req, res) => {
  const postId = req.params.postId;
  const post = await photoService.getOnePost(postId).lean();
  res.render("photos/edit", { post });
});

router.post("/details/:postId/edit", async (req, res) => {
  const postId = req.params.postId;
  const postData = req.body;
  const updatedPost = await photoService.updateOnePost(postId, postData);
  updatedPost.save();
  res.redirect(`/photos/details/${postId}`)
});

module.exports = router;
