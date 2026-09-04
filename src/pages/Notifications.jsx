import React, { useState } from "react";

function Notifications() {
  // =====================================================
  // DEMO NOTIFICATIONS
  // =====================================================

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Welcome to Elite-Fit",
      message:
        "Your personalized fitness journey has started successfully.",
      type: "System",
      audience: "All Users",
      status: "Sent",
      date: "Today, 10:30 AM",
      read: false,
    },
    {
      id: 2,
      title: "Workout Reminder",
      message:
        "Don't forget to complete your scheduled workout today.",
      type: "Workout",
      audience: "Active Users",
      status: "Sent",
      date: "Today, 9:00 AM",
      read: false,
    },
    {
      id: 3,
      title: "New Diet Plan Available",
      message:
        "A new personalized diet plan has been generated for you.",
      type: "Diet",
      audience: "Users with Diet Plans",
      status: "Sent",
      date: "Yesterday, 5:45 PM",
      read: true,
    },
    {
      id: 4,
      title: "Posture Analysis Completed",
      message:
        "Your posture analysis is complete. Check your feedback.",
      type: "Posture",
      audience: "Posture Users",
      status: "Sent",
      date: "Yesterday, 2:20 PM",
      read: true,
    },
    {
      id: 5,
      title: "Subscription Expiring",
      message:
        "Some user subscriptions are about to expire.",
      type: "Subscription",
      audience: "Subscribed Users",
      status: "Scheduled",
      date: "Tomorrow, 9:00 AM",
      read: false,
    },
  ]);

  // =====================================================
  // STATES
  // =====================================================

  const [filter, setFilter] = useState("All");

  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [newNotification, setNewNotification] = useState({
    title: "",
    message: "",
    type: "System",
    audience: "All Users",
    status: "Sent",
  });

  // =====================================================
  // FILTER NOTIFICATIONS
  // =====================================================

  const filteredNotifications = notifications.filter(
    (notification) => {
      const matchesSearch =
        notification.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        notification.message
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" ||
        notification.type === filter;

      return matchesSearch && matchesFilter;
    }
  );

  // =====================================================
  // STATISTICS
  // =====================================================

  const totalNotifications = notifications.length;

  const sentNotifications = notifications.filter(
    (notification) =>
      notification.status === "Sent"
  ).length;

  const scheduledNotifications = notifications.filter(
    (notification) =>
      notification.status === "Scheduled"
  ).length;

  const unreadNotifications = notifications.filter(
    (notification) =>
      notification.read === false
  ).length;

  // =====================================================
  // CREATE NOTIFICATION
  // =====================================================

  const createNotification = () => {
    if (!newNotification.title.trim()) {
      alert("Please enter notification title.");
      return;
    }

    if (!newNotification.message.trim()) {
      alert("Please enter notification message.");
      return;
    }

    const notification = {
      id: Date.now(),
      title: newNotification.title,
      message: newNotification.message,
      type: newNotification.type,
      audience: newNotification.audience,
      status: newNotification.status,
      date: "Just now",
      read: false,
    };

    setNotifications([
      notification,
      ...notifications,
    ]);

    setNewNotification({
      title: "",
      message: "",
      type: "System",
      audience: "All Users",
      status: "Sent",
    });

    setShowForm(false);
  };

  // =====================================================
  // DELETE NOTIFICATION
  // =====================================================

  const deleteNotification = (id) => {
    setNotifications(
      notifications.filter(
        (notification) =>
          notification.id !== id
      )
    );
  };

  // =====================================================
  // MARK AS READ
  // =====================================================

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              read: true,
            }
          : notification
      )
    );
  };

  // =====================================================
  // MARK ALL AS READ
  // =====================================================

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  // =====================================================
  // STYLES
  // =====================================================

  const styles = `

    * {
      box-sizing: border-box;
    }

    .notification-page {
      min-height: 100vh;
      background: #f5f7fb;
      padding: 28px;
      font-family: Arial, Helvetica, sans-serif;
      color: #1f2937;
    }

    .notification-container {
      max-width: 1400px;
      margin: 0 auto;
    }

    /* =========================================
       HEADER
    ========================================= */

    .notification-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 20px;
      margin-bottom: 25px;
    }

    .notification-header h1 {
      margin: 0;
      font-size: 30px;
      color: #111827;
    }

    .notification-header p {
      margin: 7px 0 0;
      color: #6b7280;
      font-size: 14px;
    }

    .header-buttons {
      display: flex;
      gap: 10px;
    }

    .add-notification-btn {
      border: none;
      background: #14b8a6;
      color: white;
      padding: 11px 17px;
      border-radius: 8px;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
    }

    .mark-all-btn {
      border: 1px solid #d1d5db;
      background: white;
      color: #374151;
      padding: 11px 17px;
      border-radius: 8px;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
    }

    .add-notification-btn:hover,
    .mark-all-btn:hover {
      opacity: 0.85;
    }

    /* =========================================
       STATISTICS
    ========================================= */

    .notification-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      margin-bottom: 25px;
    }

    .notification-stat {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      padding: 20px;
      box-shadow: 0 3px 12px rgba(0,0,0,0.05);
    }

    .notification-stat-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .notification-stat-icon {
      width: 44px;
      height: 44px;
      border-radius: 11px;
      background: #ecfdf5;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }

    .notification-stat h2 {
      margin: 15px 0 4px;
      font-size: 27px;
      color: #111827;
    }

    .notification-stat p {
      margin: 0;
      font-size: 12px;
      color: #6b7280;
    }

    .green-number {
      color: #059669 !important;
    }

    .orange-number {
      color: #d97706 !important;
    }

    .red-number {
      color: #dc2626 !important;
    }

    /* =========================================
       MAIN CARD
    ========================================= */

    .notification-card {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 3px 12px rgba(0,0,0,0.05);
    }

    .notification-card-header {
      padding: 20px;
      border-bottom: 1px solid #e5e7eb;
    }

    .notification-card-header h2 {
      margin: 0;
      font-size: 18px;
      color: #111827;
    }

    .notification-card-header p {
      margin: 5px 0 0;
      color: #6b7280;
      font-size: 12px;
    }

    /* =========================================
       FILTERS
    ========================================= */

    .notification-filters {
      display: flex;
      gap: 10px;
      padding: 15px 20px;
      background: #fafafa;
      border-bottom: 1px solid #e5e7eb;
    }

    .notification-search {
      flex: 1;
      height: 40px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      padding: 0 12px;
      outline: none;
      font-size: 12px;
    }

    .notification-search:focus {
      border-color: #14b8a6;
    }

    .notification-select {
      width: 160px;
      height: 40px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      padding: 0 10px;
      background: white;
      font-size: 12px;
      outline: none;
    }

    /* =========================================
       NOTIFICATION LIST
    ========================================= */

    .notification-list {
      padding: 0 20px;
    }

    .notification-item {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 15px;
      padding: 19px 0;
      border-bottom: 1px solid #eef0f2;
    }

    .notification-item:last-child {
      border-bottom: none;
    }

    .notification-item.unread {
      background: #fafffe;
    }

    .notification-icon {
      width: 43px;
      height: 43px;
      border-radius: 11px;
      background: #ecfdf5;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      flex-shrink: 0;
    }

    .notification-content {
      flex: 1;
      min-width: 0;
    }

    .notification-title-row {
      display: flex;
      align-items: center;
      gap: 9px;
      flex-wrap: wrap;
    }

    .notification-title {
      font-size: 13px;
      font-weight: 700;
      color: #111827;
    }

    .new-badge {
      background: #14b8a6;
      color: white;
      font-size: 8px;
      padding: 4px 7px;
      border-radius: 10px;
      font-weight: 700;
    }

    .notification-message {
      margin: 6px 0;
      font-size: 11px;
      line-height: 1.5;
      color: #6b7280;
    }

    .notification-meta {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }

    .notification-type {
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 8px;
      font-weight: 700;
      background: #f3f4f6;
      color: #4b5563;
    }

    .notification-audience {
      font-size: 9px;
      color: #6b7280;
    }

    .notification-date {
      font-size: 9px;
      color: #9ca3af;
    }

    .notification-status {
      font-size: 9px;
      font-weight: 700;
    }

    .sent-status {
      color: #059669;
    }

    .scheduled-status {
      color: #d97706;
    }

    .notification-actions {
      display: flex;
      align-items: center;
      gap: 7px;
    }

    .read-btn,
    .delete-btn {
      border: none;
      background: #f3f4f6;
      width: 31px;
      height: 31px;
      border-radius: 7px;
      cursor: pointer;
      font-size: 12px;
    }

    .read-btn {
      color: #059669;
    }

    .delete-btn {
      color: #dc2626;
    }

    .read-btn:hover,
    .delete-btn:hover {
      background: #e5e7eb;
    }

    /* =========================================
       EMPTY STATE
    ========================================= */

    .empty-state {
      text-align: center;
      padding: 60px 20px;
      color: #6b7280;
    }

    .empty-icon {
      font-size: 40px;
      margin-bottom: 10px;
    }

    .empty-state h3 {
      margin: 0 0 5px;
      color: #374151;
      font-size: 15px;
    }

    .empty-state p {
      margin: 0;
      font-size: 11px;
    }

    /* =========================================
       MODAL
    ========================================= */

    .notification-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.55);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      z-index: 9999;
    }

    .notification-modal {
      width: 100%;
      max-width: 520px;
      background: white;
      border-radius: 14px;
      padding: 25px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.25);
    }

    .notification-modal h2 {
      margin: 0;
      font-size: 20px;
      color: #111827;
    }

    .notification-modal-description {
      margin: 7px 0 20px;
      font-size: 12px;
      color: #6b7280;
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
      background: white;
    }

    .form-input:focus,
    .form-textarea:focus,
    .form-select:focus {
      border-color: #14b8a6;
    }

    .form-textarea {
      min-height: 90px;
      resize: vertical;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 9px;
      margin-top: 20px;
    }

    .cancel-btn,
    .send-btn {
      border: none;
      padding: 10px 16px;
      border-radius: 7px;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
    }

    .cancel-btn {
      background: #f3f4f6;
      color: #374151;
    }

    .send-btn {
      background: #14b8a6;
      color: white;
    }

    /* =========================================
       RESPONSIVE
    ========================================= */

    @media (max-width: 1000px) {

      .notification-stats {
        grid-template-columns: repeat(2, 1fr);
      }

    }

    @media (max-width: 650px) {

      .notification-page {
        padding: 15px;
      }

      .notification-header {
        flex-direction: column;
      }

      .header-buttons {
        width: 100%;
      }

      .add-notification-btn,
      .mark-all-btn {
        flex: 1;
      }

      .notification-stats {
        grid-template-columns: 1fr;
      }

      .notification-filters {
        flex-direction: column;
      }

      .notification-select {
        width: 100%;
      }

      .notification-item {
        flex-direction: column;
      }

      .notification-actions {
        position: absolute;
        right: 0;
        top: 18px;
      }

      .notification-content {
        padding-right: 65px;
      }

      .form-row {
        grid-template-columns: 1fr;
      }

    }

  `;

  return (
    <>
      <style>{styles}</style>

      <div className="notification-page">

        <div className="notification-container">

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="notification-header">

            <div>

              <h1>
                Notifications
              </h1>

              <p>
                Manage and send notifications to Elite-Fit users
              </p>

            </div>

            <div className="header-buttons">

              <button
                className="mark-all-btn"
                onClick={markAllAsRead}
              >
                ✓ Mark All Read
              </button>

              <button
                className="add-notification-btn"
                onClick={() =>
                  setShowForm(true)
                }
              >
                + Create Notification
              </button>

            </div>

          </div>


          {/* =================================================
              STATISTICS
          ================================================= */}

          <div className="notification-stats">

            <div className="notification-stat">

              <div className="notification-stat-top">

                <div className="notification-stat-icon">
                  🔔
                </div>

              </div>

              <h2>
                {totalNotifications}
              </h2>

              <p>
                Total Notifications
              </p>

            </div>


            <div className="notification-stat">

              <div className="notification-stat-top">

                <div className="notification-stat-icon">
                  ✓
                </div>

              </div>

              <h2 className="green-number">
                {sentNotifications}
              </h2>

              <p>
                Sent Notifications
              </p>

            </div>


            <div className="notification-stat">

              <div className="notification-stat-top">

                <div className="notification-stat-icon">
                  🕐
                </div>

              </div>

              <h2 className="orange-number">
                {scheduledNotifications}
              </h2>

              <p>
                Scheduled
              </p>

            </div>


            <div className="notification-stat">

              <div className="notification-stat-top">

                <div className="notification-stat-icon">
                  📩
                </div>

              </div>

              <h2 className="red-number">
                {unreadNotifications}
              </h2>

              <p>
                Unread Notifications
              </p>

            </div>

          </div>


          {/* =================================================
              NOTIFICATION CARD
          ================================================= */}

          <div className="notification-card">

            <div className="notification-card-header">

              <h2>
                Notification Center
              </h2>

              <p>
                View, manage and control user notifications
              </p>

            </div>


            {/* FILTERS */}

            <div className="notification-filters">

              <input
                className="notification-search"
                type="text"
                placeholder="Search notifications..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />


              <select
                className="notification-select"
                value={filter}
                onChange={(e) =>
                  setFilter(e.target.value)
                }
              >

                <option value="All">
                  All Types
                </option>

                <option value="System">
                  System
                </option>

                <option value="Workout">
                  Workout
                </option>

                <option value="Diet">
                  Diet
                </option>

                <option value="Posture">
                  Posture
                </option>

                <option value="Subscription">
                  Subscription
                </option>

              </select>

            </div>


            {/* LIST */}

            <div className="notification-list">

              {filteredNotifications.length === 0 ? (

                <div className="empty-state">

                  <div className="empty-icon">
                    🔔
                  </div>

                  <h3>
                    No Notifications Found
                  </h3>

                  <p>
                    There are no notifications matching your search.
                  </p>

                </div>

              ) : (

                filteredNotifications.map(
                  (notification) => (

                    <div
                      className={`notification-item ${
                        !notification.read
                          ? "unread"
                          : ""
                      }`}
                      key={notification.id}
                    >

                      {/* ICON */}

                      <div className="notification-icon">

                        {notification.type ===
                          "Workout"
                          ? "🏋️"
                          : notification.type ===
                            "Diet"
                          ? "🥗"
                          : notification.type ===
                            "Posture"
                          ? "📷"
                          : notification.type ===
                            "Subscription"
                          ? "💳"
                          : "🔔"}

                      </div>


                      {/* CONTENT */}

                      <div className="notification-content">

                        <div className="notification-title-row">

                          <span className="notification-title">

                            {notification.title}

                          </span>

                          {!notification.read && (

                            <span className="new-badge">
                              NEW
                            </span>

                          )}

                        </div>


                        <div className="notification-message">

                          {notification.message}

                        </div>


                        <div className="notification-meta">

                          <span className="notification-type">
                            {notification.type}
                          </span>

                          <span className="notification-audience">
                            👥 {notification.audience}
                          </span>

                          <span className="notification-date">
                            {notification.date}
                          </span>

                          <span
                            className={`notification-status ${
                              notification.status ===
                              "Sent"
                                ? "sent-status"
                                : "scheduled-status"
                            }`}
                          >
                            {notification.status}
                          </span>

                        </div>

                      </div>


                      {/* ACTIONS */}

                      <div className="notification-actions">

                        {!notification.read && (

                          <button
                            className="read-btn"
                            title="Mark as read"
                            onClick={() =>
                              markAsRead(
                                notification.id
                              )
                            }
                          >
                            ✓
                          </button>

                        )}

                        <button
                          className="delete-btn"
                          title="Delete notification"
                          onClick={() =>
                            deleteNotification(
                              notification.id
                            )
                          }
                        >
                          🗑
                        </button>

                      </div>

                    </div>

                  )
                )

              )}

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          CREATE NOTIFICATION MODAL
      ===================================================== */}

      {showForm && (

        <div
          className="notification-overlay"
          onClick={() =>
            setShowForm(false)
          }
        >

          <div
            className="notification-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <h2>
              Create Notification
            </h2>

            <p className="notification-modal-description">
              Send a notification to your selected users.
            </p>


            {/* TITLE */}

            <div className="form-group">

              <label>
                Notification Title
              </label>

              <input
                className="form-input"
                type="text"
                placeholder="Enter notification title"
                value={newNotification.title}
                onChange={(e) =>
                  setNewNotification({
                    ...newNotification,
                    title: e.target.value,
                  })
                }
              />

            </div>


            {/* MESSAGE */}

            <div className="form-group">

              <label>
                Message
              </label>

              <textarea
                className="form-textarea"
                placeholder="Enter notification message..."
                value={newNotification.message}
                onChange={(e) =>
                  setNewNotification({
                    ...newNotification,
                    message: e.target.value,
                  })
                }
              ></textarea>

            </div>


            {/* TYPE + AUDIENCE */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  Notification Type
                </label>

                <select
                  className="form-select"
                  value={newNotification.type}
                  onChange={(e) =>
                    setNewNotification({
                      ...newNotification,
                      type: e.target.value,
                    })
                  }
                >

                  <option value="System">
                    System
                  </option>

                  <option value="Workout">
                    Workout
                  </option>

                  <option value="Diet">
                    Diet
                  </option>

                  <option value="Posture">
                    Posture
                  </option>

                  <option value="Subscription">
                    Subscription
                  </option>

                </select>

              </div>


              <div className="form-group">

                <label>
                  Audience
                </label>

                <select
                  className="form-select"
                  value={newNotification.audience}
                  onChange={(e) =>
                    setNewNotification({
                      ...newNotification,
                      audience: e.target.value,
                    })
                  }
                >

                  <option value="All Users">
                    All Users
                  </option>

                  <option value="Active Users">
                    Active Users
                  </option>

                  <option value="Subscribed Users">
                    Subscribed Users
                  </option>

                  <option value="Posture Users">
                    Posture Users
                  </option>

                  <option value="Users with Diet Plans">
                    Users with Diet Plans
                  </option>

                </select>

              </div>

            </div>


            {/* STATUS */}

            <div className="form-group">

              <label>
                Notification Status
              </label>

              <select
                className="form-select"
                value={newNotification.status}
                onChange={(e) =>
                  setNewNotification({
                    ...newNotification,
                    status: e.target.value,
                  })
                }
              >

                <option value="Sent">
                  Send Now
                </option>

                <option value="Scheduled">
                  Scheduled
                </option>

              </select>

            </div>


            {/* BUTTONS */}

            <div className="modal-actions">

              <button
                className="cancel-btn"
                onClick={() =>
                  setShowForm(false)
                }
              >
                Cancel
              </button>

              <button
                className="send-btn"
                onClick={createNotification}
              >
                Create Notification
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default Notifications;