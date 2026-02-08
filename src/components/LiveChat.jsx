import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Salom! Sizga qanday yordam bera olaman?", sender: 'bot', time: new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      time: new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Auto response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Rahmat! Operatorlarimiz tez orada javob berishadi.",
        sender: 'bot',
        time: new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="live-chat-button"
        aria-label="Chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="live-chat-window">
          <div className="chat-header">
            <div>
              <h3>Jonli Chat</h3>
              <p className="chat-status">
                <span className="status-dot"></span>
                Online
              </p>
            </div>
            <button onClick={() => setIsOpen(false)} className="chat-close">
              <X size={20} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map(msg => (
              <div key={msg.id} className={`chat-message ${msg.sender}`}>
                <div className="message-bubble">
                  <p>{msg.text}</p>
                  <span className="message-time">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="chat-input-form">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Xabar yozing..."
              className="chat-input"
            />
            <button type="submit" className="chat-send-btn">
              <Send size={20} />
            </button>
          </form>
        </div>
      )}

      <style>{`
        .live-chat-button {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--primary);
          color: white;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(0, 102, 255, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1000;
        }

        .live-chat-button:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 32px rgba(0, 102, 255, 0.4);
        }

        .live-chat-window {
          position: fixed;
          bottom: 100px;
          right: 24px;
          width: 380px;
          height: 500px;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          box-shadow: var(--shadow-lg);
          display: flex;
          flex-direction: column;
          z-index: 1000;
          animation: slideInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .chat-header {
          padding: 20px;
          background: var(--primary);
          color: white;
          border-radius: var(--radius) var(--radius) 0 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chat-header h3 {
          margin: 0;
          font-size: 18px;
          color: white;
        }

        .chat-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          margin-top: 4px;
          opacity: 0.9;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #4ade80;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .chat-close {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
        }

        .chat-close:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .chat-messages {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .chat-message {
          display: flex;
        }

        .chat-message.bot {
          justify-content: flex-start;
        }

        .chat-message.user {
          justify-content: flex-end;
        }

        .message-bubble {
          max-width: 70%;
          padding: 12px 16px;
          border-radius: 16px;
          animation: fadeIn 0.3s;
        }

        .chat-message.bot .message-bubble {
          background: var(--bg-secondary);
          border-bottom-left-radius: 4px;
        }

        .chat-message.user .message-bubble {
          background: var(--primary);
          color: white;
          border-bottom-right-radius: 4px;
        }

        .message-bubble p {
          margin: 0;
          font-size: 14px;
          line-height: 1.5;
        }

        .message-time {
          display: block;
          font-size: 11px;
          margin-top: 4px;
          opacity: 0.7;
        }

        .chat-input-form {
          padding: 16px;
          border-top: 1px solid var(--border);
          display: flex;
          gap: 8px;
        }

        .chat-input {
          flex: 1;
          padding: 12px 16px;
          border: 1px solid var(--border);
          border-radius: 24px;
          font-size: 14px;
          background: var(--bg-secondary);
          color: var(--text-primary);
          outline: none;
          transition: border-color 0.2s;
        }

        .chat-input:focus {
          border-color: var(--primary);
        }

        .chat-send-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--primary);
          color: white;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .chat-send-btn:hover {
          transform: scale(1.05);
        }

        @media (max-width: 480px) {
          .live-chat-window {
            width: calc(100vw - 32px);
            height: calc(100vh - 140px);
            right: 16px;
            bottom: 90px;
          }
        }
      `}</style>
    </>
  );
};

export default LiveChat;
