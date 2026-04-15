import React from "react";

const exercises = [
  {
    id: 1,
    name: "Push Ups",
    level: "Beginner",
    duration: "10 mins",
    calories: "50 kcal",
  },
  {
    id: 2,
    name: "HIIT Workout",
    level: "Advanced",
    duration: "20 mins",
    calories: "200 kcal",
  },
  {
    id: 3,
    name: "Yoga Stretching",
    level: "Intermediate",
    duration: "15 mins",
    calories: "80 kcal",
  },
];

export default function ExerciseRecommendations() {
  return (
    <div
      style={{
        padding: "20px",
        background: "#0f2027",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        Exercise Recommendations
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            style={{
              background: "rgba(20,25,30,0.9)",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 0 20px rgba(0,255,150,0.15)",
              backdropFilter: "blur(10px)",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <h3 style={{ marginBottom: "10px", color: "#00ffcc" }}>
              {exercise.name}
            </h3>

            <p style={{ marginBottom: "8px" }}>
              ⏱ Duration: {exercise.duration}
            </p>

            <p style={{ marginBottom: "8px" }}>
              🔥 Calories: {exercise.calories}
            </p>

            <p style={{ marginBottom: "12px" }}>
              💪 Level:{" "}
              <span
                style={{
                  padding: "4px 8px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  background:
                    exercise.level === "Beginner"
                      ? "#00ccff"
                      : exercise.level === "Intermediate"
                      ? "#ffaa00"
                      : "#ff4d4d",
                  color: "#000",
                }}
              >
                {exercise.level}
              </span>
            </p>

            <button
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderRadius: "8px",
                background: "#00ff99",
                color: "#000",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Start Workout
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}