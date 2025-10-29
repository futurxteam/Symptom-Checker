import Symptom from "../models/Symptom.js";
import { spawn } from "child_process";
import translate from "google-translate-api-x";
// Get all symptoms (based on language)
export const getSymptoms = async (req, res) => {
  try {
    const lang = req.query.lang || "en";
    const symptoms = await Symptom.find();

    const formatted = symptoms.map(s => ({
      symptom: s.symptom[lang],
      possible_conditions: s.possible_conditions[lang]
    }));

    res.json(formatted);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Add a new symptom
export const addSymptom = async (req, res) => {
  try {
    const { symptom, possible_conditions } = req.body;

    const newSymptom = new Symptom({
      symptom,
      possible_conditions
    });

    await newSymptom.save();
    res.status(201).json({ message: "Symptom added successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }


};


// Malayalam translation map
const malayalamMap = {
  "Flu": "ജലദോഷം",
  "Migraine": "മൈഗ്രൈൻ",
  "Food Poisoning": "ഭക്ഷ്യ വിഷബാധ",
  "Heart Problem": "ഹൃദയ സംബന്ധമായ പ്രശ്നം",
  "Fatigue": "ക്ഷീണം",
  "Anxiety Disorder": "ആകുലതാ വ്യാധി",
  "General Weakness": "സാധാരണ ദുർബലത",
  "Unknown Condition": "അജ്ഞാത അവസ്ഥ"
};

export const predict = async (req, res) => {
  try {
    const { issue, keywords, lang } = req.body;
    const inputKeywords = [issue, ...keywords];
    const jsonInput = JSON.stringify(inputKeywords);

    const python = spawn("python3", ["./script/HealthPredict.py", jsonInput]);

    let result = "";
    python.stdout.on("data", data => {
      result += data.toString();
    });

    python.on("close", () => {
      const [problem, severity] = result.trim().split(",");

      let outputProblem = problem;

      // Use Malayalam translation map if needed
      if (lang === "ml") {
        outputProblem = malayalamMap[problem] || problem;
      }

      res.json({
        problem: outputProblem,
        severity: Number(severity)
      });
    });

  } catch (err) {
    res.status(500).json({ error: "Prediction error" });
  }
};
