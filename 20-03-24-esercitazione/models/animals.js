const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
    genus: {
      type: String,
      required: true,
      default: "no-genus",
    },
    species: {
      type: String,
      required: true,
      default: "no-species",
    },
    habitat: {
      type: String,
      required: false,
      default: "no-habitat",
    },
    created_at: {
        type: Date,
        required: false,
        default: Date.now,
    },
      updated_at: {
        type: Date,
        required: false,
        default: Date.now,
      },
    });

    module.exports = mongoose.model("Animal", animalSchema);