import React, { useState } from "react";

export default function Settings() {
  const [form, setForm] = useState({
    name: "Ali Khan",
    email: "ali@gmail.com",
    password: "",
    notifications: true,
    darkMode: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    alert("Settings Saved!");
  };

  return (
    <div
      style={{
        padding: "20px",
        background: "#0f2027",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Settings</h2>

      <div
        style={{
          maxWidth: "500px",
          margin: "auto",
          background: "rgba(20,25,30,0.9)",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 0 20px rgba(0,255,150,0.15)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Name */}
        <div style={{ marginBottom: "15px" }}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {/* Email */}
        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: "15px" }}>
          <label>New Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {/* Notifications Toggle */}
        <div style={toggleRow}>
          <span>Enable Notifications</span>
          <input
            type="checkbox"
            name="notifications"
            checked={form.notifications}
            onChange={handleChange}
          />
        </div>

        {/* Dark Mode Toggle */}
        <div style={toggleRow}>
          <span>Dark Mode</span>
          <input
            type="checkbox"
            name="darkMode"
            checked={form.darkMode}
            onChange={handleChange}
          />
        </div>

        {/* Save Button */}
        <button onClick={handleSave} style={saveBtn}>
          Save Changes
        </button>
      </div>
    </div>
  );
}

/* Styles */

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  borderRadius: "8px",
  border: "none",
  outline: "none",
  background: "#1e2a30",
  color: "#fff",
};

const toggleRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "15px",
};

const saveBtn = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "#00ff99",
  color: "#000",
  fontWeight: "bold",
  cursor: "pointer",
};