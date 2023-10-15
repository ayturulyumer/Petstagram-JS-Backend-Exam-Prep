const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required !"],
    minLength: [2, "Photo name must be at least 2 characters long !"],
  },
  image: {
    type: String,
    required: [true, "Image is required !"],
    match: [/^(http|https):\/\//, "Invalid url"],
  },
  age: {
    type: Number,
    required: [true, "Age is required !"],
    min: [1, "Age must be at least 1"],
    max: [100, "Age can't be bigger than 100 ! "],
  },
  description: {
    type: String,
    required: [true, "Description is required !"],
    minLength: [5, "Description must be at least 5 characters long !"],
    maxLength: [50, "Description can't be longer than 50 characters !"]
    
  },
  location: {
    type: String,
    required: [true, "Location is required !"],
    minLength: [5, "Location must be at least 5 characters long !"],
    maxLength: [50, "Location can't be longer than 50 characters !"]
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  comments: [
    {
      user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User",
      },
      message: {
        type: String,
        required: [true, "Comment message is required !"],
      },
    },
  ],
});

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
