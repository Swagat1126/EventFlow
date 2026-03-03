import { useState } from "react";
import intents from "./intents";
import "./ChatBot.css";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I am EventFlow Assistant. How can I help you?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    for (let intent of intents) {
      for (let keyword of intent.keywords) {
        if (lowerMessage.includes(keyword)) {
          return intent.response;
        }
      }
    }

    return "Sorry, I didn't understand that. Please try asking differently.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    const botReply = { text: getBotResponse(input), sender: "bot" };

    setMessages([...messages, userMessage, botReply]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <div className="chat-icon" onClick={() => setIsOpen(!isOpen)}>
        💬
      </div>

      {isOpen && (
        <div className="chatbot-container">
          <div className="chat-header">
            EventFlow Assistant
          </div>

          <div className="chat-window">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="input-area">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;