const router = require("express").Router();
const photoService = require("../services/photoService.js");
const { getErrorMessage } = require("../utils/errorHelpers.js");
const { isAuth } = require("../middlewares/authMiddleware.js");

router.get("/", async (req, res) => {
  const posts = await photoService.getAllPosts().lean();
  res.render("photos", { posts });
});

router.get("/create", isAuth, (req, res) => {
  res.render("photos/create");
});

router.post("/create", isAuth, async (req, res) => {
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
  console.log(req.owner)
  const post = await photoService
    .getOnePost(postId)
    .populate("comments.user")
    .lean();
  const isOwner = req.user?._id == post.owner._id;
  res.render("photos/details", { post, isOwner });
});

router.get("/details/:postId/delete", isAuth, async (req, res) => {
  const postId = req.params.postId;
  
  try {
    if(req.user._id)
    await photoService.deleteOnePost(postId);
    res.redirect("/photos");
  } catch (err) {
    res.render(`/photos/details/${postId}`, {
      error: "Unsuccessfull attempt to delete the post!",
    });
  }
});

router.get("/details/:postId/edit", isAuth, async (req, res) => {
  const postId = req.params.postId;
  try {
    const post = await photoService.getOnePost(postId).lean();
    res.render("photos/edit", { post });
  } catch (err) {
    res.render("photos/edit", { error: getErrorMessage(err) });
  }
});

router.post("/details/:postId/edit", isAuth, async (req, res) => {
  const postId = req.params.postId;
  const post = req.body;
  try {
    const updatedPost = await photoService.updateOnePost(postId, post);
    await updatedPost.save();
    res.redirect(`/photos/details/${postId}`);
  } catch (err) {
    res.render(`photos/edit`, { post, error: getErrorMessage(err) });
  }
});

router.post("/details/:postId/comments", isAuth, async (req, res) => {
  const postId = req.params.postId;
  const { message } = req.body;
  const user = req.user._id;

  try {
    await photoService.addComment(postId, { user, message });
    res.redirect(`/photos/details/${postId}`);
  } catch (err) {
    res.render("photos/details", { error: getErrorMessage(err) });
  }
});

module.exports = router;
