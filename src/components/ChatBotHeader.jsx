import React from "react";
import { Bot, X } from "lucide-react";

const ChatBotHeader = ({ title, onClose }) => {
  return (
    <div className="modern-chatbot-header">
      <div className="d-flex align-items-center gap-2">
        <div className="chatbot-avatar-badge">
          <Bot size={18} />
        </div>
        <div>
          <h4 className="chatbot-header-title">{title}</h4>
          <span className="chatbot-status-subtitle">
            <span className="status-indicator" /> Online Assistant
          </span>
        </div>
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="chatbot-close-btn"
          aria-label="Close Chatbot"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default ChatBotHeader;
