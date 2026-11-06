import React from "react";
import { MessageSquare, X } from "lucide-react";
import { motion } from "framer-motion";

const ChatBotButton = ({ OnClick, title, isOpen }) => {
  return (
    <motion.button
      type="button"
      onClick={OnClick}
      className="modern-chatbot-btn"
      title={title}
      aria-label={title}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
    >
      <div className="chatbot-btn-glow" />
      {isOpen ? <X size={22} /> : <MessageSquare size={22} />}
      <span className="chatbot-online-dot" />
    </motion.button>
  );
};

export default ChatBotButton;
