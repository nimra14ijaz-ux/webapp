
import { Link, Routes, Route, Navigate } from "react-router-dom";







function AdminHome() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      {/* Sidebar */}
      <div style={sidebar}>
        <h2 style={{ color: "#F48B3E" }}>ZameenArt</h2>

        
        
      </div>
      {/* RIGHT SIDE */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      {/* HEADER */}
        <div style={header}>
      {/* Search */}
          <input
            type="text"
            placeholder="Search users, architects, projects..."
            style={search}
          />

      {/* Right Section */}
          <div style={rightHeader}>

            <IoMoonOutline style={iconStyle} />
            <IoIosNotificationsOutline style={iconStyle} />

            {/* User */}
            <div style={userBox}>
              <div style={avatar}>👤</div>

              <div>
                <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                  Admin User
                </div>
                <div style={{ fontSize: "12px", color: "gray" }}>
                  admin@zameenart.com
                </div>
              </div>
            </div>

          </div>
        </div>

        

      </div>
    </div>
  );
}

export default AdminHome;
const sidebar = {
  width: "220px",
  background: "#315385",
  color: "white",
  padding: "20px",
  display: "flex",
  flexDirection: "column"
};

const menuItem = {
  display: "block",
  padding: "12px",
  color: "white",
  textDecoration: "none",
  marginBottom: "10px",
  borderRadius: "8px"
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 20px",
  background: "#fff",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
};

const search = {
  width: "350px",
  padding: "10px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  outline: "none"
};

const rightHeader = {
  display: "flex",
  alignItems: "center",
  gap: "15px"
};

const iconStyle = {
  fontSize: "18px",
  cursor: "pointer"
};

const userBox = {
  display: "flex",
  alignItems: "center",
  gap: "10px"
};

const avatar = {
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  background: "#e0ecff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};