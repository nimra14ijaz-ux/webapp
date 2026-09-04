import { Link, Routes, Route, Navigate } from "react-router-dom";

import UsersManagement from "./UsersManagement";
import PostureDetection from "./PostureDetection";
import DietAndWorkouts from "./DietAndWorkouts";
import AiChatAssistant from "./AiChatAssistant";
import SystemMonitoring from "./SystemMonitoring";
import Notifications from "./Notifications";
import Settings from "./Settings";
import Dashboard from "./Dashboard";
import Payment from "./Payment";

// Same style icons for sidebar
import {
  FiGrid,
  FiUsers,
  FiEdit3,
  FiActivity,
  FiMessageSquare,
  FiHeart,
  FiBell,
  FiSettings,
  FiCreditCard
} from "react-icons/fi";

import { IoMoonOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";

import logo from "../assets/logo.jpg";


function AdminHome() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      {/* ================= SIDEBAR ================= */}

      <div style={sidebar}>

        {/* LOGO */}

        <div style={logoContainer}>

          <img
            src={logo}
            width={50}
            height={50}
            alt="Logo"
            style={{ borderRadius: "50%" }}
          />

          <h2
            style={{
              color: "#F8C97F",
              margin: 0,
              fontSize: "26px",
              fontWeight: "bold"
            }}
          >
            EliteFit
          </h2>

        </div>


        {/* ================= SIDEBAR MENU ================= */}

        {/* Dashboard */}

        <Link
          to="/AdminHome/Dashboard"
          style={menuItem}
        >
          <FiGrid style={sidebarIcon} />
          Dashboard
        </Link>


        {/* Users Management */}

        <Link
          to="/AdminHome/UsersManagement"
          style={menuItem}
        >
          <FiUsers style={sidebarIcon} />
          Users Management
        </Link>


        {/* Posture Detection */}

        <Link
          to="/AdminHome/PostureDetection"
          style={menuItem}
        >
          <FiEdit3 style={sidebarIcon} />
          Posture Detection
        </Link>


        {/* Diet and Workouts */}

        <Link
          to="/AdminHome/DietAndWorkouts"
          style={menuItem}
        >
          <FiActivity style={sidebarIcon} />
          Diet and Workouts
        </Link>


        {/* AI Chat Assistant */}

        <Link
          to="/AdminHome/AiChatAssistant"
          style={menuItem}
        >
          <FiMessageSquare style={sidebarIcon} />
          AI Chat Assistant
        </Link>


        {/* System Monitoring */}

        <Link
          to="/AdminHome/SystemMonitoring"
          style={menuItem}
        >
          <FiHeart style={sidebarIcon} />
          System Monitoring
        </Link>


        {/* Notifications */}

        <Link
          to="/AdminHome/Notifications"
          style={menuItem}
        >
          <FiBell style={sidebarIcon} />
          Notifications
        </Link>


        {/* Payment */}

        <Link
          to="/AdminHome/Payment"
          style={menuItem}
        >
          <FiCreditCard style={sidebarIcon} />
          Payment
        </Link>


        {/* Settings */}

        <Link
          to="/AdminHome/Settings"
          style={menuItem}
        >
          <FiSettings style={sidebarIcon} />
          Settings
        </Link>

      </div>


      {/* ================= RIGHT SIDE ================= */}

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column"
        }}
      >

        {/* ================= HEADER ================= */}

        <div style={header}>

          <input
            type="text"
            placeholder="Search users, Diet and workouts, posture Detection ..."
            style={search}
          />


          <div style={rightHeader}>

            <IoMoonOutline style={iconStyle} />

            <IoIosNotificationsOutline
              style={iconStyle}
            />


            {/* Admin User */}

            <div style={userBox}>

              <div style={avatar}>
                👤
              </div>

              <div>

                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px"
                  }}
                >
                  Admin User
                </div>

                <div
                  style={{
                    fontSize: "12px",
                    color: "gray"
                  }}
                >
                  admin@elitefit.com
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ================= CONTENT ================= */}

        <div
          style={{
            padding: "20px",
            background: "#000000",
            flex: 1
          }}
        >

          <Routes>

            {/* Default Admin Page */}

            <Route
              path="/"
              element={
                <Navigate to="/AdminHome/Dashboard" />
              }
            />


            {/* Dashboard */}

            <Route
              path="Dashboard"
              element={<Dashboard />}
            />


            {/* Users Management */}

            <Route
              path="UsersManagement"
              element={<UsersManagement />}
            />


            {/* Posture Detection */}

            <Route
              path="PostureDetection"
              element={<PostureDetection />}
            />


            {/* Diet and Workouts */}

            <Route
              path="DietAndWorkouts"
              element={<DietAndWorkouts />}
            />


            {/* AI Chat Assistant */}

            <Route
              path="AiChatAssistant"
              element={<AiChatAssistant />}
            />


            {/* System Monitoring */}

            <Route
              path="SystemMonitoring"
              element={<SystemMonitoring />}
            />


            {/* Notifications */}

            <Route
              path="Notifications"
              element={<Notifications />}
            />


            {/* Payment */}

            <Route
              path="Payment"
              element={<Payment />}
            />


            {/* Settings */}

            <Route
              path="Settings"
              element={<Settings />}
            />

          </Routes>

        </div>

      </div>

    </div>
  );
}


export default AdminHome;


/* =====================================================
   STYLES
===================================================== */


/* LOGO */

const logoContainer = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "30px"
};


/* SIDEBAR */

const sidebar = {
  width: "250px",
  background: "#14B8A6",
  color: "white",
  padding: "20px",
  display: "flex",
  flexDirection: "column"
};


/* SIDEBAR MENU */

const menuItem = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "12px",
  color: "white",
  textDecoration: "none",
  marginBottom: "10px",
  borderRadius: "8px"
};


/* SIDEBAR ICONS - ALL SAME STYLE */

const sidebarIcon = {
  fontSize: "20px",
  minWidth: "20px",
  flexShrink: 0
};


/* HEADER */

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 20px",
  background: "#000000",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
};


/* SEARCH */

const search = {
  width: "350px",
  padding: "10px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  outline: "none"
};


/* RIGHT HEADER */

const rightHeader = {
  display: "flex",
  alignItems: "center",
  gap: "15px"
};


/* HEADER ICONS */

const iconStyle = {
  fontSize: "18px",
  cursor: "pointer",
  color: "white"
};


/* ADMIN USER BOX */

const userBox = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  color: "white"
};


/* AVATAR */

const avatar = {
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  background: "#000000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};