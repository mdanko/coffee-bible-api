import mongoose from "mongoose";

const coffeeSchema = mongoose.Schema(
  {
    roastery: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    farm: {
      type: String,
      required: true,
    },
    process: {
      type: String,
      required: true,
    },
    flavourNotes: {
      type: Array,
    },
    image: {
      type: String,
    },
    rating: {
      type: Number,
      required: true,
    },
    isUnusual: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    collection: "coffee",
    timestamps: true,
  }
);

const Coffee = mongoose.model("Coffee", coffeeSchema);

export default Coffee;
