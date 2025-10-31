import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    gender: "",
    insurance: "",
    accepted: false,
  });
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in Name and Phone Number before requesting OTP.");
      return;
    }
    if (!formData.accepted) {
      alert("Please accept Terms and Conditions first.");
      return;
    }
    setOtpSent(true);
    alert("OTP sent successfully! (Use 1234)");
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp === "1234") {
      alert("Signup successful!");
      navigate("/login");
    } else {
      alert("Incorrect OTP. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <form
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
          position: "relative",
        }}
      >
        {/* Back button */}
        <button
          type="button"
          onClick={() => navigate("/")}
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: "#e9ecef",
            color: "#333",
            border: "none",
            borderRadius: "5px",
            padding: "5px 10px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          ← Home
        </button>

        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Sign Up</h2>

        <label>Name *</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <label>Phone Number *</label>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
        />

        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          style={inputStyle}
        />

        <label>Gender</label>
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          style={inputStyle}
        />

        <label>Insurance Number</label>
        <input
          type="text"
          name="insurance"
          value={formData.insurance}
          onChange={handleChange}
          style={inputStyle}
        />

        <div style={{ marginTop: "1rem" }}>
          <input
            type="checkbox"
            name="accepted"
            checked={formData.accepted}
            onChange={handleChange}
          />{" "}
          <label>I accept the Terms and Conditions</label>
        </div>

        {!otpSent ? (
          <button
            onClick={handleSendOtp}
            style={{
              ...buttonStyle,
              backgroundColor: formData.accepted ? "#007bff" : "#999",
              cursor: formData.accepted ? "pointer" : "not-allowed",
              marginTop: "1rem",
            }}
            disabled={!formData.accepted}
          >
            Send OTP
          </button>
        ) : (
          <>
            <label>Enter OTP</label>
            <input
              type="text"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={inputStyle}
            />
            <button
              onClick={handleVerifyOtp}
              style={{
                ...buttonStyle,
                backgroundColor: "#28a745",
                marginTop: "0.5rem",
              }}
            >
              Verify OTP
            </button>
          </>
        )}

        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          Already a user?{" "}
          <a href="/login" style={{ color: "#007bff", textDecoration: "none" }}>
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px",
  margin: "8px 0 16px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  transition: "background-color 0.3s ease",
};

export default Signup;
