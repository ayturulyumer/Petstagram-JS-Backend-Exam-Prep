const Photo = require("../models/Photo.js");

exports.create = (photoData) => {
  Photo.create(photoData);
};

exports.getPosts = async () => {
  const posts = await Photo.find().lean();
  return posts;
};
