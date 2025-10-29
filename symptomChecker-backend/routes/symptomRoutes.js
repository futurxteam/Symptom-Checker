import express from "express";
import { getSymptoms, addSymptom ,predict} from "../controllers/symptomController.js";

const router = express.Router();

router.get("/", getSymptoms);
router.post("/", addSymptom);
router.post("/predict", predict);
export default router;
