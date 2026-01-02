import React from 'react';
import { Send } from 'lucide-react';

const ChatBotInput = ({OnChange,OnKeyPress,OnClick,value}) => {
  return (
    <div className="card-footer bg-white d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Type your message..."
            value={value}
            onChange={OnChange}
            onKeyDown={OnKeyPress}
          />
          <button type="button" className="btn-success chatbot-send border-0" onClick={OnClick} ><Send/> </button>
        </div>
  )
}

export default ChatBotInput;