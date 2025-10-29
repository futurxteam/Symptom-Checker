import mongoose from "mongoose";

const symptomSchema = new mongoose.Schema({
  symptom: {
    en: { type: String, required: true },
    ml: { type: String, required: true }
  },
  possible_conditions: {
    en: [{ type: String }],
    ml: [{ type: String }]
  }
});

const Symptom = mongoose.model("Symptom", symptomSchema);
export default Symptom;
