import React, { useState } from "react";

function AiChatAssistant() {
  // =========================================================
  // DEMO CHAT DATA
  // =========================================================

  const [conversations, setConversations] = useState([
    {
      id: 1,
      user: "Ahmed Khan",
      email: "ahmed@example.com",
      topic: "Workout Recommendation",
      status: "Active",
      date: "2026-08-28",
      messages: [
        {
          sender: "user",
          text: "Can you suggest a workout for weight loss?",
        },
        {
          sender: "ai",
          text:
            "Sure! I recommend a combination of cardio and full-body exercises. You can start with 30 minutes of moderate exercise.",
        },
        {
          sender: "user",
          text: "How many days should I exercise?",
        },
        {
          sender: "ai",
          text:
            "For general fitness, you can follow your personalized workout plan consistently and allow proper recovery between sessions.",
        },
      ],
    },

    {
      id: 2,
      user: "Sara Ahmed",
      email: "sara@example.com",
      topic: "Diet Plan",
      status: "Active",
      date: "2026-08-27",
      messages: [
        {
          sender: "user",
          text: "What should I eat for my fitness goal?",
        },
        {
          sender: "ai",
          text:
            "Your diet should include balanced meals with appropriate calories, protein, carbohydrates, healthy fats, fruits and vegetables.",
        },
        {
          sender: "user",
          text: "Can I have a healthy snack?",
        },
        {
          sender: "ai",
          text:
            "Yes. Fruits, yogurt, nuts in suitable portions, or other balanced options can be included according to your diet plan.",
        },
      ],
    },

    {
      id: 3,
      user: "Bilal Malik",
      email: "bilal@example.com",
      topic: "Exercise Guidance",
      status: "Active",
      date: "2026-08-26",
      messages: [
        {
          sender: "user",
          text: "How can I improve my exercise posture?",
        },
        {
          sender: "ai",
          text:
            "Maintain proper body alignment, control your movement, and follow the posture feedback provided by the posture detection feature.",
        },
      ],
    },

    {
      id: 4,
      user: "Kiran Naeem",
      email: "kiran@example.com",
      topic: "Fitness Goal",
      status: "Closed",
      date: "2026-08-25",
      messages: [
        {
          sender: "user",
          text: "I want to become fit. What should I do?",
        },
        {
          sender: "ai",
          text:
            "Start with a consistent workout routine, balanced diet, proper hydration and adequate rest.",
        },
      ],
    },

    {
      id: 5,
      user: "Usman Raza",
      email: "usman@example.com",
      topic: "Workout Schedule",
      status: "Active",
      date: "2026-08-24",
      messages: [
        {
          sender: "user",
          text: "Can you help me understand my workout schedule?",
        },
        {
          sender: "ai",
          text:
            "Your workout schedule organizes exercises according to your fitness goal, workout duration and required training frequency.",
        },
      ],
    },

    {
      id: 6,
      user: "Hamza Tariq",
      email: "hamza@example.com",
      topic: "General Fitness",
      status: "Closed",
      date: "2026-08-23",
      messages: [
        {
          sender: "user",
          text: "How can I stay motivated?",
        },
        {
          sender: "ai",
          text:
            "Set realistic goals, follow your workout plan consistently, track your progress and celebrate small improvements.",
        },
      ],
    },
  ]);

  // =========================================================
  // STATES
  // =========================================================

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [topicFilter, setTopicFilter] =
    useState("All");

  const [selectedChat, setSelectedChat] =
    useState(null);

  // =========================================================
  // FILTER CONVERSATIONS
  // =========================================================

  const filteredConversations =
    conversations.filter((conversation) => {
      const searchMatch =
        conversation.user
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        conversation.email
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        conversation.topic
          .toLowerCase()
          .includes(search.toLowerCase());

      const statusMatch =
        statusFilter === "All" ||
        conversation.status === statusFilter;

      const topicMatch =
        topicFilter === "All" ||
        conversation.topic === topicFilter;

      return (
        searchMatch &&
        statusMatch &&
        topicMatch
      );
    });

  // =========================================================
  // STATISTICS
  // =========================================================

  const totalConversations =
    conversations.length;

  const activeConversations =
    conversations.filter(
      (item) => item.status === "Active"
    ).length;

  const closedConversations =
    conversations.filter(
      (item) => item.status === "Closed"
    ).length;

  const totalMessages =
    conversations.reduce(
      (total, conversation) =>
        total + conversation.messages.length,
      0
    );

  // =========================================================
  // DELETE CONVERSATION
  // =========================================================

  const deleteConversation = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this AI conversation?"
    );

    if (confirmDelete) {
      setConversations(
        conversations.filter(
          (conversation) =>
            conversation.id !== id
        )
      );

      setSelectedChat(null);
    }
  };

  // =========================================================
  // GET LAST MESSAGE
  // =========================================================

  const getLastMessage = (conversation) => {
    if (!conversation.messages.length) {
      return "No messages";
    }

    const last =
      conversation.messages[
        conversation.messages.length - 1
      ];

    return last.text;
  };

  // =========================================================
  // STYLES
  // =========================================================

  const styles = `

    * {
      box-sizing: border-box;
    }

    .ai-page {
      min-height: 100vh;
      background: #f5f7fb;
      padding: 28px;
      font-family: Arial, Helvetica, sans-serif;
      color: #1f2937;
    }

    .ai-container {
      max-width: 1450px;
      margin: 0 auto;
    }

    /* =====================================================
       HEADER
    ===================================================== */

    .ai-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 20px;
      margin-bottom: 25px;
    }

    .ai-header h1 {
      margin: 0;
      font-size: 30px;
      color: #111827;
    }

    .ai-header p {
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

    .ai-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      margin-bottom: 25px;
    }

    .ai-stat {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      padding: 20px;
      box-shadow: 0 3px 12px rgba(0,0,0,0.05);
    }

    .ai-stat-icon {
      width: 45px;
      height: 45px;
      border-radius: 11px;
      background: #ecfdf5;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 21px;
    }

    .ai-stat h2 {
      margin: 15px 0 4px;
      font-size: 28px;
      color: #111827;
    }

    .ai-stat p {
      margin: 0;
      color: #6b7280;
      font-size: 13px;
    }

    /* =====================================================
       MAIN CARD
    ===================================================== */

    .chat-card {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 3px 12px rgba(0,0,0,0.05);
    }

    .chat-card-header {
      padding: 20px;
      border-bottom: 1px solid #e5e7eb;
    }

    .chat-card-header h2 {
      margin: 0;
      font-size: 19px;
      color: #111827;
    }

    .chat-card-header p {
      margin: 6px 0 0;
      color: #6b7280;
      font-size: 13px;
    }

    /* =====================================================
       FILTERS
    ===================================================== */

    .chat-filters {
      display: flex;
      gap: 12px;
      padding: 18px 20px;
      background: #fafafa;
      border-bottom: 1px solid #e5e7eb;
    }

    .chat-search {
      flex: 1;
      height: 42px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      padding: 0 13px;
      outline: none;
      font-size: 13px;
    }

    .chat-search:focus {
      border-color: #14b8a6;
    }

    .chat-select {
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

    .table-scroll {
      width: 100%;
      overflow-x: auto;
    }

    .chat-table {
      width: 100%;
      min-width: 1050px;
      border-collapse: collapse;
    }

    .chat-table th {
      text-align: left;
      padding: 14px 18px;
      background: #f9fafb;
      border-bottom: 1px solid #e5e7eb;
      color: #4b5563;
      font-size: 12px;
    }

    .chat-table td {
      padding: 15px 18px;
      border-bottom: 1px solid #eef0f2;
      font-size: 13px;
      color: #374151;
    }

    .chat-table tr:hover {
      background: #fafafa;
    }

    /* =====================================================
       USER
    ===================================================== */

    .chat-user {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .user-avatar {
      width: 39px;
      height: 39px;
      border-radius: 50%;
      background: #ccfbf1;
      color: #0f766e;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
    }

    .user-name {
      font-weight: 600;
      color: #111827;
    }

    .user-email {
      margin-top: 3px;
      color: #9ca3af;
      font-size: 10px;
    }

    /* =====================================================
       TOPIC
    ===================================================== */

    .topic-badge {
      display: inline-block;
      padding: 6px 10px;
      background: #ede9fe;
      color: #6d28d9;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 600;
    }

    /* =====================================================
       STATUS
    ===================================================== */

    .chat-status {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 10px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 600;
    }

    .status-active {
      background: #dcfce7;
      color: #166534;
    }

    .status-closed {
      background: #f3f4f6;
      color: #6b7280;
    }

    .status-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: currentColor;
    }

    /* =====================================================
       LAST MESSAGE
    ===================================================== */

    .last-message {
      max-width: 300px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #6b7280;
      font-size: 12px;
    }

    /* =====================================================
       ACTIONS
    ===================================================== */

    .chat-actions {
      display: flex;
      gap: 7px;
    }

    .chat-btn {
      border: none;
      border-radius: 7px;
      padding: 8px 11px;
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

    .chat-btn:hover {
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

    .chat-modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.55);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      z-index: 9999;
    }

    .chat-modal {
      width: 100%;
      max-width: 850px;
      height: 80vh;
      background: #ffffff;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 20px 50px rgba(0,0,0,0.25);
      display: flex;
      flex-direction: column;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 20px;
      border-bottom: 1px solid #e5e7eb;
    }

    .modal-user {
      display: flex;
      align-items: center;
      gap: 11px;
    }

    .modal-avatar {
      width: 43px;
      height: 43px;
      border-radius: 50%;
      background: #ccfbf1;
      color: #0f766e;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
    }

    .modal-user h3 {
      margin: 0 0 3px;
      font-size: 15px;
      color: #111827;
    }

    .modal-user p {
      margin: 0;
      color: #9ca3af;
      font-size: 11px;
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

    /* =====================================================
       CHAT AREA
    ===================================================== */

    .messages-area {
      flex: 1;
      overflow-y: auto;
      padding: 25px;
      background: #f8fafc;
    }

    .conversation-info {
      text-align: center;
      margin-bottom: 22px;
    }

    .conversation-info span {
      display: inline-block;
      padding: 6px 12px;
      border-radius: 20px;
      background: #ede9fe;
      color: #6d28d9;
      font-size: 11px;
      font-weight: 600;
    }

    .message-row {
      display: flex;
      margin-bottom: 15px;
    }

    .message-row.user {
      justify-content: flex-end;
    }

    .message-row.ai {
      justify-content: flex-start;
    }

    .message-bubble {
      max-width: 70%;
      padding: 12px 15px;
      border-radius: 13px;
      font-size: 13px;
      line-height: 1.5;
    }

    .user-message {
      background: #14b8a6;
      color: #ffffff;
      border-bottom-right-radius: 4px;
    }

    .ai-message {
      background: #ffffff;
      color: #374151;
      border: 1px solid #e5e7eb;
      border-bottom-left-radius: 4px;
    }

    .sender-label {
      font-size: 9px;
      margin-bottom: 5px;
      font-weight: 700;
      opacity: 0.7;
    }

    /* =====================================================
       MODAL FOOTER
    ===================================================== */

    .modal-footer {
      padding: 14px 20px;
      border-top: 1px solid #e5e7eb;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer-info {
      color: #6b7280;
      font-size: 11px;
    }

    .close-chat-btn {
      border: none;
      background: #111827;
      color: #ffffff;
      padding: 9px 16px;
      border-radius: 7px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }

    /* =====================================================
       RESPONSIVE
    ===================================================== */

    @media (max-width: 1000px) {

      .ai-stats {
        grid-template-columns: repeat(2, 1fr);
      }

    }

    @media (max-width: 650px) {

      .ai-page {
        padding: 15px;
      }

      .ai-header {
        flex-direction: column;
      }

      .ai-stats {
        grid-template-columns: 1fr;
      }

      .chat-filters {
        flex-direction: column;
      }

      .chat-select {
        width: 100%;
      }

      .chat-modal {
        height: 90vh;
      }

      .message-bubble {
        max-width: 85%;
      }

    }

  `;

  return (
    <>
      <style>{styles}</style>

      <div className="ai-page">

        <div className="ai-container">

          {/* =================================================
              PAGE HEADER
          ================================================= */}

          <div className="ai-header">

            <div>

              <h1>
                AI Chat Assistant
              </h1>

              <p>
                Monitor and review AI fitness assistant
                conversations with Elite-Fit users
              </p>

            </div>

            <div className="ai-badge">
              AI Fitness Assistant
            </div>

          </div>


          {/* =================================================
              STATISTICS
          ================================================= */}

          <div className="ai-stats">

            <div className="ai-stat">

              <div className="ai-stat-icon">
                💬
              </div>

              <h2>
                {totalConversations}
              </h2>

              <p>
                Total Conversations
              </p>

            </div>


            <div className="ai-stat">

              <div className="ai-stat-icon">
                🟢
              </div>

              <h2>
                {activeConversations}
              </h2>

              <p>
                Active Conversations
              </p>

            </div>


            <div className="ai-stat">

              <div className="ai-stat-icon">
                ✓
              </div>

              <h2>
                {closedConversations}
              </h2>

              <p>
                Closed Conversations
              </p>

            </div>


            <div className="ai-stat">

              <div className="ai-stat-icon">
                🤖
              </div>

              <h2>
                {totalMessages}
              </h2>

              <p>
                Total Messages
              </p>

            </div>

          </div>


          {/* =================================================
              CONVERSATIONS
          ================================================= */}

          <div className="chat-card">

            <div className="chat-card-header">

              <h2>
                User AI Conversations
              </h2>

              <p>
                Review fitness questions and AI-generated
                responses
              </p>

            </div>


            {/* FILTERS */}

            <div className="chat-filters">

              <input
                className="chat-search"
                type="text"
                placeholder="Search user, email or topic..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />


              <select
                className="chat-select"
                value={topicFilter}
                onChange={(e) =>
                  setTopicFilter(e.target.value)
                }
              >

                <option value="All">
                  All Topics
                </option>

                <option value="Workout Recommendation">
                  Workout Recommendation
                </option>

                <option value="Diet Plan">
                  Diet Plan
                </option>

                <option value="Exercise Guidance">
                  Exercise Guidance
                </option>

                <option value="Fitness Goal">
                  Fitness Goal
                </option>

                <option value="Workout Schedule">
                  Workout Schedule
                </option>

                <option value="General Fitness">
                  General Fitness
                </option>

              </select>


              <select
                className="chat-select"
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

                <option value="Closed">
                  Closed
                </option>

              </select>

            </div>


            {/* TABLE */}

            <div className="table-scroll">

              {filteredConversations.length === 0 ? (

                <div className="empty">

                  <h3>
                    No Conversations Found
                  </h3>

                  <p>
                    Try another search or filter.
                  </p>

                </div>

              ) : (

                <table className="chat-table">

                  <thead>

                    <tr>

                      <th>
                        User
                      </th>

                      <th>
                        Topic
                      </th>

                      <th>
                        Messages
                      </th>

                      <th>
                        Last Message
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

                    {filteredConversations.map(
                      (conversation) => (

                        <tr key={conversation.id}>

                          <td>

                            <div className="chat-user">

                              <div className="user-avatar">

                                {conversation.user
                                  .charAt(0)
                                  .toUpperCase()}

                              </div>

                              <div>

                                <div className="user-name">
                                  {conversation.user}
                                </div>

                                <div className="user-email">
                                  {conversation.email}
                                </div>

                              </div>

                            </div>

                          </td>


                          <td>

                            <span className="topic-badge">
                              {conversation.topic}
                            </span>

                          </td>


                          <td>
                            {conversation.messages.length}
                          </td>


                          <td>

                            <div className="last-message">
                              {getLastMessage(
                                conversation
                              )}
                            </div>

                          </td>


                          <td>
                            {conversation.date}
                          </td>


                          <td>

                            <span
                              className={`chat-status ${
                                conversation.status ===
                                "Active"
                                  ? "status-active"
                                  : "status-closed"
                              }`}
                            >

                              <span className="status-dot"></span>

                              {conversation.status}

                            </span>

                          </td>


                          <td>

                            <div className="chat-actions">

                              <button
                                className="chat-btn view-btn"
                                onClick={() =>
                                  setSelectedChat(
                                    conversation
                                  )
                                }
                              >
                                View Chat
                              </button>


                              <button
                                className="chat-btn delete-btn"
                                onClick={() =>
                                  deleteConversation(
                                    conversation.id
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
          CHAT DETAILS MODAL
      ===================================================== */}

      {selectedChat && (

        <div
          className="chat-modal-overlay"
          onClick={() =>
            setSelectedChat(null)
          }
        >

          <div
            className="chat-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* HEADER */}

            <div className="modal-header">

              <div className="modal-user">

                <div className="modal-avatar">

                  {selectedChat.user
                    .charAt(0)
                    .toUpperCase()}

                </div>

                <div>

                  <h3>
                    {selectedChat.user}
                  </h3>

                  <p>
                    {selectedChat.email}
                  </p>

                </div>

              </div>


              <button
                className="close-btn"
                onClick={() =>
                  setSelectedChat(null)
                }
              >
                ×
              </button>

            </div>


            {/* MESSAGES */}

            <div className="messages-area">

              <div className="conversation-info">

                <span>
                  {selectedChat.topic}
                </span>

              </div>


              {selectedChat.messages.map(
                (message, index) => (

                  <div
                    key={index}
                    className={`message-row ${
                      message.sender
                    }`}
                  >

                    <div
                      className={`message-bubble ${
                        message.sender === "user"
                          ? "user-message"
                          : "ai-message"
                      }`}
                    >

                      <div className="sender-label">

                        {message.sender === "user"
                          ? selectedChat.user
                          : "AI Fitness Assistant"}

                      </div>

                      {message.text}

                    </div>

                  </div>

                )
              )}

            </div>


            {/* FOOTER */}

            <div className="modal-footer">

              <div className="footer-info">

                {selectedChat.messages.length} messages
                • {selectedChat.date}

              </div>

              <button
                className="close-chat-btn"
                onClick={() =>
                  setSelectedChat(null)
                }
              >
                Close Conversation
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default AiChatAssistant;