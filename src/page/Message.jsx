"use client";

import { useState } from "react";
import { SendHorizonal } from "lucide-react";

const ChatPage = ({ messages, currentUserId }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() === "") return;

    // send message logic here
    console.log("Sending:", newMessage);

    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="p-4 bg-white shadow flex items-center">
        <h2 className="text-lg font-semibold">Chat</h2>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => {
          const isOwnMessage = msg.senderId === currentUserId;
          return (
            <div
              key={idx}
              className={`flex ${isOwnMessage ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl shadow text-sm ${
                  isOwnMessage
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-white text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          );
        })}
      </div>

      {/* Message input */}
      <div className="p-4 bg-white border-t flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border rounded-full px-4 py-2 outline-none text-sm"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
        >
          <SendHorizonal size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
