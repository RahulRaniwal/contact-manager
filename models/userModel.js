const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the user name"],
    },
    email: {
      type: String,
      required: [true, "Please enter remail address"],
      unique: [true, "Email already exist"],
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
