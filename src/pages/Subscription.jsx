import React from "react";

const plans = [
  {
    name: "Basic",
    price: "$10/month",
    features: ["Access to basic workouts", "Limited support"],
    color: "#00ccff",
  },
  {
    name: "Standard",
    price: "$20/month",
    features: [
      "All Basic features",
      "Diet plans",
      "Progress tracking",
    ],
    color: "#ffaa00",
  },
  {
    name: "Premium",
    price: "$30/month",
    features: [
      "All Standard features",
      "Personal trainer",
      "AI recommendations",
    ],
    color: "#00ff99",
    highlight: true,
  },
];

export default function Subscription() {
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
        Subscription Plans
      </h2>

      {/* Cards Container */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {plans.map((plan, index) => (
          <div
            key={index}
            style={{
              background: "rgba(20,25,30,0.9)",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: plan.highlight
                ? "0 0 25px rgba(0,255,150,0.4)"
                : "0 0 20px rgba(0,255,150,0.15)",
              backdropFilter: "blur(10px)",
              textAlign: "center",
              transform: plan.highlight ? "scale(1.05)" : "scale(1)",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform =
                plan.highlight ? "scale(1.05)" : "scale(1)")
            }
          >
            {/* Plan Name */}
            <h3
              style={{
                color: plan.color,
                marginBottom: "10px",
              }}
            >
              {plan.name}
            </h3>

            {/* Price */}
            <h2 style={{ marginBottom: "15px" }}>
              {plan.price}
            </h2>

            {/* Features */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                marginBottom: "20px",
              }}
            >
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: "8px",
                  }}
                >
                  ✔ {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "none",
                background: plan.color,
                color: "#000",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}