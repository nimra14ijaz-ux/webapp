import React, { useState } from "react";

export default function AIFitnessAssistant() {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your AI Fitness Assistant 💪", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };

    // Simple AI reply (demo)
    let botReply = "Stay consistent and keep working out! 💪";

    if (input.toLowerCase().includes("diet")) {
      botReply = "Eat high protein foods like eggs, chicken, and nuts 🥗";
    } else if (input.toLowerCase().includes("exercise")) {
      botReply = "Try push-ups, squats, and cardio workouts 🏃‍♂️";
    } else if (input.toLowerCase().includes("weight")) {
      botReply = "Maintain calorie deficit and regular exercise ⚖️";
    }

    const botMessage = { text: botReply, sender: "bot" };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div
      style={{
        padding: "20px",
        background: "#0f2027",
        minHeight: "100vh",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        AI Fitness Assistant
      </h2>

      {/* Chat Box */}
      <div
        style={{
          flex: 1,
          background: "rgba(20,25,30,0.9)",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 0 20px rgba(0,255,150,0.15)",
          backdropFilter: "blur(10px)",
          overflowY: "auto",
          marginBottom: "15px",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent:
                msg.sender === "user" ? "flex-end" : "flex-start",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                padding: "10px 15px",
                borderRadius: "10px",
                maxWidth: "60%",
                background:
                  msg.sender === "user"
                    ? "#00ff99"
                    : "#1e2a30",
                color:
                  msg.sender === "user" ? "#000" : "#fff",
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Ask about workout, diet..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            background: "#1e2a30",
            color: "#fff",
          }}
        />

        <button
          onClick={handleSend}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#00ccff",
            color: "#000",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}