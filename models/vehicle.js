const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vehicleSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["Bus", "Train", "Motor"],
      default: "Bus",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    regNumber: {
      type: String,
      required: true,
    },
    driver: {
      // type: String,
      type: Schema.Types.ObjectId,
      ref: "Employee",
      // required: true,
    },
    imageUrl: [{ img: { type: String } }],
    capacity: {
      type: Number,
      required: true,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Vehicle", vehicleSchema);
