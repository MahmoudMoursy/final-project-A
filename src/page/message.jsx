import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import db from "../firebaseconfig";

const Message = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messageId = JSON.parse(localStorage.getItem("messageId"));
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const fetchMessages = async () => {
    if (!messageId) return;

    const messageDocRef = doc(db, "messages", messageId);
    const messageDoc = await getDoc(messageDocRef);
    console.log(messageDoc.data());
    
    
    if (messageDoc.exists()) {
      const data = messageDoc.data();
      const senderMsgs = data.sender || [];
      const receiverMsgs = data.receiver || [];

      const combined = [...senderMsgs.map(msg => ({ ...msg, type: "sender" })), 
                        ...receiverMsgs.map(msg => ({ ...msg, type: "receiver" }))];

      // ترتيب الرسائل حسب الوقت
      const sorted = combined.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

      setMessages(sorted);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [messageId]);

  const send = async () => {

    
    // if (!input.trim() || !messageId) return;

    const messageDocRef = doc(db, "messages", messageId);
    const messageDoc = await getDoc(messageDocRef);
    console.log(messageDoc.data());

    console.log(messageId);
    
    try {
      await updateDoc(messageDocRef, {
        sender: arrayUnion({
          text: input,
          timestamp: new Date().toISOString(),
          senderId: currentUser.UserId
        })
      });
      setInput("");
      fetchMessages(); // تحدّث الرسائل بعد الإرسال
    } catch (error) {
      console.error("فشل في إرسال الرسالة:", error);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <div style={{ maxHeight: "400px", overflowY: "auto", marginBottom: "15px" }}>
        {messages.map((msg, index) => {
          const isSender = msg.senderId === currentUser.UserId;
          return (
            <div
              key={index}
              style={{
                backgroundColor: isSender ? "#d4edda" : "#f1f1f1",
                padding: "10px 15px",
                borderRadius: "15px",
                marginBottom: "10px",
                alignSelf: isSender ? "flex-end" : "flex-start",
                maxWidth: "75%",
                textAlign: isSender ? "right" : "left",
                marginLeft: isSender ? "auto" : "0",
                marginRight: isSender ? "0" : "auto"
              }}
            >
              {msg.text}
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="اكتب رسالتك..."
          style={{ flex: 1, padding: "10px" }}
        />
        <button onClick={send}>إرسال</button>
      </div>
    </div>
  );
};

export default Message;
