import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestOtp, verifyOtp } from "./api"; // Import your API functions
import "./style/login.css";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    accepted: false,
  });
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false); // Optional: show loading

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in Name and Phone Number before requesting OTP.");
      return;
    }
    if (!formData.accepted) {
      alert("Please accept Terms and Conditions first.");
      return;
    }

    try {
      setLoading(true);
      const res = await requestOtp({ name: formData.name, phone: formData.phone });
      alert(`OTP sent successfully! (OTP: ${res.otp})`);
      setOtpSent(true);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp) {
      alert("Please enter OTP");
      return;
    }

    try {
      setLoading(true);
      const res = await verifyOtp({ name: formData.name, phone: formData.phone, otp });
      // Save JWT token in localStorage
      localStorage.setItem("token", res.token);
      localStorage.setItem("tokenExpiry", new Date().getTime() + 24 * 60 * 60 * 1000);
      alert(`Login successful! Welcome ${res.user.name}`);
      navigate("/"); // redirect to home
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <button
          type="button"
          className="back-btn"
          onClick={() => navigate("/")}
        >
          ← Home
        </button>

        <h2>Login</h2>

        <label>Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label>Phone Number *</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <div className="terms">
          <input
            type="checkbox"
            name="accepted"
            checked={formData.accepted}
            onChange={handleChange}
          />
          <label>I accept the Terms and Conditions</label>
        </div>

        {!otpSent ? (
          <button
            onClick={handleSendOtp}
            className={`send-otp-btn ${formData.accepted ? "" : "disabled"}`}
            disabled={!formData.accepted || loading}
          >
            {loading ? "Sending..." : "Send OTP"}
          </button>
        ) : (
          <>
            <label>Enter OTP</label>
            <input
              type="text"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              onClick={handleVerifyOtp}
              className="verify-otp-btn"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}

        <p className="signup-text">
          New user?{" "}
          <a href="/signup">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
