const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    petamount: {
      type: Number,
      required: true,
    },
    petname: {
      type: String,
      required: true,
      unique: true
    },
    petsort: {
      type: [String],
      required: true,
      enum: ['cat', 'dog'],
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
      enum: ['male', 'female'],
    },
    petcolor: {
      type: [String],
      required: true,
    },
    pethair: {
      type: [String],
      required: true,
      enum: ['long hair', 'medium hair', 'short hair', 'no hair',
      'wavy hair', 'curly hair'],
    },
    petvaccinescat: {
      type: [String],
      type: Date,
      required: true,
    },
    petvaccinesdog: {
      type: [String],
      type: Date,
      required: true,
    },
    petpicture: {
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