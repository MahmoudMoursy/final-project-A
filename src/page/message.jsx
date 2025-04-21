import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  setDoc,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import db from "../firebaseconfig";

const Message = ({ currentUserId, receiverId }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const chatId = [currentUserId, receiverId].sort().join("_");

  // استمع للرسائل لحظياً
  useEffect(() => {
    const messagesRef = collection(db, "chats", chatId, "messages");
    const q = query(messagesRef, orderBy("timestamp", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [chatId]);

  // إرسال رسالة
  const sendMessage = async () => {
    if (inputMessage.trim() === "") return;

    // تأكد إن الشات موجود
    const chatRef = doc(db, "chats", chatId);
    const chatSnap = await getDoc(chatRef);
    if (!chatSnap.exists()) {
      await setDoc(chatRef, {
        participants: [currentUserId, receiverId],
        createdAt: serverTimestamp(),
      });
    }

    const messagesRef = collection(db, "chats", chatId, "messages");
    await addDoc(messagesRef, {
      senderId: currentUserId,
      text: inputMessage,
      timestamp: serverTimestamp(),
    });

    setInputMessage("");
  };

  return (
    <div className="chat-container" style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <div
        className="chat-box"
        style={{
          height: "400px",
          overflowY: "auto",
          border: "1px solid #ccc",
          borderRadius: 10,
          padding: 10,
          marginBottom: 10,
          backgroundColor: "#f9f9f9",
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              textAlign: msg.senderId === currentUserId ? "right" : "left",
              margin: "5px 0",
            }}
          >
            <span
              style={{
                display: "inline-block",
                backgroundColor: msg.senderId === currentUserId ? "#d1f3d1" : "#e1e1e1",
                padding: "8px 12px",
                borderRadius: "20px",
                maxWidth: "70%",
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="اكتب رسالتك..."
          className="form-control"
        />
        <button className="btn btn-success" onClick={sendMessage}>
          إرسال
        </button>
      </div>
    </div>
  );
};

export default Message;
