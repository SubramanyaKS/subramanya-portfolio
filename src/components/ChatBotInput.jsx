import React from "react";
import { Send } from "lucide-react";

const ChatBotInput = ({ OnChange, OnKeyPress, OnClick, value }) => {
  return (
    <div className="modern-chatbot-input-bar">
      <input
        type="text"
        className="chatbot-input"
        placeholder="Ask me something (e.g. skills, projects)..."
        value={value}
        onChange={OnChange}
        onKeyDown={OnKeyPress}
      />
      <button
        type="button"
        className="chatbot-send-btn"
        onClick={OnClick}
        aria-label="Send message"
        disabled={!value || !value.trim()}
      >
        <Send size={15} />
      </button>
    </div>
  );
};

export default ChatBotInput;
