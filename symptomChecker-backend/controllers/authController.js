import jwt from "jsonwebtoken";
import User from "../models/User.js";

const SECRET_KEY = process.env.JWT_SECRET || "secretkey";

export const requestOtp = async (req, res) => {
  try {
    const { name, phone } = req.body;

    if (!name || !phone)
      return res.status(400).json({ error: "Name and phone are required" });

    const otp = "123"; // Static OTP for now
    console.log(`📨 OTP for ${phone}: ${otp}`);

    res.json({ message: "OTP sent successfully", otp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { name, phone, otp } = req.body;
    if (otp !== "123") return res.status(400).json({ error: "Invalid OTP" });

    let user = await User.findOne({ phone });
    if (!user) user = await User.create({ name, phone });

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1d" });
    res.json({ message: "Login successful", token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
