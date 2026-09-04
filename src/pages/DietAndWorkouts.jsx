import React, { useState } from "react";

function DietAndWorkouts() {
  // =========================================================
  // DEMO WORKOUT DATA
  // =========================================================

  const [workouts, setWorkouts] = useState([
    {
      id: 1,
      name: "Full Body Beginner",
      category: "Full Body",
      difficulty: "Beginner",
      duration: "30 min",
      calories: 220,
      exercises: 6,
      users: 18,
      status: "Active",
    },
    {
      id: 2,
      name: "Weight Loss Cardio",
      category: "Cardio",
      difficulty: "Intermediate",
      duration: "40 min",
      calories: 350,
      exercises: 7,
      users: 24,
      status: "Active",
    },
    {
      id: 3,
      name: "Muscle Building",
      category: "Strength",
      difficulty: "Advanced",
      duration: "50 min",
      calories: 420,
      exercises: 8,
      users: 15,
      status: "Active",
    },
    {
      id: 4,
      name: "Upper Body Strength",
      category: "Strength",
      difficulty: "Intermediate",
      duration: "35 min",
      calories: 280,
      exercises: 6,
      users: 12,
      status: "Active",
    },
    {
      id: 5,
      name: "Morning Fitness",
      category: "Full Body",
      difficulty: "Beginner",
      duration: "25 min",
      calories: 180,
      exercises: 5,
      users: 20,
      status: "Active",
    },
  ]);

  // =========================================================
  // DEMO DIET DATA
  // =========================================================

  const [diets, setDiets] = useState([
    {
      id: 1,
      name: "Weight Loss Plan",
      goal: "Weight Loss",
      calories: 1800,
      meals: 5,
      users: 21,
      status: "Active",
    },
    {
      id: 2,
      name: "Muscle Gain Plan",
      goal: "Weight Gain",
      calories: 2500,
      meals: 6,
      users: 16,
      status: "Active",
    },
    {
      id: 3,
      name: "Healthy Fitness Plan",
      goal: "Be Fit",
      calories: 2100,
      meals: 5,
      users: 27,
      status: "Active",
    },
    {
      id: 4,
      name: "Low Calorie Plan",
      goal: "Weight Loss",
      calories: 1600,
      meals: 5,
      users: 11,
      status: "Active",
    },
  ]);

  // =========================================================
  // STATES
  // =========================================================

  const [activeTab, setActiveTab] = useState("workouts");

  const [search, setSearch] = useState("");

  const [workoutCategory, setWorkoutCategory] =
    useState("All");

  const [workoutDifficulty, setWorkoutDifficulty] =
    useState("All");

  const [dietGoal, setDietGoal] = useState("All");

  const [selectedWorkout, setSelectedWorkout] =
    useState(null);

  const [selectedDiet, setSelectedDiet] =
    useState(null);

  // =========================================================
  // WORKOUT FILTER
  // =========================================================

  const filteredWorkouts = workouts.filter((workout) => {
    const searchMatch =
      workout.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      workout.category
        .toLowerCase()
        .includes(search.toLowerCase());

    const categoryMatch =
      workoutCategory === "All" ||
      workout.category === workoutCategory;

    const difficultyMatch =
      workoutDifficulty === "All" ||
      workout.difficulty === workoutDifficulty;

    return (
      searchMatch &&
      categoryMatch &&
      difficultyMatch
    );
  });

  // =========================================================
  // DIET FILTER
  // =========================================================

  const filteredDiets = diets.filter((diet) => {
    const searchMatch =
      diet.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      diet.goal
        .toLowerCase()
        .includes(search.toLowerCase());

    const goalMatch =
      dietGoal === "All" ||
      diet.goal === dietGoal;

    return searchMatch && goalMatch;
  });

  // =========================================================
  // STATISTICS
  // =========================================================

  const totalWorkouts = workouts.length;

  const totalDiets = diets.length;

  const activeWorkouts = workouts.filter(
    (item) => item.status === "Active"
  ).length;

  const activeDiets = diets.filter(
    (item) => item.status === "Active"
  ).length;

  const totalWorkoutUsers = workouts.reduce(
    (total, item) => total + item.users,
    0
  );

  const totalDietUsers = diets.reduce(
    (total, item) => total + item.users,
    0
  );

  // =========================================================
  // DELETE WORKOUT
  // =========================================================

  const deleteWorkout = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this workout plan?"
    );

    if (confirmDelete) {
      setWorkouts(
        workouts.filter((item) => item.id !== id)
      );

      setSelectedWorkout(null);
    }
  };

  // =========================================================
  // DELETE DIET
  // =========================================================

  const deleteDiet = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this diet plan?"
    );

    if (confirmDelete) {
      setDiets(
        diets.filter((item) => item.id !== id)
      );

      setSelectedDiet(null);
    }
  };

  // =========================================================
  // TOGGLE WORKOUT STATUS
  // =========================================================

  const toggleWorkoutStatus = (id) => {
    setWorkouts(
      workouts.map((item) =>
        item.id === id
          ? {
              ...item,
              status:
                item.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : item
      )
    );
  };

  // =========================================================
  // TOGGLE DIET STATUS
  // =========================================================

  const toggleDietStatus = (id) => {
    setDiets(
      diets.map((item) =>
        item.id === id
          ? {
              ...item,
              status:
                item.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : item
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

    .diet-workout-page {
      min-height: 100vh;
      background: #f5f7fb;
      padding: 28px;
      font-family: Arial, Helvetica, sans-serif;
      color: #1f2937;
    }

    .dw-container {
      max-width: 1450px;
      margin: 0 auto;
    }

    /* =====================================================
       HEADER
    ===================================================== */

    .dw-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 20px;
      margin-bottom: 25px;
    }

    .dw-header h1 {
      margin: 0;
      font-size: 30px;
      color: #111827;
    }

    .dw-header p {
      margin: 7px 0 0;
      color: #6b7280;
      font-size: 14px;
    }

    .ai-badge {
      background: #ecfdf5;
      color: #047857;
      border: 1px solid #a7f3d0;
      padding: 10px 15px;
      border-radius: 9px;
      font-size: 12px;
      font-weight: 700;
    }

    /* =====================================================
       STATISTICS
    ===================================================== */

    .dw-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      margin-bottom: 25px;
    }

    .dw-stat {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      padding: 20px;
      box-shadow: 0 3px 12px rgba(0,0,0,0.05);
    }

    .dw-stat-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .dw-stat-icon {
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 11px;
      background: #ecfdf5;
      font-size: 21px;
    }

    .dw-stat h2 {
      margin: 15px 0 4px;
      font-size: 28px;
      color: #111827;
    }

    .dw-stat p {
      margin: 0;
      color: #6b7280;
      font-size: 13px;
    }

    /* =====================================================
       MAIN CARD
    ===================================================== */

    .dw-card {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 3px 12px rgba(0,0,0,0.05);
    }

    /* =====================================================
       TABS
    ===================================================== */

    .tabs {
      display: flex;
      border-bottom: 1px solid #e5e7eb;
      padding: 0 20px;
    }

    .tab-button {
      border: none;
      background: transparent;
      padding: 17px 25px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      color: #6b7280;
      border-bottom: 3px solid transparent;
    }

    .tab-button.active {
      color: #0f766e;
      border-bottom-color: #14b8a6;
    }

    /* =====================================================
       CARD HEADER
    ===================================================== */

    .dw-card-header {
      padding: 20px;
    }

    .dw-card-header h2 {
      margin: 0;
      font-size: 19px;
      color: #111827;
    }

    .dw-card-header p {
      margin: 6px 0 0;
      color: #6b7280;
      font-size: 13px;
    }

    /* =====================================================
       FILTERS
    ===================================================== */

    .dw-filters {
      display: flex;
      gap: 12px;
      padding: 18px 20px;
      background: #fafafa;
      border-top: 1px solid #e5e7eb;
      border-bottom: 1px solid #e5e7eb;
    }

    .dw-search {
      flex: 1;
      height: 42px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      padding: 0 13px;
      outline: none;
      font-size: 13px;
    }

    .dw-search:focus {
      border-color: #14b8a6;
    }

    .dw-select {
      width: 190px;
      height: 42px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      padding: 0 12px;
      background: white;
      outline: none;
      font-size: 13px;
    }

    /* =====================================================
       TABLE
    ===================================================== */

    .table-scroll {
      width: 100%;
      overflow-x: auto;
    }

    .dw-table {
      width: 100%;
      min-width: 1050px;
      border-collapse: collapse;
    }

    .dw-table th {
      text-align: left;
      padding: 14px 18px;
      background: #f9fafb;
      border-bottom: 1px solid #e5e7eb;
      color: #4b5563;
      font-size: 12px;
    }

    .dw-table td {
      padding: 15px 18px;
      border-bottom: 1px solid #eef0f2;
      font-size: 13px;
      color: #374151;
    }

    .dw-table tr:hover {
      background: #fafafa;
    }

    /* =====================================================
       PLAN NAME
    ===================================================== */

    .plan-name {
      font-weight: 700;
      color: #111827;
    }

    .plan-subtitle {
      font-size: 11px;
      color: #9ca3af;
      margin-top: 4px;
    }

    /* =====================================================
       BADGES
    ===================================================== */

    .badge {
      display: inline-block;
      padding: 6px 10px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 600;
    }

    .beginner {
      background: #dcfce7;
      color: #166534;
    }

    .intermediate {
      background: #dbeafe;
      color: #1d4ed8;
    }

    .advanced {
      background: #fef3c7;
      color: #92400e;
    }

    .category {
      background: #f3f4f6;
      color: #374151;
    }

    .goal {
      background: #ede9fe;
      color: #6d28d9;
    }

    .active-badge {
      background: #dcfce7;
      color: #166534;
    }

    .inactive-badge {
      background: #fee2e2;
      color: #b91c1c;
    }

    /* =====================================================
       ACTIONS
    ===================================================== */

    .dw-actions {
      display: flex;
      gap: 7px;
      flex-wrap: wrap;
    }

    .dw-btn {
      border: none;
      border-radius: 7px;
      padding: 8px 10px;
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
    }

    .view-btn {
      background: #e0f2fe;
      color: #0369a1;
    }

    .status-btn {
      background: #f3f4f6;
      color: #374151;
    }

    .delete-btn {
      background: #fee2e2;
      color: #b91c1c;
    }

    .dw-btn:hover {
      opacity: 0.8;
    }

    /* =====================================================
       EMPTY
    ===================================================== */

    .empty-box {
      text-align: center;
      padding: 50px;
      color: #6b7280;
    }

    /* =====================================================
       MODAL
    ===================================================== */

    .dw-modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.55);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      z-index: 9999;
    }

    .dw-modal {
      width: 100%;
      max-width: 720px;
      max-height: 90vh;
      overflow-y: auto;
      background: white;
      border-radius: 15px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.25);
    }

    .dw-modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      border-bottom: 1px solid #e5e7eb;
    }

    .dw-modal-header h2 {
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
      font-size: 20px;
    }

    .dw-modal-body {
      padding: 22px;
    }

    .modal-title-area {
      margin-bottom: 22px;
    }

    .modal-title-area h3 {
      margin: 0 0 5px;
      font-size: 21px;
      color: #111827;
    }

    .modal-title-area p {
      margin: 0;
      color: #6b7280;
      font-size: 13px;
    }

    .modal-details {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-bottom: 22px;
    }

    .modal-detail {
      background: #f9fafb;
      padding: 14px;
      border-radius: 8px;
    }

    .modal-detail span {
      display: block;
      color: #9ca3af;
      font-size: 10px;
      margin-bottom: 5px;
    }

    .modal-detail strong {
      color: #374151;
      font-size: 13px;
    }

    .modal-info {
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

      .dw-stats {
        grid-template-columns: repeat(2, 1fr);
      }

      .modal-details {
        grid-template-columns: repeat(2, 1fr);
      }

    }

    @media (max-width: 650px) {

      .diet-workout-page {
        padding: 15px;
      }

      .dw-header {
        flex-direction: column;
      }

      .dw-stats {
        grid-template-columns: 1fr;
      }

      .tabs {
        padding: 0 10px;
      }

      .tab-button {
        padding: 15px 12px;
      }

      .dw-filters {
        flex-direction: column;
      }

      .dw-select {
        width: 100%;
      }

      .modal-details {
        grid-template-columns: 1fr;
      }

    }

  `;

  return (
    <>
      <style>{styles}</style>

      <div className="diet-workout-page">

        <div className="dw-container">

          {/* =================================================
              PAGE HEADER
          ================================================= */}

          <div className="dw-header">

            <div>

              <h1>
                Diet & Workouts
              </h1>

              <p>
                Manage workout plans and diet plans
                for Elite-Fit users
              </p>

            </div>

            <div className="ai-badge">
              Personalized Fitness Management
            </div>

          </div>


          {/* =================================================
              STATISTICS
          ================================================= */}

          <div className="dw-stats">

            <div className="dw-stat">

              <div className="dw-stat-top">

                <div className="dw-stat-icon">
                  🏋️
                </div>

              </div>

              <h2>
                {totalWorkouts}
              </h2>

              <p>
                Total Workout Plans
              </p>

            </div>


            <div className="dw-stat">

              <div className="dw-stat-top">

                <div className="dw-stat-icon">
                  🥗
                </div>

              </div>

              <h2>
                {totalDiets}
              </h2>

              <p>
                Total Diet Plans
              </p>

            </div>


            <div className="dw-stat">

              <div className="dw-stat-top">

                <div className="dw-stat-icon">
                  👥
                </div>

              </div>

              <h2>
                {totalWorkoutUsers}
              </h2>

              <p>
                Workout Plan Assignments
              </p>

            </div>


            <div className="dw-stat">

              <div className="dw-stat-top">

                <div className="dw-stat-icon">
                  🍎
                </div>

              </div>

              <h2>
                {totalDietUsers}
              </h2>

              <p>
                Diet Plan Assignments
              </p>

            </div>

          </div>


          {/* =================================================
              MAIN CARD
          ================================================= */}

          <div className="dw-card">

            {/* TABS */}

            <div className="tabs">

              <button
                className={`tab-button ${
                  activeTab === "workouts"
                    ? "active"
                    : ""
                }`}
                onClick={() => {
                  setActiveTab("workouts");
                  setSearch("");
                }}
              >
                🏋️ Workout Plans
              </button>


              <button
                className={`tab-button ${
                  activeTab === "diets"
                    ? "active"
                    : ""
                }`}
                onClick={() => {
                  setActiveTab("diets");
                  setSearch("");
                }}
              >
                🥗 Diet Plans
              </button>

            </div>


            {/* =================================================
                WORKOUT TAB
            ================================================= */}

            {activeTab === "workouts" && (

              <>

                <div className="dw-card-header">

                  <h2>
                    Workout Plans
                  </h2>

                  <p>
                    Manage exercises, workout duration,
                    difficulty and calorie targets
                  </p>

                </div>


                <div className="dw-filters">

                  <input
                    className="dw-search"
                    type="text"
                    placeholder="Search workout plan..."
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                  />


                  <select
                    className="dw-select"
                    value={workoutCategory}
                    onChange={(e) =>
                      setWorkoutCategory(
                        e.target.value
                      )
                    }
                  >

                    <option value="All">
                      All Categories
                    </option>

                    <option value="Full Body">
                      Full Body
                    </option>

                    <option value="Cardio">
                      Cardio
                    </option>

                    <option value="Strength">
                      Strength
                    </option>

                  </select>


                  <select
                    className="dw-select"
                    value={workoutDifficulty}
                    onChange={(e) =>
                      setWorkoutDifficulty(
                        e.target.value
                      )
                    }
                  >

                    <option value="All">
                      All Difficulty
                    </option>

                    <option value="Beginner">
                      Beginner
                    </option>

                    <option value="Intermediate">
                      Intermediate
                    </option>

                    <option value="Advanced">
                      Advanced
                    </option>

                  </select>

                </div>


                <div className="table-scroll">

                  {filteredWorkouts.length === 0 ? (

                    <div className="empty-box">

                      <h3>
                        No Workout Plans Found
                      </h3>

                      <p>
                        Try another search or filter.
                      </p>

                    </div>

                  ) : (

                    <table className="dw-table">

                      <thead>

                        <tr>

                          <th>
                            Workout Plan
                          </th>

                          <th>
                            Category
                          </th>

                          <th>
                            Difficulty
                          </th>

                          <th>
                            Duration
                          </th>

                          <th>
                            Calories
                          </th>

                          <th>
                            Exercises
                          </th>

                          <th>
                            Users
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

                        {filteredWorkouts.map(
                          (workout) => (

                            <tr key={workout.id}>

                              <td>

                                <div className="plan-name">
                                  {workout.name}
                                </div>

                                <div className="plan-subtitle">
                                  Workout Plan #{workout.id}
                                </div>

                              </td>


                              <td>

                                <span className="badge category">
                                  {workout.category}
                                </span>

                              </td>


                              <td>

                                <span
                                  className={`badge ${
                                    workout.difficulty.toLowerCase()
                                  }`}
                                >
                                  {workout.difficulty}
                                </span>

                              </td>


                              <td>
                                {workout.duration}
                              </td>


                              <td>
                                {workout.calories} kcal
                              </td>


                              <td>
                                {workout.exercises}
                              </td>


                              <td>
                                {workout.users}
                              </td>


                              <td>

                                <span
                                  className={`badge ${
                                    workout.status ===
                                    "Active"
                                      ? "active-badge"
                                      : "inactive-badge"
                                  }`}
                                >
                                  {workout.status}
                                </span>

                              </td>


                              <td>

                                <div className="dw-actions">

                                  <button
                                    className="dw-btn view-btn"
                                    onClick={() =>
                                      setSelectedWorkout(
                                        workout
                                      )
                                    }
                                  >
                                    View
                                  </button>


                                  <button
                                    className="dw-btn status-btn"
                                    onClick={() =>
                                      toggleWorkoutStatus(
                                        workout.id
                                      )
                                    }
                                  >
                                    {workout.status ===
                                    "Active"
                                      ? "Disable"
                                      : "Activate"}
                                  </button>


                                  <button
                                    className="dw-btn delete-btn"
                                    onClick={() =>
                                      deleteWorkout(
                                        workout.id
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

              </>

            )}


            {/* =================================================
                DIET TAB
            ================================================= */}

            {activeTab === "diets" && (

              <>

                <div className="dw-card-header">

                  <h2>
                    Diet Plans
                  </h2>

                  <p>
                    Manage personalized diet plans,
                    calories and meals
                  </p>

                </div>


                <div className="dw-filters">

                  <input
                    className="dw-search"
                    type="text"
                    placeholder="Search diet plan..."
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                  />


                  <select
                    className="dw-select"
                    value={dietGoal}
                    onChange={(e) =>
                      setDietGoal(e.target.value)
                    }
                  >

                    <option value="All">
                      All Fitness Goals
                    </option>

                    <option value="Weight Loss">
                      Weight Loss
                    </option>

                    <option value="Weight Gain">
                      Weight Gain
                    </option>

                    <option value="Be Fit">
                      Be Fit
                    </option>

                  </select>

                </div>


                <div className="table-scroll">

                  {filteredDiets.length === 0 ? (

                    <div className="empty-box">

                      <h3>
                        No Diet Plans Found
                      </h3>

                      <p>
                        Try another search or filter.
                      </p>

                    </div>

                  ) : (

                    <table className="dw-table">

                      <thead>

                        <tr>

                          <th>
                            Diet Plan
                          </th>

                          <th>
                            Fitness Goal
                          </th>

                          <th>
                            Daily Calories
                          </th>

                          <th>
                            Meals
                          </th>

                          <th>
                            Users
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

                        {filteredDiets.map(
                          (diet) => (

                            <tr key={diet.id}>

                              <td>

                                <div className="plan-name">
                                  {diet.name}
                                </div>

                                <div className="plan-subtitle">
                                  Diet Plan #{diet.id}
                                </div>

                              </td>


                              <td>

                                <span className="badge goal">
                                  {diet.goal}
                                </span>

                              </td>


                              <td>
                                {diet.calories} kcal
                              </td>


                              <td>
                                {diet.meals}
                              </td>


                              <td>
                                {diet.users}
                              </td>


                              <td>

                                <span
                                  className={`badge ${
                                    diet.status ===
                                    "Active"
                                      ? "active-badge"
                                      : "inactive-badge"
                                  }`}
                                >
                                  {diet.status}
                                </span>

                              </td>


                              <td>

                                <div className="dw-actions">

                                  <button
                                    className="dw-btn view-btn"
                                    onClick={() =>
                                      setSelectedDiet(
                                        diet
                                      )
                                    }
                                  >
                                    View
                                  </button>


                                  <button
                                    className="dw-btn status-btn"
                                    onClick={() =>
                                      toggleDietStatus(
                                        diet.id
                                      )
                                    }
                                  >
                                    {diet.status ===
                                    "Active"
                                      ? "Disable"
                                      : "Activate"}
                                  </button>


                                  <button
                                    className="dw-btn delete-btn"
                                    onClick={() =>
                                      deleteDiet(
                                        diet.id
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

              </>

            )}

          </div>

        </div>

      </div>


      {/* =====================================================
          WORKOUT MODAL
      ===================================================== */}

      {selectedWorkout && (

        <div
          className="dw-modal-overlay"
          onClick={() =>
            setSelectedWorkout(null)
          }
        >

          <div
            className="dw-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="dw-modal-header">

              <h2>
                Workout Plan Details
              </h2>

              <button
                className="close-btn"
                onClick={() =>
                  setSelectedWorkout(null)
                }
              >
                ×
              </button>

            </div>


            <div className="dw-modal-body">

              <div className="modal-title-area">

                <h3>
                  {selectedWorkout.name}
                </h3>

                <p>
                  Personalized workout plan
                </p>

              </div>


              <div className="modal-details">

                <div className="modal-detail">

                  <span>
                    Category
                  </span>

                  <strong>
                    {selectedWorkout.category}
                  </strong>

                </div>


                <div className="modal-detail">

                  <span>
                    Difficulty
                  </span>

                  <strong>
                    {selectedWorkout.difficulty}
                  </strong>

                </div>


                <div className="modal-detail">

                  <span>
                    Duration
                  </span>

                  <strong>
                    {selectedWorkout.duration}
                  </strong>

                </div>


                <div className="modal-detail">

                  <span>
                    Calories Target
                  </span>

                  <strong>
                    {selectedWorkout.calories} kcal
                  </strong>

                </div>


                <div className="modal-detail">

                  <span>
                    Exercises
                  </span>

                  <strong>
                    {selectedWorkout.exercises}
                  </strong>

                </div>


                <div className="modal-detail">

                  <span>
                    Assigned Users
                  </span>

                  <strong>
                    {selectedWorkout.users}
                  </strong>

                </div>

              </div>


              <div className="modal-info">

                This workout plan can be assigned to
                users according to their fitness goal,
                health information and fitness level.
                In the final system, personalized plans
                will be generated according to user data.

              </div>

            </div>

          </div>

        </div>

      )}


      {/* =====================================================
          DIET MODAL
      ===================================================== */}

      {selectedDiet && (

        <div
          className="dw-modal-overlay"
          onClick={() =>
            setSelectedDiet(null)
          }
        >

          <div
            className="dw-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="dw-modal-header">

              <h2>
                Diet Plan Details
              </h2>

              <button
                className="close-btn"
                onClick={() =>
                  setSelectedDiet(null)
                }
              >
                ×
              </button>

            </div>


            <div className="dw-modal-body">

              <div className="modal-title-area">

                <h3>
                  {selectedDiet.name}
                </h3>

                <p>
                  Personalized diet plan
                </p>

              </div>


              <div className="modal-details">

                <div className="modal-detail">

                  <span>
                    Fitness Goal
                  </span>

                  <strong>
                    {selectedDiet.goal}
                  </strong>

                </div>


                <div className="modal-detail">

                  <span>
                    Daily Calories
                  </span>

                  <strong>
                    {selectedDiet.calories} kcal
                  </strong>

                </div>


                <div className="modal-detail">

                  <span>
                    Meals Per Day
                  </span>

                  <strong>
                    {selectedDiet.meals}
                  </strong>

                </div>


                <div className="modal-detail">

                  <span>
                    Assigned Users
                  </span>

                  <strong>
                    {selectedDiet.users}
                  </strong>

                </div>


                <div className="modal-detail">

                  <span>
                    Status
                  </span>

                  <strong>
                    {selectedDiet.status}
                  </strong>

                </div>

              </div>


              <div className="modal-info">

                This diet plan is designed according
                to the user's fitness goal and daily
                calorie requirements. In the final
                system, diet recommendations can be
                generated according to the user's
                profile and fitness information.

              </div>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default DietAndWorkouts;