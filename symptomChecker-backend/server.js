import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import symptomRoutes from "./routes/symptomRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors({ origin: "*" })); 
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.json({ message: 'Symptomate Backend API is running!' });
});
app.use("/api/symptoms", symptomRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
