import React, { useRef, useEffect } from "react";
import { useChatBot } from "../hook/useChatBot";
import ChatBotButton from "./ChatBotButton";
import ChatBotHeader from "./ChatBotHeader";
import ChatBotInput from "./ChatBotInput";
import ChatMessage from "./ChatMessage";
import { motion, AnimatePresence } from "framer-motion";
import { Bot } from "lucide-react";

const quickPrompts = ["Skills", "Projects", "Experience", "Contact", "Education"];

const ChatBot = () => {
  const {
    isChatbotVisible,
    setIsChatbotVisible,
    messages,
    handleKeyPress,
    userInput,
    handleSendMessage,
    setUserInput,
    loading,
  } = useChatBot();

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isChatbotVisible) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading, isChatbotVisible]);

  return (
    <div className="chatbot-root-container">
      <ChatBotButton
        title={isChatbotVisible ? "Close Assistant" : "Ask Assistant"}
        OnClick={() => setIsChatbotVisible(!isChatbotVisible)}
        isOpen={isChatbotVisible}
      />

      <AnimatePresence>
        {isChatbotVisible && (
          <motion.div
            className="modern-chatbot-window"
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          >
            <ChatBotHeader
              title="SuBot"
              onClose={() => setIsChatbotVisible(false)}
            />

            <div className="modern-chatbot-messages">
              {messages.map((msg, index) => (
                <ChatMessage key={index} sender={msg.sender} text={msg.text} />
              ))}

              {loading && (
                <div className="chat-message-row bot-row">
                  <div className="chat-avatar bot-avatar">
                    <Bot size={15} />
                  </div>
                  <div className="chat-bubble bot-bubble typing-bubble">
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            <div className="chatbot-quick-prompts">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  className="chatbot-prompt-chip"
                  onClick={() => handleSendMessage(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>

            <ChatBotInput
              value={userInput}
              OnChange={(e) => setUserInput(e.target.value)}
              OnKeyPress={handleKeyPress}
              OnClick={() => handleSendMessage()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
