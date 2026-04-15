import React from "react";

const users = [
  {
    id: 1,
    name: "Ali Khan",
    email: "ali@gmail.com",
    plan: "Premium",
    status: "Active",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    email: "sara@gmail.com",
    plan: "Basic",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Usman Tariq",
    email: "usman@gmail.com",
    plan: "Standard",
    status: "Active",
  },
];

export default function UserProfiles() {
  return (
    <div
      style={{
        padding: "20px",
        background: "#0f2027",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>User Profiles</h2>

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
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Plan</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <td style={tdStyle}>{index + 1}</td>
                <td style={tdStyle}>{user.name}</td>
                <td style={tdStyle}>{user.email}</td>

                <td style={tdStyle}>
                  <span
                    style={{
                      color: "#00e6e6",
                      fontWeight: "bold",
                    }}
                  >
                    {user.plan}
                  </span>
                </td>

                <td style={tdStyle}>
                  <span
                    style={{
                      padding: "5px 10px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      background:
                        user.status === "Active"
                          ? "#00ff99"
                          : "#ff4d4d",
                      color:
                        user.status === "Active" ? "#000" : "#fff",
                    }}
                  >
                    {user.status}
                  </span>
                </td>

                <td style={tdStyle}>
                  <button style={editBtn}>Edit</button>
                  <button style={deleteBtn}>Delete</button>
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

const editBtn = {
  background: "#00ccff",
  color: "#000",
  border: "none",
  padding: "6px 12px",
  marginRight: "5px",
  borderRadius: "6px",
  cursor: "pointer",
};

const deleteBtn = {
  background: "#ff4d4d",
  color: "#fff",
  border: "none",
  padding: "6px 12px",
  borderRadius: "6px",
  cursor: "pointer",
};