const mongoose = require("mongoose");

//user schema
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
});

// export
const User = mongoose.model("User", userSchema);
module.exports = User;
