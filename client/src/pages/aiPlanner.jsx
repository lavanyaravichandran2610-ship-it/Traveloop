import { useState } from "react";
import { motion } from "framer-motion";
import API from "../api/axios";

export default function AIPlanner() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi 👋 I’m your AI Travel Planner. Tell me your destination and I’ll build your trip!"
    }
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await API.post("/ai/generate", {
        prompt: input,
      });

      setMessages([
        ...newMessages,
        {
          role: "ai",
          text:
            res.data?.reply ||
            "Here is your AI-generated itinerary ✈️ (backend not connected yet)"
        }
      ]);
    } catch (err) {
      setMessages([
        ...newMessages,
        {
          role: "ai",
          text: "⚠️ AI service not connected. Please check backend."
        }
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>AI Trip Planner 🤖</h1>

      <div style={styles.chatBox}>
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            style={{
              ...styles.msg,
              alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
              background: msg.role === "user" ? "#111" : "#fff",
              color: msg.role === "user" ? "#fff" : "#111",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {msg.text}
          </motion.div>
        ))}

        {loading && <p>AI is thinking...</p>}
      </div>

      <div style={styles.inputRow}>
        <input
          className="input"
          value={input}
          placeholder="Ask: Plan a 5 day trip to Goa..."
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="btn" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

const styles = {
  chatBox: {
    height: "60vh",
    overflowY: "auto",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    background: "#f1f3f6",
    borderRadius: 12,
  },
  msg: {
    padding: "10px 14px",
    borderRadius: 12,
    maxWidth: "70%",
  },
  inputRow: {
    display: "flex",
    gap: 10,
    marginTop: 15,
  },
};