const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    favouritePosition: {
      type: String,
      enum: ['Goalkeeper', 'Defender', 'Midfielder', 'Forward'],
      default: null, 
    },
    preferredFoot: {
      type: String,
      enum: ["Left", "Right", "Both"], 
      default: null,
    },
    matchesPlayed: {
      type: Number,
      default: 0,
    },
    profilePicture: {
      type: String,
      default: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80', 
    },
    coverPhoto: {
      type: String,
      default: 'https://tokystorage.s3.amazonaws.com/images/default-cover.png', 
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
