const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.virtual("repeatPassword").set(function(value){
  if(this.password !== value){
    throw new Error("Password missmatch !")
  } 
})

const User = mongoose.model("User", userSchema);

module.exports = User;
