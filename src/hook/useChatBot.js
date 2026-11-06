import { useState } from "react";
import axios from "axios";
import { rules, responses } from "../utils/chatbot";

// Set to true once the backend server is running
const USE_BACKEND = false;
const BACKEND_URL = "https://subot-backend.onrender.com/ask";

export const useChatBot = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! 👋 I'm SuBot, Subramanya's portfolio assistant. Ask me anything about his skills, projects, experience, or education!",
    },
  ]);
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Match user input against predefined rules
  const getPredefinedReply = (query) => {
    const cleanQuery = query.toLowerCase().trim();

    for (const [category, keywords] of Object.entries(rules)) {
      const isMatch = keywords.some((kw) => {
        const regex = new RegExp(`\\b${kw}\\b`, "i");
        return regex.test(cleanQuery) || cleanQuery.includes(kw);
      });
      if (isMatch) {
        return responses[category];
      }
    }

    return responses.fallback;
  };

  const handleSendMessage = async (textToSend) => {
    const messageText = (textToSend || userInput).trim();
    if (!messageText) return;

    // Add user message
    const updatedMessages = [...messages, { sender: "user", text: messageText }];
    setMessages(updatedMessages);
    setUserInput("");
    setLoading(true);

    if (USE_BACKEND) {
      try {
        const res = await axios.post(BACKEND_URL, { query: messageText });
        const botReplyText = res.data?.response || getPredefinedReply(messageText);
        setMessages((prev) => [...prev, { sender: "bot", text: botReplyText }]);
      } catch (error) {
        console.warn("Backend unavailable, falling back to predefined answer:", error);
        const fallbackReply = getPredefinedReply(messageText);
        setMessages((prev) => [...prev, { sender: "bot", text: fallbackReply }]);
      } finally {
        setLoading(false);
      }
    } else {
      // Natural brief typing simulation
      setTimeout(() => {
        const replyText = getPredefinedReply(messageText);
        setMessages((prev) => [...prev, { sender: "bot", text: replyText }]);
        setLoading(false);
      }, 400);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return {
    handleKeyPress,
    loading,
    messages,
    isChatbotVisible,
    setIsChatbotVisible,
    userInput,
    handleSendMessage,
    setUserInput,
  };
};
