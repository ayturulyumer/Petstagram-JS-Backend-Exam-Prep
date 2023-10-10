const constants = {
  PORT: 3000,
  // REMINDER !! Change the last part with the proper database
  url: "mongodb://localhost:27017/petstagram",
  // bcrypt salt rounds
  SALT: 10,
  SECRET: "37b6ea60-80aa-46ed-8263-1bf2df15c9c0",
};

module.exports = constants;
