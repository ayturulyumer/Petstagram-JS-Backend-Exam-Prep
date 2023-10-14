const Photo = require("../models/Photo.js");

exports.create = (postData) => {
  Photo.create(postData);
};

exports.getAllPosts = () => Photo.find().populate("owner");

exports.getOnePost = (postId) => {
  const post = Photo.findById(postId).populate("owner");
  return post;
};

exports.deleteOnePost = (postId) => Photo.findByIdAndDelete(postId);

exports.updateOnePost = (postId, postData) => {
  // set new  to true to return the updated post
  const post = Photo.findByIdAndUpdate(postId, postData, { new: true });
  return post;
};

exports.addComment = async (postId, commentData) => {
  const post = await  Photo.findById(postId);
  post.comments.push(commentData);
  return post.save();
};
