import { useState } from "react";
import axios from "axios";

export const useChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [loading,setLoading]=useState(false);

  const botreply = () => {
    setLoading(true);
    try {
      const query = userInput.toLowerCase();
      const res=axios.post('https://subot-backend.onrender.com/ask', { query });
      const botReply = { sender: "bot", text: res.data['response'] };
      setMessages((prevMessage) => [...prevMessage, botReply]);
    } catch (error) {
      console.error(error);
    } finally {
        setLoading(false);
      }
  }

  const handleSendMessage = () => {
    if (userInput.trim() === "") return;

    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);
    setLoading(!loading)

    botreply();

    setUserInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSendMessage();
  };

  return { handleKeyPress, loading, messages, isChatbotVisible, setIsChatbotVisible, userInput, handleSendMessage, setUserInput }

}