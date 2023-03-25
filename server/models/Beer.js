const { Schema, model } = require("mongoose");
const brewerySchema = require("./Brewery");

const beerSchema = new Schema(
  {
    beerId: {
      type: Number,
      required: true,
      unique: true,
    },
    beerName: {
      type: String,
      required: true,
      trim: true,
    },
    beerDescription: {
      type: String,
      required: true,
      trim: true,
      maxLength: 150,
    },
    beerStyle: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    beerAbv: {
      type: Number,
      required: true,
    },
    beerBrewery: { brewerySchema },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Beer = model("Beer", beerSchema);

module.exports = Beer;
