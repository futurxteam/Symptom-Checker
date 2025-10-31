// src/api.js
const BASE_URL = "http://localhost:5000/api/auth"; // Change if backend URL is different

// Helper function to handle JSON responses
const handleResponse = async (response) => {
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "Something went wrong");
  }
  return data;
};

// Request OTP
export const requestOtp = async ({ name, phone }) => {
  const response = await fetch(`${BASE_URL}/request-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone }),
  });
  return handleResponse(response);
};

// Verify OTP
export const verifyOtp = async ({ name, phone, otp }) => {
  const response = await fetch(`${BASE_URL}/verify-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone, otp }),
  });
  return handleResponse(response);
};


