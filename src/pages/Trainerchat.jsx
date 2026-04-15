import React, { useState } from "react";

export default function TrainerChat() {
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm your trainer. How can I help you today?",
      sender: "trainer",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };

    // Demo trainer reply
    const trainerReply = {
      text: "Great! Keep going 💪 I recommend doing 10 push-ups daily.",
      sender: "trainer",
    };

    setMessages([...messages, userMessage, trainerReply]);
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
      {/* Header */}
      <div
        style={{
          marginBottom: "15px",
          padding: "15px",
          borderRadius: "10px",
          background: "rgba(20,25,30,0.9)",
          boxShadow: "0 0 15px rgba(0,255,150,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3 style={{ margin: 0, color: "#00ffcc" }}>
            Trainer John
          </h3>
          <span style={{ fontSize: "12px", color: "#00ff99" }}>
            ● Online
          </span>
        </div>
      </div>

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
                msg.sender === "user"
                  ? "flex-end"
                  : "flex-start",
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
          placeholder="Message your trainer..."
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