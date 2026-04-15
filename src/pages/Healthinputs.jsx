import React from "react";

const healthData = [
  {
    id: 1,
    name: "Ali Khan",
    weight: "70 kg",
    height: "5.8 ft",
    bmi: "22.5",
    heartRate: "72 bpm",
    status: "Normal",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    weight: "85 kg",
    height: "5.5 ft",
    bmi: "28.1",
    heartRate: "90 bpm",
    status: "Overweight",
  },
  {
    id: 3,
    name: "Usman Tariq",
    weight: "60 kg",
    height: "5.7 ft",
    bmi: "19.2",
    heartRate: "68 bpm",
    status: "Fit",
  },
];

export default function HealthInputs() {
  return (
    <div
      style={{
        padding: "20px",
        background: "#0f2027",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Health Inputs</h2>

      <div
        style={{
          background: "rgba(20,25,30,0.9)",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 0 20px rgba(0,255,150,0.15)",
          backdropFilter: "blur(10px)",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead
            style={{
              background: "rgba(0,255,150,0.1)",
            }}
          >
            <tr>
              <th style={thStyle}>#</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Weight</th>
              <th style={thStyle}>Height</th>
              <th style={thStyle}>BMI</th>
              <th style={thStyle}>Heart Rate</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>

          <tbody>
            {healthData.map((user, index) => (
              <tr
                key={user.id}
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(0,255,150,0.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <td style={tdStyle}>{index + 1}</td>
                <td style={tdStyle}>{user.name}</td>
                <td style={tdStyle}>{user.weight}</td>
                <td style={tdStyle}>{user.height}</td>

                <td style={tdStyle}>
                  <span
                    style={{
                      color: "#00e6e6",
                      fontWeight: "bold",
                    }}
                  >
                    {user.bmi}
                  </span>
                </td>

                <td style={tdStyle}>{user.heartRate}</td>

                <td style={tdStyle}>
                  <span
                    style={{
                      padding: "5px 10px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      background:
                        user.status === "Fit"
                          ? "#00ff99"
                          : user.status === "Normal"
                          ? "#00ccff"
                          : "#ff4d4d",
                      color:
                        user.status === "Fit"
                          ? "#000"
                          : "#fff",
                    }}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* Reusable Styles */

const thStyle = {
  padding: "12px",
  textAlign: "left",
  color: "#00ffcc",
};

const tdStyle = {
  padding: "12px",
};