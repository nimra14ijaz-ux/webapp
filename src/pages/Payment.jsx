import React, { useState } from "react";

function Payment() {
  // ================================
  // DEMO PAYMENT DATA
  // ================================

  const [payments, setPayments] = useState([
    {
      id: 1,
      user: "Ali Khan",
      email: "ali@example.com",
      plan: "Monthly",
      amount: "Rs. 1,499",
      method: "Bank Transfer",
      transactionId: "TXN-10001",
      date: "01 Sep 2026",
      status: "Pending",
    },
    {
      id: 2,
      user: "Sara Ahmed",
      email: "sara@example.com",
      plan: "Yearly",
      amount: "Rs. 14,999",
      method: "JazzCash",
      transactionId: "TXN-10002",
      date: "31 Aug 2026",
      status: "Verified",
    },
    {
      id: 3,
      user: "Hamza Ali",
      email: "hamza@example.com",
      plan: "Monthly",
      amount: "Rs. 1,499",
      method: "EasyPaisa",
      transactionId: "TXN-10003",
      date: "30 Aug 2026",
      status: "Pending",
    },
    {
      id: 4,
      user: "Ayesha Malik",
      email: "ayesha@example.com",
      plan: "Monthly",
      amount: "Rs. 1,499",
      method: "Bank Transfer",
      transactionId: "TXN-10004",
      date: "29 Aug 2026",
      status: "Rejected",
    },
    {
      id: 5,
      user: "Usman Raza",
      email: "usman@example.com",
      plan: "Yearly",
      amount: "Rs. 14,999",
      method: "JazzCash",
      transactionId: "TXN-10005",
      date: "28 Aug 2026",
      status: "Verified",
    },
  ]);

  // ================================
  // FILTER STATES
  // ================================

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [planFilter, setPlanFilter] = useState("All");

  // ================================
  // STATISTICS
  // ================================

  const totalPayments = payments.length;

  const pendingPayments = payments.filter(
    (payment) => payment.status === "Pending"
  ).length;

  const verifiedPayments = payments.filter(
    (payment) => payment.status === "Verified"
  ).length;

  const rejectedPayments = payments.filter(
    (payment) => payment.status === "Rejected"
  ).length;

  // ================================
  // FILTER DATA
  // ================================

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.user.toLowerCase().includes(search.toLowerCase()) ||
      payment.email.toLowerCase().includes(search.toLowerCase()) ||
      payment.transactionId
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      payment.status === statusFilter;

    const matchesPlan =
      planFilter === "All" ||
      payment.plan === planFilter;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesPlan
    );
  });

  // ================================
  // VERIFY PAYMENT
  // ================================

  const verifyPayment = (id) => {
    const confirmVerify = window.confirm(
      "Are you sure you want to verify this payment?"
    );

    if (!confirmVerify) {
      return;
    }

    setPayments(
      payments.map((payment) =>
        payment.id === id
          ? {
              ...payment,
              status: "Verified",
            }
          : payment
      )
    );

    alert(
      "Payment verified successfully. Subscription can now be activated."
    );
  };

  // ================================
  // REJECT PAYMENT
  // ================================

  const rejectPayment = (id) => {
    const confirmReject = window.confirm(
      "Are you sure you want to reject this payment?"
    );

    if (!confirmReject) {
      return;
    }

    setPayments(
      payments.map((payment) =>
        payment.id === id
          ? {
              ...payment,
              status: "Rejected",
            }
          : payment
      )
    );

    alert("Payment has been rejected.");
  };

  // ================================
  // ALL CSS IN SAME FILE
  // ================================

  const styles = `
    * {
      box-sizing: border-box;
    }

    .payment-page {
      min-height: 100vh;
      background: #f5f7fb;
      padding: 28px;
      font-family: Arial, Helvetica, sans-serif;
      color: #1f2937;
    }

    .payment-container {
      max-width: 1400px;
      margin: auto;
    }

    /* HEADER */

    .payment-header {
      margin-bottom: 25px;
    }

    .payment-header h1 {
      margin: 0;
      font-size: 30px;
      color: #111827;
    }

    .payment-header p {
      margin-top: 7px;
      color: #6b7280;
      font-size: 14px;
    }

    /* STATISTICS */

    .payment-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      margin-bottom: 25px;
    }

    .payment-stat {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      padding: 20px;
      box-shadow: 0 3px 12px rgba(0,0,0,0.05);
    }

    .payment-stat-icon {
      width: 43px;
      height: 43px;
      border-radius: 10px;
      background: #ecfdf5;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 19px;
    }

    .payment-stat h2 {
      margin: 14px 0 4px;
      font-size: 27px;
      color: #111827;
    }

    .payment-stat p {
      margin: 0;
      font-size: 11px;
      color: #6b7280;
    }

    .pending-number {
      color: #d97706 !important;
    }

    .verified-number {
      color: #059669 !important;
    }

    .rejected-number {
      color: #dc2626 !important;
    }

    /* CARD */

    .payment-card {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 3px 12px rgba(0,0,0,0.05);
    }

    .payment-card-header {
      padding: 20px;
      border-bottom: 1px solid #e5e7eb;
    }

    .payment-card-header h2 {
      margin: 0;
      font-size: 18px;
      color: #111827;
    }

    .payment-card-header p {
      margin: 5px 0 0;
      font-size: 11px;
      color: #6b7280;
    }

    /* FILTERS */

    .payment-filters {
      display: flex;
      gap: 10px;
      padding: 15px 20px;
      background: #fafafa;
      border-bottom: 1px solid #e5e7eb;
    }

    .payment-search {
      flex: 1;
      height: 40px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      padding: 0 12px;
      outline: none;
      font-size: 12px;
    }

    .payment-search:focus {
      border-color: #14b8a6;
    }

    .payment-select {
      width: 150px;
      height: 40px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      background: white;
      padding: 0 10px;
      font-size: 11px;
      outline: none;
    }

    /* TABLE */

    .payment-table-wrapper {
      width: 100%;
      overflow-x: auto;
    }

    .payment-table {
      width: 100%;
      border-collapse: collapse;
      min-width: 1150px;
    }

    .payment-table th {
      background: #f9fafb;
      padding: 13px;
      text-align: left;
      font-size: 10px;
      color: #6b7280;
      text-transform: uppercase;
      border-bottom: 1px solid #e5e7eb;
    }

    .payment-table td {
      padding: 15px 13px;
      border-bottom: 1px solid #eef0f2;
      font-size: 11px;
      color: #374151;
    }

    .payment-table tr:hover {
      background: #fafafa;
    }

    .user-name {
      font-weight: 700;
      color: #111827;
    }

    .user-email {
      font-size: 9px;
      color: #9ca3af;
      margin-top: 3px;
    }

    .transaction-id {
      font-size: 10px;
      font-weight: 700;
      color: #374151;
    }

    /* BADGES */

    .payment-badge {
      display: inline-block;
      padding: 5px 9px;
      border-radius: 15px;
      font-size: 9px;
      font-weight: 700;
    }

    .monthly-badge {
      background: #eff6ff;
      color: #2563eb;
    }

    .yearly-badge {
      background: #f5f3ff;
      color: #7c3aed;
    }

    .pending-badge {
      background: #fffbeb;
      color: #d97706;
    }

    .verified-badge {
      background: #ecfdf5;
      color: #059669;
    }

    .rejected-badge {
      background: #fef2f2;
      color: #dc2626;
    }

    /* BUTTONS */

    .payment-action-button {
      border: none;
      padding: 7px 10px;
      border-radius: 6px;
      font-size: 9px;
      font-weight: 700;
      cursor: pointer;
      margin-right: 5px;
    }

    .verify-button {
      background: #ecfdf5;
      color: #059669;
    }

    .reject-button {
      background: #fef2f2;
      color: #dc2626;
    }

    .payment-action-button:hover {
      opacity: 0.75;
    }

    .already-verified {
      color: #059669;
      font-size: 9px;
      font-weight: 700;
    }

    .already-rejected {
      color: #dc2626;
      font-size: 9px;
      font-weight: 700;
    }

    /* EMPTY */

    .empty-payments {
      text-align: center;
      padding: 55px 20px;
      color: #6b7280;
    }

    .empty-payments div {
      font-size: 40px;
      margin-bottom: 10px;
    }

    .empty-payments h3 {
      margin: 0 0 5px;
      color: #374151;
      font-size: 15px;
    }

    .empty-payments p {
      margin: 0;
      font-size: 11px;
    }

    /* RESPONSIVE */

    @media (max-width: 900px) {
      .payment-stats {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 600px) {
      .payment-page {
        padding: 15px;
      }

      .payment-stats {
        grid-template-columns: 1fr;
      }

      .payment-filters {
        flex-direction: column;
      }

      .payment-select {
        width: 100%;
      }
    }
  `;

  // ================================
  // OUTPUT
  // ================================

  return (
    <>
      <style>{styles}</style>

      <div className="payment-page">

        <div className="payment-container">

          {/* HEADER */}

          <div className="payment-header">
            <h1>Payment</h1>

            <p>
              Manage and verify user subscription payments.
            </p>
          </div>


          {/* STATISTICS */}

          <div className="payment-stats">

            <div className="payment-stat">

              <div className="payment-stat-icon">
                💳
              </div>

              <h2>
                {totalPayments}
              </h2>

              <p>
                Total Payments
              </p>

            </div>


            <div className="payment-stat">

              <div className="payment-stat-icon">
                ⏳
              </div>

              <h2 className="pending-number">
                {pendingPayments}
              </h2>

              <p>
                Pending Payments
              </p>

            </div>


            <div className="payment-stat">

              <div className="payment-stat-icon">
                ✓
              </div>

              <h2 className="verified-number">
                {verifiedPayments}
              </h2>

              <p>
                Verified Payments
              </p>

            </div>


            <div className="payment-stat">

              <div className="payment-stat-icon">
                ✕
              </div>

              <h2 className="rejected-number">
                {rejectedPayments}
              </h2>

              <p>
                Rejected Payments
              </p>

            </div>

          </div>


          {/* PAYMENT TABLE */}

          <div className="payment-card">

            <div className="payment-card-header">

              <h2>
                Subscription Payments
              </h2>

              <p>
                Review user payments and verify or reject
                subscription transactions.
              </p>

            </div>


            {/* FILTERS */}

            <div className="payment-filters">

              <input
                className="payment-search"
                type="text"
                placeholder="Search user, email or transaction ID..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />


              <select
                className="payment-select"
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value)
                }
              >

                <option value="All">
                  All Status
                </option>

                <option value="Pending">
                  Pending
                </option>

                <option value="Verified">
                  Verified
                </option>

                <option value="Rejected">
                  Rejected
                </option>

              </select>


              <select
                className="payment-select"
                value={planFilter}
                onChange={(e) =>
                  setPlanFilter(e.target.value)
                }
              >

                <option value="All">
                  All Plans
                </option>

                <option value="Monthly">
                  Monthly
                </option>

                <option value="Yearly">
                  Yearly
                </option>

              </select>

            </div>


            {/* TABLE */}

            {filteredPayments.length === 0 ? (

              <div className="empty-payments">

                <div>💳</div>

                <h3>
                  No Payments Found
                </h3>

                <p>
                  No payment matches your current
                  search or filters.
                </p>

              </div>

            ) : (

              <div className="payment-table-wrapper">

                <table className="payment-table">

                  <thead>

                    <tr>

                      <th>User</th>

                      <th>Subscription</th>

                      <th>Amount</th>

                      <th>Payment Method</th>

                      <th>Transaction ID</th>

                      <th>Payment Date</th>

                      <th>Status</th>

                      <th>Action</th>

                    </tr>

                  </thead>


                  <tbody>

                    {filteredPayments.map(
                      (payment) => (

                        <tr key={payment.id}>

                          {/* USER */}

                          <td>

                            <div className="user-name">
                              {payment.user}
                            </div>

                            <div className="user-email">
                              {payment.email}
                            </div>

                          </td>


                          {/* SUBSCRIPTION */}

                          <td>

                            <span
                              className={`payment-badge ${
                                payment.plan ===
                                "Monthly"
                                  ? "monthly-badge"
                                  : "yearly-badge"
                              }`}
                            >
                              {payment.plan}
                            </span>

                          </td>


                          {/* AMOUNT */}

                          <td>
                            <strong>
                              {payment.amount}
                            </strong>
                          </td>


                          {/* PAYMENT METHOD */}

                          <td>
                            {payment.method}
                          </td>


                          {/* TRANSACTION ID */}

                          <td>

                            <span className="transaction-id">
                              {payment.transactionId}
                            </span>

                          </td>


                          {/* DATE */}

                          <td>
                            {payment.date}
                          </td>


                          {/* STATUS */}

                          <td>

                            <span
                              className={`payment-badge ${
                                payment.status ===
                                "Pending"
                                  ? "pending-badge"
                                  : payment.status ===
                                    "Verified"
                                  ? "verified-badge"
                                  : "rejected-badge"
                              }`}
                            >
                              {payment.status}
                            </span>

                          </td>


                          {/* ACTION */}

                          <td>

                            {payment.status ===
                              "Pending" ? (

                              <>
                                <button
                                  className="payment-action-button verify-button"
                                  onClick={() =>
                                    verifyPayment(
                                      payment.id
                                    )
                                  }
                                >
                                  ✓ Verify
                                </button>

                                <button
                                  className="payment-action-button reject-button"
                                  onClick={() =>
                                    rejectPayment(
                                      payment.id
                                    )
                                  }
                                >
                                  ✕ Reject
                                </button>
                              </>

                            ) : payment.status ===
                              "Verified" ? (

                              <span className="already-verified">
                                ✓ Verified
                              </span>

                            ) : (

                              <span className="already-rejected">
                                ✕ Rejected
                              </span>

                            )}

                          </td>

                        </tr>

                      )
                    )}

                  </tbody>

                </table>

              </div>

            )}

          </div>

        </div>

      </div>
    </>
  );
}

export default Payment;