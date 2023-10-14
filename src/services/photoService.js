const Photo = require("../models/Photo.js");

exports.create = (postData) => {
  Photo.create(postData);
};

exports.getAllPosts = () => Photo.find().populate("owner");

exports.getOnePost = (postId) => Photo.findById(postId).populate("owner");

exports.deleteOnePost = (postId) => Photo.findByIdAndDelete(postId);
