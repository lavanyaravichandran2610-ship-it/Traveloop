import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    title: String,
    destination: String,
    startDate: String,
    endDate: String,
    budget: Number,
    description: String,
  },
  { timestamps: true }
);

export default mongoose.model("Trip", tripSchema);