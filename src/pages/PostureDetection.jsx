import React, { useState } from "react";

export default function PostureDetection() {
  const [status, setStatus] = useState("Good");

  return (
    <div
      style={{
        padding: "20px",
        background: "#0f2027",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        Posture Detection
      </h2>

      {/* Main Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
        }}
      >
        {/* Left Card - Live Detection */}
        <div
          style={{
            background: "rgba(20,25,30,0.9)",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 0 20px rgba(0,255,150,0.15)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h3 style={{ marginBottom: "15px", color: "#00ffcc" }}>
            Real-Time Posture
          </h3>

          {/* Image Placeholder */}
          <div
            style={{
              width: "100%",
              height: "250px",
              background:
                "url('https://via.placeholder.com/400x250') center/cover",
              borderRadius: "10px",
              marginBottom: "15px",
            }}
          ></div>

          {/* Status */}
          <div
            style={{
              padding: "10px",
              borderRadius: "8px",
              textAlign: "center",
              fontWeight: "bold",
              background:
                status === "Good" ? "#00ff99" : "#ff4d4d",
              color: status === "Good" ? "#000" : "#fff",
            }}
          >
            {status === "Good"
              ? "Good Posture Detected"
              : "Bad Posture Detected"}
          </div>

          {/* Buttons */}
          <div style={{ marginTop: "15px" }}>
            <button
              onClick={() => setStatus("Good")}
              style={btnStyle}
            >
              Set Good
            </button>

            <button
              onClick={() => setStatus("Bad")}
              style={{
                ...btnStyle,
                background: "#ff4d4d",
                color: "#fff",
              }}
            >
              Set Bad
            </button>
          </div>
        </div>

        {/* Right Panel */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Alerts */}
          <div style={cardStyle}>
            <h3 style={titleStyle}>Posture Alerts</h3>

            <p style={{ marginBottom: "10px" }}>
              ⚠️ Slouching detected (2 times)
            </p>
            <p>⚠️ Neck bending detected (1 time)</p>
          </div>

          {/* Stats */}
          <div style={cardStyle}>
            <h3 style={titleStyle}>Today Stats</h3>

            <p>✔ Good Posture: 4 hrs</p>
            <p>❌ Bad Posture: 1 hr</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Styles */

const cardStyle = {
  background: "rgba(20,25,30,0.9)",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 0 20px rgba(0,255,150,0.15)",
  backdropFilter: "blur(10px)",
};

const titleStyle = {
  marginBottom: "10px",
  color: "#00ffcc",
};

const btnStyle = {
  padding: "8px 12px",
  border: "none",
  borderRadius: "6px",
  background: "#00ccff",
  color: "#000",
  marginRight: "10px",
  cursor: "pointer",
};