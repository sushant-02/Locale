const mongoose = require("mongoose");
const validator = require("validator");

const buildingSchema = new mongoose.Schema({
  buildingName: {
    type: String,
    required: true,
    trim: true,
  },
  architect: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Architect",
  },
  architecturalStyle: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  long: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  started: {
    type: String,
    required: true,
  },
  completed: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    validate(value) {
      if (!validator.default.isURL(value)) {
        throw new Error("Invlid Image URL");
      }
    },
  },
  website: {
    type: String,
    validate(value) {
      if (!validator.default.isURL(value)) {
        throw new Error("Invalid building website");
      }
    },
  },
});

const Building = mongoose.model("building", buildingSchema);
module.exports = Building;
