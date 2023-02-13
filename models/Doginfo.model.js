const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const dogSchema = new Schema(
  {
    dogamount: {
      type: Number,
      required: true,
    },
    dogname: {
      type: String,
      required: true,
      unique: true
    },
    dogbreed: {
      type: [String],
      required: true,
      unique: true,
    },
    dogbirth: {
      type: Date,
      required: true,
      trim: true,
    },
    dogsex: {
      type: [String],
      required: true,
      enum: ['male', 'female'],
    },
    dogcolor: {
      type: [String],
      required: true,
    },
    doghair: {
      type: [String],
      required: true,
      enum: ['long hair', 'medium hair', 'short hair', 'no hair',
      'wavy hair', 'curly hair'],
    },
    dogvaccines: {
      type: [String],
      type: Date,
      required: true,
    },
    dogmedicalhistory: {

    },
    dogpicture: {
      type: Image,
      required: true,
    },
    
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Dog = model("Dog", dogSchema);

module.exports = Dog;