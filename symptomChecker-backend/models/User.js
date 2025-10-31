import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  gender: String,
  insuranceNo: String,
  height: Number,
  weight: Number
});

export default mongoose.model("User", userSchema);
