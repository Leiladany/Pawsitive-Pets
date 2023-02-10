const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    catamount: {
      type: Number,
      equired: true,
    },
    catname: {
      type: String,
      required: true,
      unique: true
    },
    catbreed: {
      type: [String],
      required: true,
      unique: true,
    },
    catbirth: {
      type: Date,
      required: true,
      trim: true,
    },
    catsex: {
      type: [String],
      required: true,
      enum: ['male', 'female'],
    },
    catcolor: {
      type: [String],
      required: true,
    },
    cathair: {
      type: [String],
      required: true,
      enum: ['long hair', 'medium hair', 'short hair', 'no hair', ],
    },
    catvaccines: {
      type: [String],
      type: Date,
      required: true,
    },
    catmedicalhistory: {

    },
    catpicture: {
      type: Image,
      required: true,
    },
    
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;