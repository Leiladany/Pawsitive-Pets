const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const petSchema = new Schema(
  {
    petamount: {
      type: Number,
      required: true,
    },
    petname: {
      type: String,
      required: true,
    },
    petsort: {
      type: [String],
      required: true,
      enum: ['cat', 'dog'],
    },
    petbreed: {
      type: [String],
      required: true,
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
      type: String,
      required: true,
    },
    pethair: {
      type: [String],
      required: true,
      enum: ['long hair', 'medium hair', 'short hair', 'no hair',
      'wavy hair', 'curly hair'],
    },
    petvaccines: {
      type: String,
      type: Date,
      required: true,
    },
    petpicture: {
      imageUrl: String
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Pet = model("Pet", petSchema);

module.exports = Pet;