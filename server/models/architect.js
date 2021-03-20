const mongoose = require("mongoose");
const validator = require("validator");

const architectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  born: {
    type: Date,
    required: true,
  },
  died: {
    type: Date,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  awards: { type: String },
  knownFor: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    validate(value) {
      if (!validator.default.isURL(value)) {
        throw new Error("Not a valid website");
      }
    },
  },
});

architectSchema.virtual("buildings", {
  ref: "building",
  localField: "_id",
  foreignField: "architect",
});

const Architect = mongoose.model("architect", architectSchema);

module.exports = Architect;
