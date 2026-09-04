import React, { useState } from "react";

function PostureDetection() {
  // =========================================================
  // DEMO POSTURE ANALYSIS DATA
  // =========================================================

  const [analyses, setAnalyses] = useState([
    {
      id: 1,
      user: "Ahmed Khan",
      exercise: "Squats",
      score: 92,
      result: "Good Posture",
      status: "Completed",
      date: "2026-08-28",
      feedback:
        "Good squat form. Keep your back straight and maintain proper knee alignment.",
    },
    {
      id: 2,
      user: "Bilal Malik",
      exercise: "Push Ups",
      score: 84,
      result: "Good Posture",
      status: "Completed",
      date: "2026-08-27",
      feedback:
        "Overall posture is good. Keep your body straight and avoid dropping your hips.",
    },
    {
      id: 3,
      user: "Hamza Tariq",
      exercise: "Lunges",
      score: 68,
      result: "Needs Improvement",
      status: "Completed",
      date: "2026-08-26",
      feedback:
        "Keep your front knee aligned with your foot and maintain an upright upper body.",
    },
    {
      id: 4,
      user: "Kiran Naeem",
      exercise: "Plank",
      score: 95,
      result: "Excellent Posture",
      status: "Completed",
      date: "2026-08-25",
      feedback:
        "Excellent plank position. Your back and hips are properly aligned.",
    },
    {
      id: 5,
      user: "Sara Ahmed",
      exercise: "Bicep Curl",
      score: 73,
      result: "Needs Improvement",
      status: "Completed",
      date: "2026-08-24",
      feedback:
        "Avoid swinging your upper body. Keep your elbows close to your body.",
    },
    {
      id: 6,
      user: "Usman Raza",
      exercise: "Shoulder Press",
      score: 88,
      result: "Good Posture",
      status: "Completed",
      date: "2026-08-23",
      feedback:
        "Good posture. Keep your core engaged and avoid excessive back arching.",
    },
  ]);

  // =========================================================
  // STATES
  // =========================================================

  const [search, setSearch] = useState("");
  const [exerciseFilter, setExerciseFilter] = useState("All");
  const [resultFilter, setResultFilter] = useState("All");
  const [selectedAnalysis, setSelectedAnalysis] = useState(null);

  // =========================================================
  // FILTER DATA
  // =========================================================

  const filteredAnalyses = analyses.filter((analysis) => {
    const searchMatch =
      analysis.user.toLowerCase().includes(search.toLowerCase()) ||
      analysis.exercise.toLowerCase().includes(search.toLowerCase());

    const exerciseMatch =
      exerciseFilter === "All" ||
      analysis.exercise === exerciseFilter;

    const resultMatch =
      resultFilter === "All" ||
      analysis.result === resultFilter;

    return searchMatch && exerciseMatch && resultMatch;
  });

  // =========================================================
  // STATISTICS
  // =========================================================

  const totalAnalyses = analyses.length;

  const excellentCount = analyses.filter(
    (item) => item.result === "Excellent Posture"
  ).length;

  const goodCount = analyses.filter(
    (item) => item.result === "Good Posture"
  ).length;

  const improvementCount = analyses.filter(
    (item) => item.result === "Needs Improvement"
  ).length;

  const averageScore =
    analyses.length > 0
      ? Math.round(
          analyses.reduce(
            (total, item) => total + item.score,
            0
          ) / analyses.length
        )
      : 0;

  // =========================================================
  // DELETE ANALYSIS
  // =========================================================

  const deleteAnalysis = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this posture analysis?"
    );

    if (confirmDelete) {
      setAnalyses(
        analyses.filter((analysis) => analysis.id !== id)
      );

      if (selectedAnalysis?.id === id) {
        setSelectedAnalysis(null);
      }
    }
  };

  // =========================================================
  // SCORE CLASS
  // =========================================================

  const getScoreClass = (score) => {
    if (score >= 90) return "score-excellent";
    if (score >= 75) return "score-good";
    return "score-warning";
  };

  // =========================================================
  // RESULT CLASS
  // =========================================================

  const getResultClass = (result) => {
    if (result === "Excellent Posture") {
      return "result-excellent";
    }

    if (result === "Good Posture") {
      return "result-good";
    }

    return "result-warning";
  };

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        .posture-page {
          min-height: 100vh;
          background: #f5f7fb;
          padding: 28px;
          font-family: Arial, Helvetica, sans-serif;
          color: #1f2937;
        }

        .posture-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
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

        .header-info {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          padding: 10px 15px;
          border-radius: 9px;
          font-size: 12px;
          color: #047857;
          font-weight: 600;
        }

        /* =====================================================
           STATISTICS
        ===================================================== */

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
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
        }

        .stat-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .stat-icon {
          width: 44px;
          height: 44px;
          border-radius: 11px;
          background: #ecfdf5;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 21px;
        }

        .stat-card h2 {
          margin: 16px 0 4px;
          font-size: 28px;
          color: #111827;
        }

        .stat-card p {
          margin: 0;
          font-size: 13px;
          color: #6b7280;
        }

        /* =====================================================
           MAIN CARD
        ===================================================== */

        .main-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
        }

        .card-header {
          padding: 20px;
          border-bottom: 1px solid #e5e7eb;
        }

        .card-header h2 {
          margin: 0;
          font-size: 19px;
          color: #111827;
        }

        .card-header p {
          margin: 6px 0 0;
          font-size: 13px;
          color: #6b7280;
        }

        /* =====================================================
           FILTERS
        ===================================================== */

        .filters {
          display: flex;
          gap: 12px;
          padding: 18px 20px;
          background: #fafafa;
          border-bottom: 1px solid #e5e7eb;
        }

        .search-box {
          flex: 1;
          height: 42px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          padding: 0 13px;
          font-size: 13px;
          outline: none;
        }

        .search-box:focus {
          border-color: #14b8a6;
        }

        .filter-select {
          width: 190px;
          height: 42px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          padding: 0 12px;
          background: #ffffff;
          outline: none;
          font-size: 13px;
        }

        /* =====================================================
           TABLE
        ===================================================== */

        .table-wrapper {
          width: 100%;
          overflow-x: auto;
        }

        .analysis-table {
          width: 100%;
          min-width: 1050px;
          border-collapse: collapse;
        }

        .analysis-table th {
          padding: 14px 18px;
          text-align: left;
          background: #f9fafb;
          border-bottom: 1px solid #e5e7eb;
          font-size: 12px;
          color: #4b5563;
        }

        .analysis-table td {
          padding: 15px 18px;
          border-bottom: 1px solid #eef0f2;
          font-size: 13px;
          color: #374151;
        }

        .analysis-table tr:hover {
          background: #fafafa;
        }

        /* =====================================================
           USER
        ===================================================== */

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
          justify-content: center;
          align-items: center;
          font-weight: 700;
        }

        .user-name {
          font-weight: 600;
          color: #111827;
        }

        /* =====================================================
           SCORE
        ===================================================== */

        .score {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 52px;
          padding: 6px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
        }

        .score-excellent {
          background: #dcfce7;
          color: #166534;
        }

        .score-good {
          background: #dbeafe;
          color: #1d4ed8;
        }

        .score-warning {
          background: #fef3c7;
          color: #92400e;
        }

        /* =====================================================
           RESULT
        ===================================================== */

        .result {
          display: inline-block;
          padding: 6px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
        }

        .result-excellent {
          background: #dcfce7;
          color: #166534;
        }

        .result-good {
          background: #dbeafe;
          color: #1d4ed8;
        }

        .result-warning {
          background: #fef3c7;
          color: #92400e;
        }

        /* =====================================================
           STATUS
        ===================================================== */

        .status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #ecfdf5;
          color: #047857;
          padding: 6px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
        }

        /* =====================================================
           ACTIONS
        ===================================================== */

        .actions {
          display: flex;
          gap: 7px;
        }

        .action-btn {
          border: none;
          padding: 8px 11px;
          border-radius: 7px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
        }

        .view-btn {
          background: #e0f2fe;
          color: #0369a1;
        }

        .delete-btn {
          background: #fee2e2;
          color: #b91c1c;
        }

        .action-btn:hover {
          opacity: 0.8;
        }

        /* =====================================================
           EMPTY
        ===================================================== */

        .empty {
          text-align: center;
          padding: 50px;
          color: #6b7280;
        }

        /* =====================================================
           MODAL
        ===================================================== */

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          z-index: 9999;
        }

        .modal {
          width: 100%;
          max-width: 760px;
          max-height: 90vh;
          overflow-y: auto;
          background: #ffffff;
          border-radius: 15px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
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
          font-size: 20px;
          cursor: pointer;
        }

        .modal-body {
          padding: 22px;
        }

        /* =====================================================
           ANALYSIS PROFILE
        ===================================================== */

        .analysis-profile {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 25px;
        }

        .large-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #ccfbf1;
          color: #0f766e;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 22px;
          font-weight: 700;
        }

        .analysis-profile h3 {
          margin: 0 0 5px;
          color: #111827;
        }

        .analysis-profile p {
          margin: 0;
          color: #6b7280;
          font-size: 13px;
        }

        /* =====================================================
           DETAILS
        ===================================================== */

        .details-section {
          margin-bottom: 24px;
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
          border-radius: 8px;
          padding: 13px;
        }

        .detail-box span {
          display: block;
          margin-bottom: 5px;
          color: #9ca3af;
          font-size: 10px;
        }

        .detail-box strong {
          font-size: 13px;
          color: #374151;
        }

        .feedback-box {
          background: #ecfdf5;
          border-left: 4px solid #14b8a6;
          padding: 15px;
          border-radius: 7px;
          font-size: 13px;
          line-height: 1.6;
          color: #374151;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1000px) {

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .details-grid {
            grid-template-columns: repeat(2, 1fr);
          }

        }

        @media (max-width: 650px) {

          .posture-page {
            padding: 15px;
          }

          .page-header {
            flex-direction: column;
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

      <div className="posture-page">

        <div className="posture-container">

          {/* =================================================
              PAGE HEADER
          ================================================= */}

          <div className="page-header">

            <div>
              <h1>Posture Detection</h1>

              <p>
                Monitor and review AI-based exercise posture
                analyses of Elite-Fit users
              </p>
            </div>

            <div className="header-info">
              AI Posture Monitoring
            </div>

          </div>


          {/* =================================================
              STATISTICS
          ================================================= */}

          <div className="stats-grid">

            <div className="stat-card">

              <div className="stat-top">

                <div className="stat-icon">
                  📹
                </div>

              </div>

              <h2>
                {totalAnalyses}
              </h2>

              <p>
                Total Analyses
              </p>

            </div>


            <div className="stat-card">

              <div className="stat-top">

                <div className="stat-icon">
                  ⭐
                </div>

              </div>

              <h2>
                {averageScore}%
              </h2>

              <p>
                Average Posture Score
              </p>

            </div>


            <div className="stat-card">

              <div className="stat-top">

                <div className="stat-icon">
                  ✅
                </div>

              </div>

              <h2>
                {excellentCount + goodCount}
              </h2>

              <p>
                Good / Excellent Results
              </p>

            </div>


            <div className="stat-card">

              <div className="stat-top">

                <div className="stat-icon">
                  ⚠️
                </div>

              </div>

              <h2>
                {improvementCount}
              </h2>

              <p>
                Need Improvement
              </p>

            </div>

          </div>


          {/* =================================================
              ANALYSIS TABLE
          ================================================= */}

          <div className="main-card">

            <div className="card-header">

              <h2>
                Posture Analysis Records
              </h2>

              <p>
                Review exercise posture scores and AI feedback
              </p>

            </div>


            {/* FILTERS */}

            <div className="filters">

              <input
                className="search-box"
                type="text"
                placeholder="Search user or exercise..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />


              <select
                className="filter-select"
                value={exerciseFilter}
                onChange={(e) =>
                  setExerciseFilter(e.target.value)
                }
              >

                <option value="All">
                  All Exercises
                </option>

                <option value="Squats">
                  Squats
                </option>

                <option value="Push Ups">
                  Push Ups
                </option>

                <option value="Lunges">
                  Lunges
                </option>

                <option value="Plank">
                  Plank
                </option>

                <option value="Bicep Curl">
                  Bicep Curl
                </option>

                <option value="Shoulder Press">
                  Shoulder Press
                </option>

              </select>


              <select
                className="filter-select"
                value={resultFilter}
                onChange={(e) =>
                  setResultFilter(e.target.value)
                }
              >

                <option value="All">
                  All Results
                </option>

                <option value="Excellent Posture">
                  Excellent
                </option>

                <option value="Good Posture">
                  Good
                </option>

                <option value="Needs Improvement">
                  Needs Improvement
                </option>

              </select>

            </div>


            {/* TABLE */}

            <div className="table-wrapper">

              {filteredAnalyses.length === 0 ? (

                <div className="empty">

                  <h3>
                    No Analysis Found
                  </h3>

                  <p>
                    Try another search or filter.
                  </p>

                </div>

              ) : (

                <table className="analysis-table">

                  <thead>

                    <tr>

                      <th>
                        User
                      </th>

                      <th>
                        Exercise
                      </th>

                      <th>
                        Posture Score
                      </th>

                      <th>
                        Result
                      </th>

                      <th>
                        Date
                      </th>

                      <th>
                        Status
                      </th>

                      <th>
                        Actions
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                    {filteredAnalyses.map(
                      (analysis) => (

                        <tr key={analysis.id}>

                          <td>

                            <div className="user-info">

                              <div className="avatar">

                                {analysis.user
                                  .charAt(0)
                                  .toUpperCase()}

                              </div>

                              <span className="user-name">
                                {analysis.user}
                              </span>

                            </div>

                          </td>


                          <td>
                            {analysis.exercise}
                          </td>


                          <td>

                            <span
                              className={`score ${getScoreClass(
                                analysis.score
                              )}`}
                            >
                              {analysis.score}%
                            </span>

                          </td>


                          <td>

                            <span
                              className={`result ${getResultClass(
                                analysis.result
                              )}`}
                            >
                              {analysis.result}
                            </span>

                          </td>


                          <td>
                            {analysis.date}
                          </td>


                          <td>

                            <span className="status">

                              <span className="status-dot"></span>

                              {analysis.status}

                            </span>

                          </td>


                          <td>

                            <div className="actions">

                              <button
                                className="action-btn view-btn"
                                onClick={() =>
                                  setSelectedAnalysis(
                                    analysis
                                  )
                                }
                              >
                                View
                              </button>


                              <button
                                className="action-btn delete-btn"
                                onClick={() =>
                                  deleteAnalysis(
                                    analysis.id
                                  )
                                }
                              >
                                Delete
                              </button>

                            </div>

                          </td>

                        </tr>

                      )
                    )}

                  </tbody>

                </table>

              )}

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          ANALYSIS DETAILS MODAL
      ===================================================== */}

      {selectedAnalysis && (

        <div
          className="modal-overlay"
          onClick={() =>
            setSelectedAnalysis(null)
          }
        >

          <div
            className="modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="modal-header">

              <h2>
                Posture Analysis Details
              </h2>

              <button
                className="close-btn"
                onClick={() =>
                  setSelectedAnalysis(null)
                }
              >
                ×
              </button>

            </div>


            <div className="modal-body">

              {/* USER */}

              <div className="analysis-profile">

                <div className="large-avatar">

                  {selectedAnalysis.user
                    .charAt(0)
                    .toUpperCase()}

                </div>

                <div>

                  <h3>
                    {selectedAnalysis.user}
                  </h3>

                  <p>
                    {selectedAnalysis.exercise} Analysis
                  </p>

                </div>

              </div>


              {/* ANALYSIS INFORMATION */}

              <div className="details-section">

                <h3>
                  Analysis Information
                </h3>

                <div className="details-grid">

                  <div className="detail-box">

                    <span>
                      Exercise
                    </span>

                    <strong>
                      {selectedAnalysis.exercise}
                    </strong>

                  </div>


                  <div className="detail-box">

                    <span>
                      Posture Score
                    </span>

                    <strong>
                      {selectedAnalysis.score}%
                    </strong>

                  </div>


                  <div className="detail-box">

                    <span>
                      Result
                    </span>

                    <strong>
                      {selectedAnalysis.result}
                    </strong>

                  </div>


                  <div className="detail-box">

                    <span>
                      Analysis Date
                    </span>

                    <strong>
                      {selectedAnalysis.date}
                    </strong>

                  </div>


                  <div className="detail-box">

                    <span>
                      Status
                    </span>

                    <strong>
                      {selectedAnalysis.status}
                    </strong>

                  </div>


                  <div className="detail-box">

                    <span>
                      Analysis ID
                    </span>

                    <strong>
                      #{selectedAnalysis.id}
                    </strong>

                  </div>

                </div>

              </div>


              {/* AI FEEDBACK */}

              <div className="details-section">

                <h3>
                  AI Posture Feedback
                </h3>

                <div className="feedback-box">

                  {selectedAnalysis.feedback}

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default PostureDetection;