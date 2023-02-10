const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
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
      enum: ['long hair', 'medium hair', 'short hair', 'no hair', ],
    },
    dogvaccines: {
      type: [String],
      required: true,
    },
    dogmedicprocedures: {

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

const User = model("User", userSchema);

module.exports = User;