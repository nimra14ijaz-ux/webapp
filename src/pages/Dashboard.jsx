import React, { useState } from "react";

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("Home");

  const menuItems = ["Home", "Trainer Chat", "Subscription", "Settings", "Progress & Analysis"];

  const menuStyle = {
    display: "flex",
    flexDirection: "column",
    width: "220px",
    height: "100vh",
    backgroundColor: "#1E1E2F",
    color: "#fff",
    padding: "20px",
    boxSizing: "border-box",
  };

  const menuItemStyle = (item) => ({
    padding: "12px 16px",
    margin: "4px 0",
    cursor: "pointer",
    borderRadius: "6px",
    backgroundColor: activeMenu === item ? "#4B6CB7" : "transparent",
    transition: "background-color 0.3s",
  });

  const headerStyle = {
    backgroundColor: "#4B6CB7",
    color: "#fff",
    padding: "20px",
    fontSize: "24px",
    fontWeight: "bold",
  };

  const contentStyle = {
    flex: 1,
    backgroundColor: "#F4F5F7",
    padding: "20px",
    height: "100vh",
    overflowY: "auto",
  };

  const layoutStyle = {
    display: "flex",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "Home":
        return <div>Welcome to EliteFit Dashboard!</div>;
      case "Trainer Chat":
        return <div>Chat with your trainer here.</div>;
      case "Subscription":
        return <div>Manage your subscription plans.</div>;
      case "Settings":
        return <div>Update your profile and preferences.</div>;
      case "Progress & Analysis":
        return <div>View your monthly progress and stats.</div>;
      default:
        return <div>Welcome!</div>;
    }
  };

  return (
    <div style={layoutStyle}>
      <div style={menuStyle}>
        <div style={{ marginBottom: "30px", fontSize: "28px", fontWeight: "bold" }}>EliteFit</div>
        {menuItems.map((item) => (
          <div
            key={item}
            style={menuItemStyle(item)}
            onClick={() => setActiveMenu(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div style={{ flex: 1 }}>
        <div style={headerStyle}>{activeMenu}</div>
        <div style={contentStyle}>{renderContent()}</div>
      </div>
    </div>
  );
}