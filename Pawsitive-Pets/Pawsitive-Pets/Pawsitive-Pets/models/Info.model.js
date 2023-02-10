const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    petname: {
      type: String,
      required: true,
      unique: true
    },
    petsort: {
      type: [String],
      required: true
    },
    petbreed: {
      type: [String],
      required: true,
      unique: true,
    },
    petbirth: {
      type: Date,
      required: true,
      trim: true,
    },
    petsex: {
      type: [String],
      required: true,
    },
    petcolor: {
      type: [String],
      required: true,
    },
    petvaccines: {
      type: String,
      required: true
    },
    petpicture: {
      type: String,
      required: true
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;