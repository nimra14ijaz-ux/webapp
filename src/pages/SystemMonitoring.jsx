import React, { useState } from "react";

function SystemMonitoring() {
  // =========================================================
  // DEMO SYSTEM DATA
  // =========================================================

  const [services, setServices] = useState([
    {
      id: 1,
      name: "Backend API",
      description: "Elite-Fit backend services",
      status: "Online",
      uptime: "99.98%",
      response: "142 ms",
      lastChecked: "Just now",
    },
    {
      id: 2,
      name: "Database",
      description: "User and fitness data storage",
      status: "Online",
      uptime: "99.99%",
      response: "86 ms",
      lastChecked: "Just now",
    },
    {
      id: 3,
      name: "AI Fitness Assistant",
      description: "AI chatbot and recommendations",
      status: "Online",
      uptime: "99.95%",
      response: "320 ms",
      lastChecked: "Just now",
    },
    {
      id: 4,
      name: "Posture Detection",
      description: "AI posture analysis service",
      status: "Online",
      uptime: "99.91%",
      response: "410 ms",
      lastChecked: "Just now",
    },
    {
      id: 5,
      name: "Notification Service",
      description: "Workout and system notifications",
      status: "Warning",
      uptime: "98.72%",
      response: "580 ms",
      lastChecked: "2 min ago",
    },
  ]);

  // =========================================================
  // SYSTEM ALERTS
  // =========================================================

  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "Warning",
      title: "Notification response time is high",
      description:
        "Notification service response time is above the normal level.",
      time: "10 minutes ago",
    },
    {
      id: 2,
      type: "Info",
      title: "System backup completed",
      description:
        "Daily system backup was completed successfully.",
      time: "1 hour ago",
    },
    {
      id: 3,
      type: "Success",
      title: "All core services are operational",
      description:
        "Backend, database and AI services are running normally.",
      time: "2 hours ago",
    },
  ]);

  // =========================================================
  // STATES
  // =========================================================

  const [serviceFilter, setServiceFilter] =
    useState("All");

  const [search, setSearch] = useState("");

  const [showAlertForm, setShowAlertForm] =
    useState(false);

  const [newAlert, setNewAlert] = useState({
    type: "Info",
    title: "",
    description: "",
  });

  // =========================================================
  // SYSTEM STATISTICS
  // =========================================================

  const totalServices = services.length;

  const onlineServices = services.filter(
    (service) => service.status === "Online"
  ).length;

  const warningServices = services.filter(
    (service) => service.status === "Warning"
  ).length;

  const downServices = services.filter(
    (service) => service.status === "Offline"
  ).length;

  // =========================================================
  // FILTER SERVICES
  // =========================================================

  const filteredServices = services.filter(
    (service) => {
      const matchesSearch =
        service.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        service.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        serviceFilter === "All" ||
        service.status === serviceFilter;

      return matchesSearch && matchesFilter;
    }
  );

  // =========================================================
  // REFRESH SYSTEM
  // =========================================================

  const refreshSystem = () => {
    setServices(
      services.map((service) => ({
        ...service,
        lastChecked: "Just now",
      }))
    );

    alert("System status refreshed successfully.");
  };

  // =========================================================
  // CHANGE SERVICE STATUS
  // =========================================================

  const toggleServiceStatus = (id) => {
    setServices(
      services.map((service) => {
        if (service.id !== id) return service;

        if (service.status === "Online") {
          return {
            ...service,
            status: "Warning",
          };
        }

        return {
          ...service,
          status: "Online",
        };
      })
    );
  };

  // =========================================================
  // CREATE ALERT
  // =========================================================

  const createAlert = () => {
    if (!newAlert.title.trim()) {
      alert("Please enter alert title.");
      return;
    }

    const alertItem = {
      id: Date.now(),
      type: newAlert.type,
      title: newAlert.title,
      description:
        newAlert.description ||
        "System alert created by administrator.",
      time: "Just now",
    };

    setAlerts([alertItem, ...alerts]);

    setNewAlert({
      type: "Info",
      title: "",
      description: "",
    });

    setShowAlertForm(false);
  };

  // =========================================================
  // DELETE ALERT
  // =========================================================

  const deleteAlert = (id) => {
    setAlerts(
      alerts.filter(
        (alertItem) => alertItem.id !== id
      )
    );
  };

  // =========================================================
  // STYLES
  // =========================================================

  const styles = `

    * {
      box-sizing: border-box;
    }

    .monitor-page {
      min-height: 100vh;
      background: #f5f7fb;
      padding: 28px;
      font-family: Arial, Helvetica, sans-serif;
      color: #1f2937;
    }

    .monitor-container {
      max-width: 1450px;
      margin: 0 auto;
    }

    /* =====================================================
       HEADER
    ===================================================== */

    .monitor-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 20px;
      margin-bottom: 25px;
    }

    .monitor-header h1 {
      margin: 0;
      font-size: 30px;
      color: #111827;
    }

    .monitor-header p {
      margin: 7px 0 0;
      color: #6b7280;
      font-size: 14px;
    }

    .refresh-btn {
      border: none;
      background: #14b8a6;
      color: white;
      padding: 11px 18px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
    }

    .refresh-btn:hover {
      opacity: 0.85;
    }

    /* =====================================================
       STATISTICS
    ===================================================== */

    .monitor-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      margin-bottom: 25px;
    }

    .monitor-stat {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      padding: 20px;
      box-shadow: 0 3px 12px rgba(0,0,0,0.05);
    }

    .monitor-stat-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .monitor-stat-icon {
      width: 45px;
      height: 45px;
      border-radius: 11px;
      background: #ecfdf5;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 21px;
    }

    .monitor-stat h2 {
      margin: 15px 0 4px;
      font-size: 28px;
      color: #111827;
    }

    .monitor-stat p {
      margin: 0;
      color: #6b7280;
      font-size: 13px;
    }

    .online-number {
      color: #059669 !important;
    }

    .warning-number {
      color: #d97706 !important;
    }

    .offline-number {
      color: #dc2626 !important;
    }

    /* =====================================================
       TWO COLUMN LAYOUT
    ===================================================== */

    .monitor-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 22px;
    }

    .monitor-card {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 3px 12px rgba(0,0,0,0.05);
      margin-bottom: 22px;
    }

    .monitor-card-header {
      padding: 19px 20px;
      border-bottom: 1px solid #e5e7eb;
    }

    .monitor-card-header-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
    }

    .monitor-card-header h2 {
      margin: 0;
      font-size: 18px;
      color: #111827;
    }

    .monitor-card-header p {
      margin: 5px 0 0;
      color: #6b7280;
      font-size: 12px;
    }

    /* =====================================================
       FILTERS
    ===================================================== */

    .monitor-filters {
      display: flex;
      gap: 10px;
      padding: 15px 20px;
      background: #fafafa;
      border-bottom: 1px solid #e5e7eb;
    }

    .monitor-search {
      flex: 1;
      height: 40px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      padding: 0 12px;
      outline: none;
      font-size: 12px;
    }

    .monitor-search:focus {
      border-color: #14b8a6;
    }

    .monitor-select {
      width: 150px;
      height: 40px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      padding: 0 10px;
      background: white;
      font-size: 12px;
      outline: none;
    }

    /* =====================================================
       SERVICES
    ===================================================== */

    .service-list {
      padding: 5px 20px;
    }

    .service-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 17px 0;
      border-bottom: 1px solid #eef0f2;
      gap: 15px;
    }

    .service-item:last-child {
      border-bottom: none;
    }

    .service-info {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 240px;
    }

    .service-icon {
      width: 42px;
      height: 42px;
      border-radius: 10px;
      background: #f0fdfa;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 19px;
    }

    .service-name {
      font-weight: 700;
      color: #111827;
      font-size: 13px;
    }

    .service-description {
      margin-top: 4px;
      color: #9ca3af;
      font-size: 10px;
    }

    .service-details {
      display: flex;
      align-items: center;
      gap: 25px;
    }

    .service-detail {
      text-align: center;
      min-width: 65px;
    }

    .service-detail strong {
      display: block;
      color: #374151;
      font-size: 12px;
    }

    .service-detail span {
      display: block;
      color: #9ca3af;
      font-size: 9px;
      margin-top: 3px;
    }

    /* =====================================================
       STATUS
    ===================================================== */

    .service-status {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 10px;
      border-radius: 20px;
      font-size: 10px;
      font-weight: 700;
    }

    .status-online {
      background: #dcfce7;
      color: #166534;
    }

    .status-warning {
      background: #fef3c7;
      color: #92400e;
    }

    .status-offline {
      background: #fee2e2;
      color: #991b1b;
    }

    .status-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: currentColor;
    }

    .service-action {
      border: none;
      background: #f3f4f6;
      color: #374151;
      border-radius: 6px;
      padding: 7px 9px;
      font-size: 10px;
      cursor: pointer;
    }

    .service-action:hover {
      background: #e5e7eb;
    }

    /* =====================================================
       ALERTS
    ===================================================== */

    .add-alert-btn {
      border: none;
      background: #111827;
      color: white;
      padding: 8px 12px;
      border-radius: 7px;
      font-size: 10px;
      cursor: pointer;
    }

    .alert-list {
      padding: 10px 20px;
    }

    .alert-item {
      padding: 15px 0;
      border-bottom: 1px solid #eef0f2;
      position: relative;
    }

    .alert-item:last-child {
      border-bottom: none;
    }

    .alert-top {
      display: flex;
      align-items: center;
      gap: 8px;
      padding-right: 25px;
    }

    .alert-type {
      padding: 5px 8px;
      border-radius: 15px;
      font-size: 9px;
      font-weight: 700;
    }

    .alert-warning {
      background: #fef3c7;
      color: #92400e;
    }

    .alert-info {
      background: #dbeafe;
      color: #1d4ed8;
    }

    .alert-success {
      background: #dcfce7;
      color: #166534;
    }

    .alert-title {
      font-size: 12px;
      font-weight: 700;
      color: #374151;
    }

    .alert-description {
      margin: 7px 0 0;
      font-size: 10px;
      line-height: 1.5;
      color: #6b7280;
    }

    .alert-time {
      margin-top: 6px;
      font-size: 9px;
      color: #9ca3af;
    }

    .delete-alert {
      position: absolute;
      right: 0;
      top: 14px;
      border: none;
      background: transparent;
      color: #ef4444;
      cursor: pointer;
      font-size: 15px;
    }

    /* =====================================================
       SYSTEM HEALTH
    ===================================================== */

    .health-body {
      padding: 20px;
    }

    .health-row {
      margin-bottom: 20px;
    }

    .health-row:last-child {
      margin-bottom: 0;
    }

    .health-label {
      display: flex;
      justify-content: space-between;
      margin-bottom: 7px;
      font-size: 11px;
      color: #4b5563;
    }

    .health-bar {
      width: 100%;
      height: 8px;
      border-radius: 10px;
      background: #e5e7eb;
      overflow: hidden;
    }

    .health-progress {
      height: 100%;
      border-radius: 10px;
      background: #14b8a6;
    }

    /* =====================================================
       ACTIVITY
    ===================================================== */

    .activity-body {
      padding: 18px 20px;
    }

    .activity {
      display: flex;
      gap: 11px;
      margin-bottom: 17px;
    }

    .activity:last-child {
      margin-bottom: 0;
    }

    .activity-icon {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #ecfdf5;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      flex-shrink: 0;
    }

    .activity-text {
      font-size: 11px;
      color: #374151;
      line-height: 1.4;
    }

    .activity-time {
      display: block;
      color: #9ca3af;
      font-size: 9px;
      margin-top: 3px;
    }

    /* =====================================================
       MODAL
    ===================================================== */

    .alert-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.55);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      z-index: 9999;
    }

    .alert-modal {
      width: 100%;
      max-width: 500px;
      background: white;
      border-radius: 14px;
      padding: 25px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.25);
    }

    .alert-modal h2 {
      margin: 0;
      font-size: 20px;
      color: #111827;
    }

    .alert-modal p {
      color: #6b7280;
      font-size: 12px;
      margin: 7px 0 20px;
    }

    .form-group {
      margin-bottom: 15px;
    }

    .form-group label {
      display: block;
      margin-bottom: 6px;
      font-size: 11px;
      font-weight: 700;
      color: #374151;
    }

    .form-input,
    .form-textarea,
    .form-select {
      width: 100%;
      border: 1px solid #d1d5db;
      border-radius: 7px;
      padding: 10px;
      outline: none;
      font-size: 12px;
    }

    .form-textarea {
      min-height: 90px;
      resize: vertical;
    }

    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 9px;
      margin-top: 20px;
    }

    .cancel-btn,
    .create-btn {
      border: none;
      padding: 10px 15px;
      border-radius: 7px;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
    }

    .cancel-btn {
      background: #f3f4f6;
      color: #374151;
    }

    .create-btn {
      background: #14b8a6;
      color: white;
    }

    /* =====================================================
       RESPONSIVE
    ===================================================== */

    @media (max-width: 1100px) {

      .monitor-grid {
        grid-template-columns: 1fr;
      }

      .monitor-stats {
        grid-template-columns: repeat(2, 1fr);
      }

    }

    @media (max-width: 700px) {

      .monitor-page {
        padding: 15px;
      }

      .monitor-header {
        flex-direction: column;
      }

      .monitor-stats {
        grid-template-columns: 1fr;
      }

      .monitor-filters {
        flex-direction: column;
      }

      .monitor-select {
        width: 100%;
      }

      .service-item {
        align-items: flex-start;
        flex-direction: column;
      }

      .service-details {
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
      }

    }

  `;

  return (
    <>
      <style>{styles}</style>

      <div className="monitor-page">

        <div className="monitor-container">

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="monitor-header">

            <div>

              <h1>
                System Monitoring
              </h1>

              <p>
                Monitor Elite-Fit services, system health
                and application performance
              </p>

            </div>

            <button
              className="refresh-btn"
              onClick={refreshSystem}
            >
              ↻ Refresh System
            </button>

          </div>


          {/* =================================================
              STATISTICS
          ================================================= */}

          <div className="monitor-stats">

            <div className="monitor-stat">

              <div className="monitor-stat-top">

                <div className="monitor-stat-icon">
                  🖥️
                </div>

              </div>

              <h2>
                {totalServices}
              </h2>

              <p>
                Total Services
              </p>

            </div>


            <div className="monitor-stat">

              <div className="monitor-stat-top">

                <div className="monitor-stat-icon">
                  ✓
                </div>

              </div>

              <h2 className="online-number">
                {onlineServices}
              </h2>

              <p>
                Online Services
              </p>

            </div>


            <div className="monitor-stat">

              <div className="monitor-stat-top">

                <div className="monitor-stat-icon">
                  ⚠️
                </div>

              </div>

              <h2 className="warning-number">
                {warningServices}
              </h2>

              <p>
                Warning Services
              </p>

            </div>


            <div className="monitor-stat">

              <div className="monitor-stat-top">

                <div className="monitor-stat-icon">
                  ⚡
                </div>

              </div>

              <h2 className="offline-number">
                {downServices}
              </h2>

              <p>
                Offline Services
              </p>

            </div>

          </div>


          {/* =================================================
              MAIN GRID
          ================================================= */}

          <div className="monitor-grid">

            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <div>

              {/* SERVICES */}

              <div className="monitor-card">

                <div className="monitor-card-header">

                  <div className="monitor-card-header-row">

                    <div>

                      <h2>
                        Service Status
                      </h2>

                      <p>
                        Current status of Elite-Fit system
                        services
                      </p>

                    </div>

                  </div>

                </div>


                {/* FILTER */}

                <div className="monitor-filters">

                  <input
                    className="monitor-search"
                    type="text"
                    placeholder="Search service..."
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                  />


                  <select
                    className="monitor-select"
                    value={serviceFilter}
                    onChange={(e) =>
                      setServiceFilter(e.target.value)
                    }
                  >

                    <option value="All">
                      All Status
                    </option>

                    <option value="Online">
                      Online
                    </option>

                    <option value="Warning">
                      Warning
                    </option>

                    <option value="Offline">
                      Offline
                    </option>

                  </select>

                </div>


                {/* SERVICES */}

                <div className="service-list">

                  {filteredServices.length === 0 ? (

                    <div
                      style={{
                        textAlign: "center",
                        padding: "40px",
                        color: "#6b7280",
                        fontSize: "12px",
                      }}
                    >
                      No services found.
                    </div>

                  ) : (

                    filteredServices.map(
                      (service) => (

                        <div
                          className="service-item"
                          key={service.id}
                        >

                          <div className="service-info">

                            <div className="service-icon">

                              {service.name ===
                                "Database"
                                ? "🗄️"
                                : service.name ===
                                  "AI Fitness Assistant"
                                ? "🤖"
                                : service.name ===
                                  "Posture Detection"
                                ? "📷"
                                : service.name ===
                                  "Notification Service"
                                ? "🔔"
                                : "⚙️"}

                            </div>

                            <div>

                              <div className="service-name">
                                {service.name}
                              </div>

                              <div className="service-description">
                                {service.description}
                              </div>

                            </div>

                          </div>


                          <div className="service-details">

                            <div className="service-detail">

                              <strong>
                                {service.uptime}
                              </strong>

                              <span>
                                Uptime
                              </span>

                            </div>


                            <div className="service-detail">

                              <strong>
                                {service.response}
                              </strong>

                              <span>
                                Response
                              </span>

                            </div>


                            <div>

                              <span
                                className={`service-status ${
                                  service.status ===
                                  "Online"
                                    ? "status-online"
                                    : service.status ===
                                      "Warning"
                                    ? "status-warning"
                                    : "status-offline"
                                }`}
                              >

                                <span className="status-dot"></span>

                                {service.status}

                              </span>

                            </div>


                            <button
                              className="service-action"
                              onClick={() =>
                                toggleServiceStatus(
                                  service.id
                                )
                              }
                            >
                              Check
                            </button>

                          </div>

                        </div>

                      )
                    )

                  )}

                </div>

              </div>


              {/* SYSTEM HEALTH */}

              <div className="monitor-card">

                <div className="monitor-card-header">

                  <h2>
                    System Health
                  </h2>

                  <p>
                    Current resource utilization
                  </p>

                </div>


                <div className="health-body">

                  <div className="health-row">

                    <div className="health-label">

                      <span>
                        CPU Usage
                      </span>

                      <strong>
                        42%
                      </strong>

                    </div>

                    <div className="health-bar">

                      <div
                        className="health-progress"
                        style={{ width: "42%" }}
                      ></div>

                    </div>

                  </div>


                  <div className="health-row">

                    <div className="health-label">

                      <span>
                        Memory Usage
                      </span>

                      <strong>
                        58%
                      </strong>

                    </div>

                    <div className="health-bar">

                      <div
                        className="health-progress"
                        style={{ width: "58%" }}
                      ></div>

                    </div>

                  </div>


                  <div className="health-row">

                    <div className="health-label">

                      <span>
                        Database Usage
                      </span>

                      <strong>
                        36%
                      </strong>

                    </div>

                    <div className="health-bar">

                      <div
                        className="health-progress"
                        style={{ width: "36%" }}
                      ></div>

                    </div>

                  </div>


                  <div className="health-row">

                    <div className="health-label">

                      <span>
                        Storage Usage
                      </span>

                      <strong>
                        64%
                      </strong>

                    </div>

                    <div className="health-bar">

                      <div
                        className="health-progress"
                        style={{ width: "64%" }}
                      ></div>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <div>

              {/* ALERTS */}

              <div className="monitor-card">

                <div className="monitor-card-header">

                  <div className="monitor-card-header-row">

                    <div>

                      <h2>
                        System Alerts
                      </h2>

                      <p>
                        Recent system notifications
                      </p>

                    </div>

                    <button
                      className="add-alert-btn"
                      onClick={() =>
                        setShowAlertForm(true)
                      }
                    >
                      + Add Alert
                    </button>

                  </div>

                </div>


                <div className="alert-list">

                  {alerts.length === 0 ? (

                    <div
                      style={{
                        textAlign: "center",
                        padding: "35px 10px",
                        color: "#6b7280",
                        fontSize: "11px",
                      }}
                    >
                      No system alerts.
                    </div>

                  ) : (

                    alerts.map(
                      (alertItem) => (

                        <div
                          className="alert-item"
                          key={alertItem.id}
                        >

                          <div className="alert-top">

                            <span
                              className={`alert-type ${
                                alertItem.type ===
                                "Warning"
                                  ? "alert-warning"
                                  : alertItem.type ===
                                    "Success"
                                  ? "alert-success"
                                  : "alert-info"
                              }`}
                            >
                              {alertItem.type}
                            </span>

                            <span className="alert-title">
                              {alertItem.title}
                            </span>

                          </div>


                          <div className="alert-description">

                            {alertItem.description}

                          </div>


                          <div className="alert-time">

                            {alertItem.time}

                          </div>


                          <button
                            className="delete-alert"
                            onClick={() =>
                              deleteAlert(
                                alertItem.id
                              )
                            }
                          >
                            ×
                          </button>

                        </div>

                      )
                    )

                  )}

                </div>

              </div>


              {/* RECENT ACTIVITY */}

              <div className="monitor-card">

                <div className="monitor-card-header">

                  <h2>
                    Recent Activity
                  </h2>

                  <p>
                    Latest system events
                  </p>

                </div>


                <div className="activity-body">

                  <div className="activity">

                    <div className="activity-icon">
                      ✓
                    </div>

                    <div className="activity-text">

                      Database backup completed

                      <span className="activity-time">
                        1 hour ago
                      </span>

                    </div>

                  </div>


                  <div className="activity">

                    <div className="activity-icon">
                      🤖
                    </div>

                    <div className="activity-text">

                      AI Assistant service checked

                      <span className="activity-time">
                        45 minutes ago
                      </span>

                    </div>

                  </div>


                  <div className="activity">

                    <div className="activity-icon">
                      📷
                    </div>

                    <div className="activity-text">

                      Posture Detection service checked

                      <span className="activity-time">
                        30 minutes ago
                      </span>

                    </div>

                  </div>


                  <div className="activity">

                    <div className="activity-icon">
                      🔔
                    </div>

                    <div className="activity-text">

                      Notification service warning detected

                      <span className="activity-time">
                        10 minutes ago
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          ADD ALERT MODAL
      ===================================================== */}

      {showAlertForm && (

        <div
          className="alert-overlay"
          onClick={() =>
            setShowAlertForm(false)
          }
        >

          <div
            className="alert-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <h2>
              Create System Alert
            </h2>

            <p>
              Add a new system alert for monitoring.
            </p>


            <div className="form-group">

              <label>
                Alert Type
              </label>

              <select
                className="form-select"
                value={newAlert.type}
                onChange={(e) =>
                  setNewAlert({
                    ...newAlert,
                    type: e.target.value,
                  })
                }
              >

                <option value="Info">
                  Information
                </option>

                <option value="Warning">
                  Warning
                </option>

                <option value="Success">
                  Success
                </option>

              </select>

            </div>


            <div className="form-group">

              <label>
                Alert Title
              </label>

              <input
                className="form-input"
                type="text"
                placeholder="Enter alert title"
                value={newAlert.title}
                onChange={(e) =>
                  setNewAlert({
                    ...newAlert,
                    title: e.target.value,
                  })
                }
              />

            </div>


            <div className="form-group">

              <label>
                Description
              </label>

              <textarea
                className="form-textarea"
                placeholder="Enter alert description"
                value={newAlert.description}
                onChange={(e) =>
                  setNewAlert({
                    ...newAlert,
                    description:
                      e.target.value,
                  })
                }
              ></textarea>

            </div>


            <div className="modal-actions">

              <button
                className="cancel-btn"
                onClick={() =>
                  setShowAlertForm(false)
                }
              >
                Cancel
              </button>

              <button
                className="create-btn"
                onClick={createAlert}
              >
                Create Alert
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default SystemMonitoring;