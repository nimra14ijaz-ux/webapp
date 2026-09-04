import React, { useState } from "react";

function Settings() {
  // =====================================================
  // SETTINGS STATES
  // =====================================================

  const [generalSettings, setGeneralSettings] = useState({
    appName: "Elite-Fit",
    adminEmail: "admin@elitefit.com",
    supportEmail: "support@elitefit.com",
    timezone: "Asia/Karachi",
  });

  const [notificationSettings, setNotificationSettings] = useState({
    newUser: true,
    workoutCompleted: true,
    postureAnalysis: true,
    subscription: true,
    systemAlerts: true,
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactor: false,
    loginAlerts: true,
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showCurrentPassword, setShowCurrentPassword] =
    useState(false);

  const [showNewPassword, setShowNewPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [saved, setSaved] = useState(false);

  // =====================================================
  // SAVE GENERAL SETTINGS
  // =====================================================

  const saveGeneralSettings = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  // =====================================================
  // SAVE NOTIFICATION SETTINGS
  // =====================================================

  const saveNotificationSettings = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  // =====================================================
  // CHANGE PASSWORD
  // =====================================================

  const changePassword = () => {
    if (
      !passwordData.currentPassword ||
      !passwordData.newPassword ||
      !passwordData.confirmPassword
    ) {
      alert("Please fill all password fields.");
      return;
    }

    if (
      passwordData.newPassword !==
      passwordData.confirmPassword
    ) {
      alert("New password and confirm password do not match.");
      return;
    }

    if (passwordData.newPassword.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    alert("Password changed successfully.");

    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  // =====================================================
  // STYLES
  // =====================================================

  const styles = `
    
    * {
      box-sizing: border-box;
    }

    .settings-page {
      min-height: 100vh;
      background: #f5f7fb;
      padding: 28px;
      font-family: Arial, Helvetica, sans-serif;
      color: #1f2937;
    }

    .settings-container {
      max-width: 1400px;
      margin: 0 auto;
    }

    /* =========================================
       HEADER
    ========================================= */

    .settings-header {
      margin-bottom: 25px;
    }

    .settings-header h1 {
      margin: 0;
      font-size: 30px;
      color: #111827;
    }

    .settings-header p {
      margin: 7px 0 0;
      color: #6b7280;
      font-size: 14px;
    }

    /* =========================================
       SUCCESS MESSAGE
    ========================================= */

    .success-message {
      background: #ecfdf5;
      color: #047857;
      border: 1px solid #a7f3d0;
      padding: 12px 15px;
      border-radius: 8px;
      margin-bottom: 20px;
      font-size: 12px;
      font-weight: 600;
    }

    /* =========================================
       SETTINGS GRID
    ========================================= */

    .settings-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .settings-card {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      padding: 22px;
      box-shadow: 0 3px 12px rgba(0,0,0,0.05);
    }

    .settings-card.full-width {
      grid-column: 1 / -1;
    }

    /* =========================================
       CARD HEADER
    ========================================= */

    .settings-card-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 1px solid #eef0f2;
    }

    .settings-card-icon {
      width: 42px;
      height: 42px;
      border-radius: 10px;
      background: #ecfdf5;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 19px;
    }

    .settings-card-header h2 {
      margin: 0;
      font-size: 17px;
      color: #111827;
    }

    .settings-card-header p {
      margin: 4px 0 0;
      font-size: 10px;
      color: #6b7280;
    }

    /* =========================================
       FORM
    ========================================= */

    .form-group {
      margin-bottom: 16px;
    }

    .form-group label {
      display: block;
      margin-bottom: 7px;
      font-size: 11px;
      font-weight: 700;
      color: #374151;
    }

    .form-input,
    .form-select {
      width: 100%;
      height: 40px;
      border: 1px solid #d1d5db;
      border-radius: 7px;
      padding: 0 11px;
      outline: none;
      font-size: 12px;
      color: #374151;
      background: white;
    }

    .form-input:focus,
    .form-select:focus {
      border-color: #14b8a6;
    }

    .input-with-button {
      position: relative;
    }

    .input-with-button .form-input {
      padding-right: 45px;
    }

    .password-button {
      position: absolute;
      right: 7px;
      top: 6px;
      width: 30px;
      height: 28px;
      border: none;
      background: transparent;
      cursor: pointer;
      font-size: 14px;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }

    /* =========================================
       SAVE BUTTON
    ========================================= */

    .save-button {
      border: none;
      background: #14b8a6;
      color: white;
      padding: 10px 17px;
      border-radius: 7px;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
    }

    .save-button:hover {
      opacity: 0.85;
    }

    /* =========================================
       TOGGLE ROW
    ========================================= */

    .toggle-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 13px 0;
      border-bottom: 1px solid #f0f1f3;
    }

    .toggle-row:last-child {
      border-bottom: none;
    }

    .toggle-info {
      padding-right: 20px;
    }

    .toggle-title {
      font-size: 12px;
      font-weight: 700;
      color: #374151;
    }

    .toggle-description {
      margin-top: 3px;
      font-size: 10px;
      color: #9ca3af;
    }

    /* =========================================
       SWITCH
    ========================================= */

    .switch {
      position: relative;
      display: inline-block;
      width: 42px;
      height: 23px;
      flex-shrink: 0;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      inset: 0;
      background: #d1d5db;
      border-radius: 30px;
      transition: 0.2s;
    }

    .slider:before {
      content: "";
      position: absolute;
      height: 17px;
      width: 17px;
      left: 3px;
      top: 3px;
      background: white;
      border-radius: 50%;
      transition: 0.2s;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    }

    .switch input:checked + .slider {
      background: #14b8a6;
    }

    .switch input:checked + .slider:before {
      transform: translateX(19px);
    }

    /* =========================================
       ADMIN PROFILE
    ========================================= */

    .admin-profile {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;
      padding: 15px;
      background: #f9fafb;
      border-radius: 10px;
    }

    .admin-avatar {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: #14b8a6;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 22px;
    }

    .admin-profile h3 {
      margin: 0;
      font-size: 14px;
      color: #111827;
    }

    .admin-profile p {
      margin: 4px 0 0;
      font-size: 10px;
      color: #6b7280;
    }

    /* =========================================
       SYSTEM INFORMATION
    ========================================= */

    .system-info {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }

    .system-info-item {
      background: #f9fafb;
      padding: 14px;
      border-radius: 9px;
    }

    .system-info-item span {
      display: block;
      font-size: 9px;
      color: #9ca3af;
      margin-bottom: 5px;
    }

    .system-info-item strong {
      font-size: 11px;
      color: #374151;
    }

    /* =========================================
       DANGER ZONE
    ========================================= */

    .danger-zone {
      border: 1px solid #fecaca;
      background: #fffafa;
    }

    .danger-zone .settings-card-header {
      border-bottom-color: #fee2e2;
    }

    .danger-icon {
      background: #fef2f2;
    }

    .danger-text {
      font-size: 11px;
      color: #6b7280;
      line-height: 1.5;
      margin-bottom: 15px;
    }

    .logout-button {
      border: 1px solid #ef4444;
      background: white;
      color: #dc2626;
      padding: 9px 15px;
      border-radius: 7px;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
    }

    .logout-button:hover {
      background: #fef2f2;
    }

    /* =========================================
       RESPONSIVE
    ========================================= */

    @media (max-width: 900px) {

      .settings-grid {
        grid-template-columns: 1fr;
      }

      .settings-card.full-width {
        grid-column: auto;
      }

      .system-info {
        grid-template-columns: 1fr;
      }

    }

    @media (max-width: 600px) {

      .settings-page {
        padding: 15px;
      }

      .form-row {
        grid-template-columns: 1fr;
      }

      .settings-header h1 {
        font-size: 24px;
      }

    }

  `;

  return (
    <>
      <style>{styles}</style>

      <div className="settings-page">

        <div className="settings-container">

          {/* =========================================
              HEADER
          ========================================= */}

          <div className="settings-header">

            <h1>
              Settings
            </h1>

            <p>
              Manage Elite-Fit admin account, notifications,
              security and system preferences.
            </p>

          </div>


          {/* =========================================
              SUCCESS MESSAGE
          ========================================= */}

          {saved && (
            <div className="success-message">
              ✓ Settings saved successfully.
            </div>
          )}


          <div className="settings-grid">

            {/* =========================================
                GENERAL SETTINGS
            ========================================= */}

            <div className="settings-card">

              <div className="settings-card-header">

                <div className="settings-card-icon">
                  ⚙️
                </div>

                <div>
                  <h2>
                    General Settings
                  </h2>

                  <p>
                    Manage basic application information
                  </p>
                </div>

              </div>


              <div className="form-group">

                <label>
                  Application Name
                </label>

                <input
                  className="form-input"
                  type="text"
                  value={generalSettings.appName}
                  onChange={(e) =>
                    setGeneralSettings({
                      ...generalSettings,
                      appName: e.target.value,
                    })
                  }
                />

              </div>


              <div className="form-group">

                <label>
                  Admin Email
                </label>

                <input
                  className="form-input"
                  type="email"
                  value={generalSettings.adminEmail}
                  onChange={(e) =>
                    setGeneralSettings({
                      ...generalSettings,
                      adminEmail: e.target.value,
                    })
                  }
                />

              </div>


              <div className="form-group">

                <label>
                  Support Email
                </label>

                <input
                  className="form-input"
                  type="email"
                  value={generalSettings.supportEmail}
                  onChange={(e) =>
                    setGeneralSettings({
                      ...generalSettings,
                      supportEmail: e.target.value,
                    })
                  }
                />

              </div>


              <div className="form-group">

                <label>
                  Time Zone
                </label>

                <select
                  className="form-select"
                  value={generalSettings.timezone}
                  onChange={(e) =>
                    setGeneralSettings({
                      ...generalSettings,
                      timezone: e.target.value,
                    })
                  }
                >

                  <option value="Asia/Karachi">
                    Pakistan Standard Time
                  </option>

                  <option value="Asia/Dubai">
                    Gulf Standard Time
                  </option>

                  <option value="UTC">
                    UTC
                  </option>

                </select>

              </div>


              <button
                className="save-button"
                onClick={saveGeneralSettings}
              >
                Save General Settings
              </button>

            </div>


            {/* =========================================
                ADMIN PROFILE
            ========================================= */}

            <div className="settings-card">

              <div className="settings-card-header">

                <div className="settings-card-icon">
                  👤
                </div>

                <div>
                  <h2>
                    Admin Profile
                  </h2>

                  <p>
                    Administrator account information
                  </p>
                </div>

              </div>


              <div className="admin-profile">

                <div className="admin-avatar">
                  👤
                </div>

                <div>

                  <h3>
                    Admin User
                  </h3>

                  <p>
                    admin@elitefit.com
                  </p>

                </div>

              </div>


              <div className="form-row">

                <div className="form-group">

                  <label>
                    Admin Name
                  </label>

                  <input
                    className="form-input"
                    type="text"
                    value="Admin User"
                    readOnly
                  />

                </div>


                <div className="form-group">

                  <label>
                    Role
                  </label>

                  <input
                    className="form-input"
                    type="text"
                    value="Administrator"
                    readOnly
                  />

                </div>

              </div>


              <div className="form-group">

                <label>
                  Account Email
                </label>

                <input
                  className="form-input"
                  type="email"
                  value="admin@elitefit.com"
                  readOnly
                />

              </div>


              <p
                style={{
                  fontSize: "10px",
                  color: "#9ca3af",
                  margin: "0",
                }}
              >
                Admin profile information can be connected
                to the backend later.
              </p>

            </div>


            {/* =========================================
                NOTIFICATION SETTINGS
            ========================================= */}

            <div className="settings-card">

              <div className="settings-card-header">

                <div className="settings-card-icon">
                  🔔
                </div>

                <div>
                  <h2>
                    Notification Settings
                  </h2>

                  <p>
                    Control admin notification preferences
                  </p>
                </div>

              </div>


              {/* NEW USER */}

              <div className="toggle-row">

                <div className="toggle-info">

                  <div className="toggle-title">
                    New User Registration
                  </div>

                  <div className="toggle-description">
                    Notify admin when a new user registers.
                  </div>

                </div>

                <label className="switch">

                  <input
                    type="checkbox"
                    checked={
                      notificationSettings.newUser
                    }
                    onChange={(e) =>
                      setNotificationSettings({
                        ...notificationSettings,
                        newUser: e.target.checked,
                      })
                    }
                  />

                  <span className="slider"></span>

                </label>

              </div>


              {/* WORKOUT */}

              <div className="toggle-row">

                <div className="toggle-info">

                  <div className="toggle-title">
                    Workout Completed
                  </div>

                  <div className="toggle-description">
                    Notify when users complete workouts.
                  </div>

                </div>

                <label className="switch">

                  <input
                    type="checkbox"
                    checked={
                      notificationSettings.workoutCompleted
                    }
                    onChange={(e) =>
                      setNotificationSettings({
                        ...notificationSettings,
                        workoutCompleted:
                          e.target.checked,
                      })
                    }
                  />

                  <span className="slider"></span>

                </label>

              </div>


              {/* POSTURE */}

              <div className="toggle-row">

                <div className="toggle-info">

                  <div className="toggle-title">
                    Posture Analysis
                  </div>

                  <div className="toggle-description">
                    Notify about completed posture analyses.
                  </div>

                </div>

                <label className="switch">

                  <input
                    type="checkbox"
                    checked={
                      notificationSettings.postureAnalysis
                    }
                    onChange={(e) =>
                      setNotificationSettings({
                        ...notificationSettings,
                        postureAnalysis:
                          e.target.checked,
                      })
                    }
                  />

                  <span className="slider"></span>

                </label>

              </div>


              {/* SUBSCRIPTION */}

              <div className="toggle-row">

                <div className="toggle-info">

                  <div className="toggle-title">
                    Subscription Updates
                  </div>

                  <div className="toggle-description">
                    Notify about subscription activities.
                  </div>

                </div>

                <label className="switch">

                  <input
                    type="checkbox"
                    checked={
                      notificationSettings.subscription
                    }
                    onChange={(e) =>
                      setNotificationSettings({
                        ...notificationSettings,
                        subscription:
                          e.target.checked,
                      })
                    }
                  />

                  <span className="slider"></span>

                </label>

              </div>


              {/* SYSTEM */}

              <div className="toggle-row">

                <div className="toggle-info">

                  <div className="toggle-title">
                    System Alerts
                  </div>

                  <div className="toggle-description">
                    Receive important system alerts.
                  </div>

                </div>

                <label className="switch">

                  <input
                    type="checkbox"
                    checked={
                      notificationSettings.systemAlerts
                    }
                    onChange={(e) =>
                      setNotificationSettings({
                        ...notificationSettings,
                        systemAlerts:
                          e.target.checked,
                      })
                    }
                  />

                  <span className="slider"></span>

                </label>

              </div>


              <button
                className="save-button"
                style={{ marginTop: "18px" }}
                onClick={
                  saveNotificationSettings
                }
              >
                Save Notification Settings
              </button>

            </div>


            {/* =========================================
                SECURITY
            ========================================= */}

            <div className="settings-card">

              <div className="settings-card-header">

                <div className="settings-card-icon">
                  🔐
                </div>

                <div>
                  <h2>
                    Security
                  </h2>

                  <p>
                    Manage admin account security
                  </p>
                </div>

              </div>


              <div className="toggle-row">

                <div className="toggle-info">

                  <div className="toggle-title">
                    Two-Factor Authentication
                  </div>

                  <div className="toggle-description">
                    Add an additional security layer to admin login.
                  </div>

                </div>

                <label className="switch">

                  <input
                    type="checkbox"
                    checked={
                      securitySettings.twoFactor
                    }
                    onChange={(e) =>
                      setSecuritySettings({
                        ...securitySettings,
                        twoFactor:
                          e.target.checked,
                      })
                    }
                  />

                  <span className="slider"></span>

                </label>

              </div>


              <div className="toggle-row">

                <div className="toggle-info">

                  <div className="toggle-title">
                    Login Alerts
                  </div>

                  <div className="toggle-description">
                    Receive notification when admin account is accessed.
                  </div>

                </div>

                <label className="switch">

                  <input
                    type="checkbox"
                    checked={
                      securitySettings.loginAlerts
                    }
                    onChange={(e) =>
                      setSecuritySettings({
                        ...securitySettings,
                        loginAlerts:
                          e.target.checked,
                      })
                    }
                  />

                  <span className="slider"></span>

                </label>

              </div>


              {/* PASSWORD */}

              <div
                style={{
                  marginTop: "20px",
                  paddingTop: "18px",
                  borderTop:
                    "1px solid #eef0f2",
                }}
              >

                <h3
                  style={{
                    margin: "0 0 15px",
                    fontSize: "13px",
                    color: "#374151",
                  }}
                >
                  Change Password
                </h3>


                {/* CURRENT PASSWORD */}

                <div className="form-group">

                  <label>
                    Current Password
                  </label>

                  <div className="input-with-button">

                    <input
                      className="form-input"
                      type={
                        showCurrentPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Enter current password"
                      value={
                        passwordData.currentPassword
                      }
                      onChange={(e) =>
                        setPasswordData({
                          ...passwordData,
                          currentPassword:
                            e.target.value,
                        })
                      }
                    />

                    <button
                      className="password-button"
                      onClick={() =>
                        setShowCurrentPassword(
                          !showCurrentPassword
                        )
                      }
                    >
                      {showCurrentPassword
                        ? "🙈"
                        : "👁"}
                    </button>

                  </div>

                </div>


                {/* NEW PASSWORD */}

                <div className="form-group">

                  <label>
                    New Password
                  </label>

                  <div className="input-with-button">

                    <input
                      className="form-input"
                      type={
                        showNewPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Enter new password"
                      value={
                        passwordData.newPassword
                      }
                      onChange={(e) =>
                        setPasswordData({
                          ...passwordData,
                          newPassword:
                            e.target.value,
                        })
                      }
                    />

                    <button
                      className="password-button"
                      onClick={() =>
                        setShowNewPassword(
                          !showNewPassword
                        )
                      }
                    >
                      {showNewPassword
                        ? "🙈"
                        : "👁"}
                    </button>

                  </div>

                </div>


                {/* CONFIRM PASSWORD */}

                <div className="form-group">

                  <label>
                    Confirm New Password
                  </label>

                  <div className="input-with-button">

                    <input
                      className="form-input"
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Confirm new password"
                      value={
                        passwordData.confirmPassword
                      }
                      onChange={(e) =>
                        setPasswordData({
                          ...passwordData,
                          confirmPassword:
                            e.target.value,
                        })
                      }
                    />

                    <button
                      className="password-button"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
                      }
                    >
                      {showConfirmPassword
                        ? "🙈"
                        : "👁"}
                    </button>

                  </div>

                </div>


                <button
                  className="save-button"
                  onClick={changePassword}
                >
                  Change Password
                </button>

              </div>

            </div>


            {/* =========================================
                SYSTEM INFORMATION
            ========================================= */}

            <div className="settings-card full-width">

              <div className="settings-card-header">

                <div className="settings-card-icon">
                  💻
                </div>

                <div>
                  <h2>
                    System Information
                  </h2>

                  <p>
                    Basic information about Elite-Fit system
                  </p>
                </div>

              </div>


              <div className="system-info">

                <div className="system-info-item">

                  <span>
                    Application
                  </span>

                  <strong>
                    Elite-Fit
                  </strong>

                </div>


                <div className="system-info-item">

                  <span>
                    Panel
                  </span>

                  <strong>
                    Admin Dashboard
                  </strong>

                </div>


                <div className="system-info-item">

                  <span>
                    Version
                  </span>

                  <strong>
                    1.0.0
                  </strong>

                </div>


                <div className="system-info-item">

                  <span>
                    Frontend
                  </span>

                  <strong>
                    React.js
                  </strong>

                </div>


                <div className="system-info-item">

                  <span>
                    Backend
                  </span>

                  <strong>
                    Node.js / Express
                  </strong>

                </div>


                <div className="system-info-item">

                  <span>
                    Database
                  </span>

                  <strong>
                    PostgreSQL
                  </strong>

                </div>

              </div>

            </div>


            {/* =========================================
                DANGER ZONE
            ========================================= */}

            <div className="settings-card danger-zone full-width">

              <div className="settings-card-header">

                <div className="settings-card-icon danger-icon">
                  ⚠️
                </div>

                <div>
                  <h2>
                    Account Actions
                  </h2>

                  <p>
                    Administrative account actions
                  </p>
                </div>

              </div>


              <p className="danger-text">
                Logging out will end the current administrator
                session. Backend authentication can be connected
                later.
              </p>


              <button
                className="logout-button"
                onClick={() =>
                  alert(
                    "Logout functionality will be connected with authentication later."
                  )
                }
              >
                Logout Admin
              </button>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Settings;