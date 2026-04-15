import React from "react";

export default function progressAnalysis() {
  const stats = [
    { title: "Workouts Completed", value: 24 },
    { title: "Calories Burned", value: "3200 kcal" },
    { title: "Current BMI", value: "22.5" },
  ];

  const progress = [
    { label: "Weekly Goal", percent: 80 },
    { label: "Weight Loss", percent: 60 },
    { label: "Muscle Gain", percent: 70 },
  ];

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
        Progress & Analysis
      </h2>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={cardStyle}
          >
            <h3 style={{ color: "#00ffcc" }}>{item.title}</h3>
            <h2>{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Progress Bars */}
      <div style={cardStyle}>
        <h3 style={{ marginBottom: "15px", color: "#00ffcc" }}>
          Progress Overview
        </h3>

        {progress.map((item, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <p>{item.label}</p>

            <div
              style={{
                width: "100%",
                height: "10px",
                background: "#1e2a30",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  width: `${item.percent}%`,
                  height: "100%",
                  background: "#00ff99",
                  borderRadius: "5px",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Simple Chart */}
      <div
        style={{
          ...cardStyle,
          marginTop: "20px",
        }}
      >
        <h3 style={{ marginBottom: "15px", color: "#00ffcc" }}>
          Weekly Activity
        </h3>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "10px",
            height: "150px",
          }}
        >
          {[40, 60, 80, 50, 70, 90, 65].map((val, index) => (
            <div
              key={index}
              style={{
                flex: 1,
                height: `${val}%`,
                background: "#00ccff",
                borderRadius: "5px",
              }}
              title={`Day ${index + 1}`}
            ></div>
          ))}
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