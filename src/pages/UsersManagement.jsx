import React, { useState } from "react";

export default function UsersManagement() {
  // =========================
  // DEMO USERS
  // =========================

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ali Khan",
      email: "ali@gmail.com",
      age: 24,
      gender: "Male",
      goal: "Weight Loss",
      subscription: "Premium",
      status: "Active",
      registered: "20 Aug 2026",
      bloodPressure: "120/80",
      sugarLevel: "Normal",
      heartBeat: "72 bpm",
      temperature: "36.7 °C",
      pregnancyStatus: "N/A",
      specialCondition: "None",
    },
    {
      id: 2,
      name: "Ayesha Ahmed",
      email: "ayesha@gmail.com",
      age: 27,
      gender: "Female",
      goal: "Stay Fit",
      subscription: "Premium",
      status: "Active",
      registered: "22 Aug 2026",
      bloodPressure: "118/78",
      sugarLevel: "Normal",
      heartBeat: "75 bpm",
      temperature: "36.6 °C",
      pregnancyStatus: "No",
      specialCondition: "None",
    },
    {
      id: 3,
      name: "Ahmed Raza",
      email: "ahmed@gmail.com",
      age: 30,
      gender: "Male",
      goal: "Weight Gain",
      subscription: "Free",
      status: "Active",
      registered: "24 Aug 2026",
      bloodPressure: "122/80",
      sugarLevel: "Normal",
      heartBeat: "70 bpm",
      temperature: "36.8 °C",
      pregnancyStatus: "N/A",
      specialCondition: "None",
    },
    {
      id: 4,
      name: "Sara Malik",
      email: "sara@gmail.com",
      age: 25,
      gender: "Female",
      goal: "Weight Loss",
      subscription: "Premium",
      status: "Inactive",
      registered: "25 Aug 2026",
      bloodPressure: "125/82",
      sugarLevel: "Normal",
      heartBeat: "78 bpm",
      temperature: "36.7 °C",
      pregnancyStatus: "No",
      specialCondition: "Knee Pain",
    },
    {
      id: 5,
      name: "Usman Tariq",
      email: "usman@gmail.com",
      age: 29,
      gender: "Male",
      goal: "Stay Fit",
      subscription: "Free",
      status: "Active",
      registered: "27 Aug 2026",
      bloodPressure: "120/80",
      sugarLevel: "Normal",
      heartBeat: "73 bpm",
      temperature: "36.6 °C",
      pregnancyStatus: "N/A",
      specialCondition: "None",
    },
  ]);

  // =========================
  // STATES
  // =========================

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [goalFilter, setGoalFilter] = useState("All");
  const [selectedUser, setSelectedUser] = useState(null);

  // =========================
  // FILTER USERS
  // =========================

  const filteredUsers = users.filter((user) => {
    const searchMatch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const statusMatch =
      statusFilter === "All" || user.status === statusFilter;

    const goalMatch =
      goalFilter === "All" || user.goal === goalFilter;

    return searchMatch && statusMatch && goalMatch;
  });

  // =========================
  // STATISTICS
  // =========================

  const totalUsers = users.length;

  const activeUsers = users.filter(
    (user) => user.status === "Active"
  ).length;

  const inactiveUsers = users.filter(
    (user) => user.status === "Inactive"
  ).length;

  const premiumUsers = users.filter(
    (user) => user.subscription === "Premium"
  ).length;

  // =========================
  // ACTIVATE / DEACTIVATE
  // =========================

  const toggleStatus = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              status:
                user.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : user
      )
    );
  };

  // =========================
  // DELETE USER
  // =========================

  const deleteUser = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (confirmDelete) {
      setUsers(
        users.filter((user) => user.id !== id)
      );

      if (selectedUser?.id === id) {
        setSelectedUser(null);
      }
    }
  };

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        .users-page {
          min-height: 100vh;
          background: #f5f7fb;
          padding: 28px;
          font-family: Arial, Helvetica, sans-serif;
          color: #1f2937;
        }

        .users-container {
          max-width: 1400px;
          margin: auto;
        }

        /* ================= HEADER ================= */

        .page-header {
          margin-bottom: 28px;
        }

        .page-header h1 {
          margin: 0;
          font-size: 30px;
          font-weight: 700;
          color: #111827;
        }

        .page-header p {
          margin: 7px 0 0;
          color: #6b7280;
          font-size: 14px;
        }

        /* ================= STAT CARDS ================= */

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 25px;
        }

        .stat-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 20px;
          box-shadow: 0 3px 12px rgba(0,0,0,0.05);
        }

        .stat-icon {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ecfdf5;
          border-radius: 11px;
          font-size: 21px;
        }

        .stat-card h2 {
          margin: 15px 0 4px;
          font-size: 28px;
          color: #111827;
        }

        .stat-card p {
          margin: 0;
          color: #6b7280;
          font-size: 13px;
        }

        /* ================= MAIN CARD ================= */

        .users-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 3px 12px rgba(0,0,0,0.05);
        }

        .users-card-header {
          padding: 20px;
          border-bottom: 1px solid #e5e7eb;
        }

        .users-card-header h2 {
          margin: 0;
          font-size: 19px;
          color: #111827;
        }

        .users-card-header p {
          margin: 6px 0 0;
          font-size: 13px;
          color: #6b7280;
        }

        /* ================= FILTERS ================= */

        .filters {
          display: flex;
          gap: 12px;
          padding: 18px 20px;
          background: #fafafa;
          border-bottom: 1px solid #e5e7eb;
        }

        .search-input {
          flex: 1;
          height: 42px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          padding: 0 13px;
          outline: none;
          font-size: 13px;
        }

        .search-input:focus {
          border-color: #14b8a6;
        }

        .filter-select {
          width: 180px;
          height: 42px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          padding: 0 12px;
          background: white;
          outline: none;
          font-size: 13px;
        }

        .filter-select:focus {
          border-color: #14b8a6;
        }

        /* ================= TABLE ================= */

        .table-wrapper {
          width: 100%;
          overflow-x: auto;
        }

        .users-table {
          width: 100%;
          min-width: 1000px;
          border-collapse: collapse;
        }

        .users-table th {
          background: #f9fafb;
          text-align: left;
          padding: 14px 18px;
          font-size: 12px;
          color: #4b5563;
          border-bottom: 1px solid #e5e7eb;
        }

        .users-table td {
          padding: 15px 18px;
          font-size: 13px;
          border-bottom: 1px solid #eef0f2;
          color: #374151;
        }

        .users-table tr:hover {
          background: #fafafa;
        }

        /* ================= USER ================= */

        .user-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #ccfbf1;
          color: #0f766e;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }

        .user-info strong {
          display: block;
          color: #111827;
          font-size: 13px;
        }

        .user-info small {
          display: block;
          margin-top: 3px;
          color: #9ca3af;
          font-size: 11px;
        }

        /* ================= BADGES ================= */

        .badge {
          display: inline-block;
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
        }

        .active {
          background: #dcfce7;
          color: #166534;
        }

        .inactive {
          background: #fee2e2;
          color: #991b1b;
        }

        .premium {
          background: #ede9fe;
          color: #6d28d9;
        }

        .free {
          background: #f3f4f6;
          color: #4b5563;
        }

        /* ================= BUTTONS ================= */

        .actions {
          display: flex;
          gap: 7px;
        }

        .btn {
          border: none;
          border-radius: 6px;
          padding: 7px 10px;
          cursor: pointer;
          font-size: 11px;
          font-weight: 600;
        }

        .view-btn {
          background: #e0f2fe;
          color: #0369a1;
        }

        .status-btn {
          background: #ecfdf5;
          color: #047857;
        }

        .delete-btn {
          background: #fee2e2;
          color: #b91c1c;
        }

        .btn:hover {
          opacity: 0.8;
        }

        /* ================= EMPTY ================= */

        .empty {
          text-align: center;
          padding: 50px;
          color: #6b7280;
        }

        /* ================= MODAL ================= */

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.55);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          z-index: 9999;
        }

        .modal {
          background: white;
          width: 100%;
          max-width: 850px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 15px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.2);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #e5e7eb;
        }

        .modal-header h2 {
          margin: 0;
          font-size: 20px;
          color: #111827;
        }

        .close-btn {
          width: 34px;
          height: 34px;
          border: none;
          border-radius: 50%;
          background: #f3f4f6;
          cursor: pointer;
          font-size: 19px;
        }

        .modal-body {
          padding: 22px;
        }

        .profile {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
        }

        .large-avatar {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          background: #ccfbf1;
          color: #0f766e;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 23px;
          font-weight: 700;
        }

        .profile h3 {
          margin: 0 0 5px;
          color: #111827;
        }

        .profile p {
          margin: 0;
          color: #6b7280;
          font-size: 13px;
        }

        .details-section {
          margin-bottom: 25px;
        }

        .details-section h3 {
          margin: 0 0 14px;
          padding-bottom: 9px;
          border-bottom: 1px solid #e5e7eb;
          font-size: 16px;
          color: #111827;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .detail-box {
          background: #f9fafb;
          padding: 13px;
          border-radius: 8px;
        }

        .detail-box span {
          display: block;
          font-size: 10px;
          color: #9ca3af;
          margin-bottom: 5px;
        }

        .detail-box strong {
          font-size: 13px;
          color: #374151;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1000px) {

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .details-grid {
            grid-template-columns: repeat(2, 1fr);
          }

        }

        @media (max-width: 650px) {

          .users-page {
            padding: 15px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .filters {
            flex-direction: column;
          }

          .filter-select {
            width: 100%;
          }

          .details-grid {
            grid-template-columns: 1fr;
          }

        }

      `}</style>


      {/* =====================================================
          PAGE
      ===================================================== */}

      <div className="users-page">

        <div className="users-container">

          {/* HEADER */}

          <div className="page-header">

            <h1>
              Users Management
            </h1>

            <p>
              Manage and monitor registered Elite-Fit users
            </p>

          </div>


          {/* ================= STATISTICS ================= */}

          <div className="stats-grid">

            <div className="stat-card">

              <div className="stat-icon">
                👥
              </div>

              <h2>
                {totalUsers}
              </h2>

              <p>
                Total Users
              </p>

            </div>


            <div className="stat-card">

              <div className="stat-icon">
                🟢
              </div>

              <h2>
                {activeUsers}
              </h2>

              <p>
                Active Users
              </p>

            </div>


            <div className="stat-card">

              <div className="stat-icon">
                🔴
              </div>

              <h2>
                {inactiveUsers}
              </h2>

              <p>
                Inactive Users
              </p>

            </div>


            <div className="stat-card">

              <div className="stat-icon">
                💳
              </div>

              <h2>
                {premiumUsers}
              </h2>

              <p>
                Premium Users
              </p>

            </div>

          </div>


          {/* ================= USERS TABLE ================= */}

          <div className="users-card">

            <div className="users-card-header">

              <h2>
                Registered Users
              </h2>

              <p>
                View user information and manage account status
              </p>

            </div>


            {/* FILTERS */}

            <div className="filters">

              <input
                className="search-input"
                type="text"
                placeholder="Search by name or email..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />


              <select
                className="filter-select"
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value)
                }
              >

                <option value="All">
                  All Status
                </option>

                <option value="Active">
                  Active
                </option>

                <option value="Inactive">
                  Inactive
                </option>

              </select>


              <select
                className="filter-select"
                value={goalFilter}
                onChange={(e) =>
                  setGoalFilter(e.target.value)
                }
              >

                <option value="All">
                  All Goals
                </option>

                <option value="Weight Loss">
                  Weight Loss
                </option>

                <option value="Weight Gain">
                  Weight Gain
                </option>

                <option value="Stay Fit">
                  Stay Fit
                </option>

              </select>

            </div>


            {/* TABLE */}

            <div className="table-wrapper">

              {filteredUsers.length === 0 ? (

                <div className="empty">

                  <h3>
                    No Users Found
                  </h3>

                  <p>
                    Try another search or filter.
                  </p>

                </div>

              ) : (

                <table className="users-table">

                  <thead>

                    <tr>

                      <th>
                        User
                      </th>

                      <th>
                        Age
                      </th>

                      <th>
                        Gender
                      </th>

                      <th>
                        Fitness Goal
                      </th>

                      <th>
                        Subscription
                      </th>

                      <th>
                        Status
                      </th>

                      <th>
                        Registered
                      </th>

                      <th>
                        Actions
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                    {filteredUsers.map((user) => (

                      <tr key={user.id}>

                        <td>

                          <div className="user-info">

                            <div className="avatar">
                              {user.name
                                .charAt(0)
                                .toUpperCase()}
                            </div>

                            <div>

                              <strong>
                                {user.name}
                              </strong>

                              <small>
                                {user.email}
                              </small>

                            </div>

                          </div>

                        </td>


                        <td>
                          {user.age}
                        </td>


                        <td>
                          {user.gender}
                        </td>


                        <td>
                          {user.goal}
                        </td>


                        <td>

                          <span
                            className={`badge ${
                              user.subscription ===
                              "Premium"
                                ? "premium"
                                : "free"
                            }`}
                          >
                            {user.subscription}
                          </span>

                        </td>


                        <td>

                          <span
                            className={`badge ${
                              user.status === "Active"
                                ? "active"
                                : "inactive"
                            }`}
                          >
                            {user.status}
                          </span>

                        </td>


                        <td>
                          {user.registered}
                        </td>


                        <td>

                          <div className="actions">

                            <button
                              className="btn view-btn"
                              onClick={() =>
                                setSelectedUser(user)
                              }
                            >
                              View
                            </button>


                            <button
                              className="btn status-btn"
                              onClick={() =>
                                toggleStatus(user.id)
                              }
                            >
                              {user.status === "Active"
                                ? "Deactivate"
                                : "Activate"}
                            </button>


                            <button
                              className="btn delete-btn"
                              onClick={() =>
                                deleteUser(user.id)
                              }
                            >
                              Delete
                            </button>

                          </div>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              )}

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          USER DETAILS MODAL
      ===================================================== */}

      {selectedUser && (

        <div
          className="modal-overlay"
          onClick={() => setSelectedUser(null)}
        >

          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="modal-header">

              <h2>
                User Details
              </h2>

              <button
                className="close-btn"
                onClick={() => setSelectedUser(null)}
              >
                ×
              </button>

            </div>


            <div className="modal-body">

              {/* PROFILE */}

              <div className="profile">

                <div className="large-avatar">

                  {selectedUser.name
                    .charAt(0)
                    .toUpperCase()}

                </div>

                <div>

                  <h3>
                    {selectedUser.name}
                  </h3>

                  <p>
                    {selectedUser.email}
                  </p>

                </div>

              </div>


              {/* PERSONAL INFORMATION */}

              <div className="details-section">

                <h3>
                  Personal Information
                </h3>

                <div className="details-grid">

                  <div className="detail-box">
                    <span>Age</span>
                    <strong>
                      {selectedUser.age}
                    </strong>
                  </div>

                  <div className="detail-box">
                    <span>Gender</span>
                    <strong>
                      {selectedUser.gender}
                    </strong>
                  </div>

                  <div className="detail-box">
                    <span>Fitness Goal</span>
                    <strong>
                      {selectedUser.goal}
                    </strong>
                  </div>

                  <div className="detail-box">
                    <span>Subscription</span>
                    <strong>
                      {selectedUser.subscription}
                    </strong>
                  </div>

                  <div className="detail-box">
                    <span>Status</span>
                    <strong>
                      {selectedUser.status}
                    </strong>
                  </div>

                  <div className="detail-box">
                    <span>Registration Date</span>
                    <strong>
                      {selectedUser.registered}
                    </strong>
                  </div>

                </div>

              </div>


              {/* HEALTH INFORMATION */}

              <div className="details-section">

                <h3>
                  Health Information
                </h3>

                <div className="details-grid">

                  <div className="detail-box">
                    <span>Blood Pressure</span>
                    <strong>
                      {selectedUser.bloodPressure}
                    </strong>
                  </div>

                  <div className="detail-box">
                    <span>Sugar Level</span>
                    <strong>
                      {selectedUser.sugarLevel}
                    </strong>
                  </div>

                  <div className="detail-box">
                    <span>Heart Beat</span>
                    <strong>
                      {selectedUser.heartBeat}
                    </strong>
                  </div>

                  <div className="detail-box">
                    <span>Temperature</span>
                    <strong>
                      {selectedUser.temperature}
                    </strong>
                  </div>

                  <div className="detail-box">
                    <span>Pregnancy Status</span>
                    <strong>
                      {selectedUser.pregnancyStatus}
                    </strong>
                  </div>

                  <div className="detail-box">
                    <span>Special Condition</span>
                    <strong>
                      {selectedUser.specialCondition}
                    </strong>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </>
  );
}