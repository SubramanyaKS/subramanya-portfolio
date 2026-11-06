import React from "react";
import { Bot, User } from "lucide-react";

const ChatMessage = ({ sender, text }) => {
  const isUser = sender === "user";

  return (
    <div className={`chat-message-row ${isUser ? "user-row" : "bot-row"}`}>
      {!isUser && (
        <div className="chat-avatar bot-avatar">
          <Bot size={15} />
        </div>
      )}
      <div className={`chat-bubble ${isUser ? "user-bubble" : "bot-bubble"}`}>
        {text}
      </div>
      {isUser && (
        <div className="chat-avatar user-avatar">
          <User size={15} />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
