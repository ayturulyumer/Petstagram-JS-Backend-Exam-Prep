const constants = {
  PORT: 3000,
  // REMINDER !! Change the last part with the proper database
  url: "mongodb://localhost:27017/petstagram",
  // bcrypt salt rounds 
  SALT: 10,
};

module.exports = constants;
