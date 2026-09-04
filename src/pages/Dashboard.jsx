import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  // =========================
  // CHART DATA
  // =========================

  const userGrowthData = [
    { month: "Jan", users: 420 },
    { month: "Feb", users: 560 },
    { month: "Mar", users: 690 },
    { month: "Apr", users: 820 },
    { month: "May", users: 970 },
    { month: "Jun", users: 1080 },
    { month: "Jul", users: 1160 },
    { month: "Aug", users: 1250 },
  ];

  const workoutActivityData = [
    { month: "Jan", workouts: 180 },
    { month: "Feb", workouts: 240 },
    { month: "Mar", workouts: 310 },
    { month: "Apr", workouts: 370 },
    { month: "May", workouts: 450 },
    { month: "Jun", workouts: 510 },
    { month: "Jul", workouts: 580 },
    { month: "Aug", workouts: 650 },
  ];

  const postureAnalysisData = [
    { month: "Jan", analyses: 70 },
    { month: "Feb", analyses: 100 },
    { month: "Mar", analyses: 145 },
    { month: "Apr", analyses: 190 },
    { month: "May", analyses: 245 },
    { month: "Jun", analyses: 300 },
    { month: "Jul", analyses: 365 },
    { month: "Aug", analyses: 430 },
  ];

  // =========================
  // RECENT ACTIVITY
  // =========================

  const recentActivities = [
    {
      icon: "👤",
      title: "New User Registered",
      description: "A new user has registered on Elite-Fit.",
      time: "5 minutes ago",
    },
    {
      icon: "🏋️",
      title: "Workout Completed",
      description: "A user completed their assigned workout.",
      time: "20 minutes ago",
    },
    {
      icon: "🤖",
      title: "New Posture Analysis",
      description: "AI posture analysis was completed.",
      time: "45 minutes ago",
    },
    {
      icon: "💳",
      title: "Subscription Activated",
      description: "A user successfully activated a subscription.",
      time: "1 hour ago",
    },
  ];

  // =========================
  // STATISTICS
  // =========================

  const statistics = [
    {
      icon: "👥",
      title: "Total Users",
      value: "1,250",
      change: "+12%",
      description: "from last month",
    },
    {
      icon: "🟢",
      title: "Active Users",
      value: "890",
      change: "+8%",
      description: "from last month",
    },
    {
      icon: "🏋️",
      title: "Workout Plans",
      value: "650",
      change: "+15%",
      description: "from last month",
    },
    {
      icon: "🥗",
      title: "Diet Plans",
      value: "180",
      change: "+10%",
      description: "from last month",
    },
    {
      icon: "🤖",
      title: "Posture Analyses",
      value: "430",
      change: "+18%",
      description: "from last month",
    },
    {
      icon: "💳",
      title: "Active Subscriptions",
      value: "320",
      change: "+7%",
      description: "from last month",
    },
  ];

  return (
    <>
      {/* =====================================================
          INTERNAL CSS
      ===================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .elite-dashboard {
          min-height: 100vh;
          width: 100%;
          background: #f5f7fb;
          padding: 28px;
          font-family: Arial, Helvetica, sans-serif;
          color: #1f2937;
        }

        .dashboard-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        /* =========================
           HEADER
        ========================= */

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 28px;
        }

        .dashboard-title {
          margin: 0;
          font-size: 30px;
          font-weight: 700;
          color: #111827;
        }

        .dashboard-subtitle {
          margin: 7px 0 0;
          font-size: 14px;
          color: #6b7280;
        }

        .dashboard-date {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 11px 17px;
          font-size: 13px;
          color: #4b5563;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }

        /* =========================
           STATISTICS
        ========================= */

        .statistics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 25px;
        }

        .stat-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 21px;
          box-shadow: 0 3px 12px rgba(0,0,0,0.05);
          transition: all 0.25s ease;
        }

        .stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 7px 18px rgba(0,0,0,0.08);
        }

        .stat-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .stat-icon {
          width: 45px;
          height: 45px;
          border-radius: 11px;
          background: #ecfdf5;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 21px;
        }

        .stat-change {
          font-size: 12px;
          font-weight: 600;
          color: #059669;
          background: #ecfdf5;
          padding: 5px 8px;
          border-radius: 6px;
        }

        .stat-value {
          margin: 18px 0 5px;
          font-size: 29px;
          font-weight: 700;
          color: #111827;
        }

        .stat-title {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
        }

        .stat-description {
          margin: 6px 0 0;
          font-size: 12px;
          color: #9ca3af;
        }

        /* =========================
           CHART GRID
        ========================= */

        .charts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 25px;
        }

        .chart-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 22px;
          box-shadow: 0 3px 12px rgba(0,0,0,0.05);
        }

        .chart-card.full-width {
          grid-column: span 2;
        }

        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .chart-title {
          margin: 0;
          font-size: 18px;
          font-weight: 700;
          color: #111827;
        }

        .chart-subtitle {
          font-size: 12px;
          color: #9ca3af;
        }

        /* =========================
           RECENT ACTIVITY
        ========================= */

        .activity-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 22px;
          box-shadow: 0 3px 12px rgba(0,0,0,0.05);
        }

        .activity-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }

        .activity-title {
          margin: 0;
          font-size: 20px;
          font-weight: 700;
          color: #111827;
        }

        .activity-subtitle {
          margin: 5px 0 0;
          font-size: 13px;
          color: #6b7280;
        }

        .activity-list {
          display: flex;
          flex-direction: column;
        }

        .activity-item {
          display: flex;
          align-items: center;
          padding: 15px 0;
          border-bottom: 1px solid #eef0f2;
        }

        .activity-item:last-child {
          border-bottom: none;
        }

        .activity-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #ecfdf5;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 19px;
          margin-right: 14px;
          flex-shrink: 0;
        }

        .activity-content {
          flex: 1;
        }

        .activity-content h3 {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          color: #111827;
        }

        .activity-content p {
          margin: 5px 0 0;
          font-size: 12px;
          color: #6b7280;
        }

        .activity-time {
          font-size: 11px;
          color: #9ca3af;
          white-space: nowrap;
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 1000px) {

          .statistics-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .charts-grid {
            grid-template-columns: 1fr;
          }

          .chart-card.full-width {
            grid-column: span 1;
          }

        }

        @media (max-width: 650px) {

          .elite-dashboard {
            padding: 15px;
          }

          .dashboard-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }

          .statistics-grid {
            grid-template-columns: 1fr;
          }

          .charts-grid {
            grid-template-columns: 1fr;
          }

          .chart-card.full-width {
            grid-column: span 1;
          }

          .activity-item {
            align-items: flex-start;
          }

          .activity-time {
            display: none;
          }

        }

      `}</style>

      {/* =====================================================
          DASHBOARD
      ===================================================== */}

      <div className="elite-dashboard">

        <div className="dashboard-container">

          {/* ================= HEADER ================= */}

          <div className="dashboard-header">

            <div>
              <h1 className="dashboard-title">
                Dashboard
              </h1>

              <p className="dashboard-subtitle">
                Welcome to Elite-Fit Admin Panel
              </p>
            </div>

            <div className="dashboard-date">
              September 2026
            </div>

          </div>


          {/* ================= STATISTICS ================= */}

          <div className="statistics-grid">

            {statistics.map((stat, index) => (

              <div className="stat-card" key={index}>

                <div className="stat-top">

                  <div className="stat-icon">
                    {stat.icon}
                  </div>

                  <span className="stat-change">
                    {stat.change}
                  </span>

                </div>

                <div className="stat-value">
                  {stat.value}
                </div>

                <h3 className="stat-title">
                  {stat.title}
                </h3>

                <p className="stat-description">
                  {stat.description}
                </p>

              </div>

            ))}

          </div>


          {/* ================= CHARTS ================= */}

          <div className="charts-grid">

            {/* USER GROWTH */}

            <div className="chart-card">

              <div className="chart-header">

                <h2 className="chart-title">
                  User Growth
                </h2>

                <span className="chart-subtitle">
                  Monthly
                </span>

              </div>

              <ResponsiveContainer width="100%" height={300}>

                <LineChart data={userGrowthData}>

                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#e5e7eb"
                  />

                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 12 }}
                  />

                  <YAxis
                    tick={{ fontSize: 12 }}
                  />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#14b8a6"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                    name="Users"
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>


            {/* WORKOUT ACTIVITY */}

            <div className="chart-card">

              <div className="chart-header">

                <h2 className="chart-title">
                  Workout Activity
                </h2>

                <span className="chart-subtitle">
                  Monthly
                </span>

              </div>

              <ResponsiveContainer width="100%" height={300}>

                <BarChart data={workoutActivityData}>

                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#e5e7eb"
                  />

                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 12 }}
                  />

                  <YAxis
                    tick={{ fontSize: 12 }}
                  />

                  <Tooltip />

                  <Bar
                    dataKey="workouts"
                    fill="#14b8a6"
                    radius={[5, 5, 0, 0]}
                    name="Completed Workouts"
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>


            {/* POSTURE ANALYSIS */}

            <div className="chart-card full-width">

              <div className="chart-header">

                <h2 className="chart-title">
                  Posture Analysis Activity
                </h2>

                <span className="chart-subtitle">
                  Monthly
                </span>

              </div>

              <ResponsiveContainer width="100%" height={300}>

                <LineChart data={postureAnalysisData}>

                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#e5e7eb"
                  />

                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 12 }}
                  />

                  <YAxis
                    tick={{ fontSize: 12 }}
                  />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="analyses"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                    name="Posture Analyses"
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </div>


          {/* ================= RECENT ACTIVITY ================= */}

          <div className="activity-card">

            <div className="activity-header">

              <div>

                <h2 className="activity-title">
                  Recent Activity
                </h2>

                <p className="activity-subtitle">
                  Latest activities in the Elite-Fit system
                </p>

              </div>

            </div>


            <div className="activity-list">

              {recentActivities.map((activity, index) => (

                <div
                  className="activity-item"
                  key={index}
                >

                  <div className="activity-icon">
                    {activity.icon}
                  </div>

                  <div className="activity-content">

                    <h3>
                      {activity.title}
                    </h3>

                    <p>
                      {activity.description}
                    </p>

                  </div>

                  <span className="activity-time">
                    {activity.time}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </>
  );
}