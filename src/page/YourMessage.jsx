import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import db from "../firebaseconfig";
import NavBar from '../Components/NavBar';

const Chats = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [conversations, setConversations] = useState([]);
  const [usernames, setUsernames] = useState({});
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isOriginalSender, setIsOriginalSender] = useState(true);
  const [input, setInput] = useState("");

  const fetchChats = async () => {
    const messagesRef = collection(db, "messages");
    const snapshot = await getDocs(messagesRef);
    const userConversations = snapshot.docs.filter((doc) =>
      doc.id.includes(currentUser.UserId)
    );

    setConversations(userConversations);

    const fetchedUsernames = {};
    for (const docSnap of userConversations) {
      const otherId = docSnap.id.replace(currentUser.UserId + "-", "").replace("-" + currentUser.UserId, "");
      if (!fetchedUsernames[otherId]) {
        const userDoc = await getDoc(doc(db, "user", otherId));
        if (userDoc.exists()) {
          fetchedUsernames[otherId] = userDoc.data().username;
        } else {
          fetchedUsernames[otherId] = otherId;
        }
      }
    }
    setUsernames(fetchedUsernames);
  };

  const loadMessages = async (chatId) => {
    const chatDoc = await getDoc(doc(db, "messages", chatId));
    if (chatDoc.exists()) {
      const data = chatDoc.data();
      const allMessages = [
        ...(data.sender || []),
        ...(data.receiver || [])
      ];

      allMessages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

      // هنا نحدد إذا كان المستخدم الحالي هو الأول في chatId
      const [firstId, secondId] = chatId.split("-");
      const userIsSender = firstId === currentUser.UserId;
      setIsOriginalSender(userIsSender);

      setMessages(allMessages);
      setSelectedChatId(chatId);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || !selectedChatId) return;

    const messageDocRef = doc(db, "messages", selectedChatId);
    try {
      const fieldToUpdate = isOriginalSender ? "sender" : "receiver";

      await updateDoc(messageDocRef, {
        [fieldToUpdate]: arrayUnion({
          text: input,
          timestamp: new Date().toISOString(),
          senderId: currentUser.UserId
        })
      });

      setInput("");
      loadMessages(selectedChatId);
    } catch (error) {
      console.error("فشل في إرسال الرسالة:", error);
    }
  };

  useEffect(() => {
    if (currentUser.UserId) fetchChats();
  }, []);

  return (
    <>
    
    <div style={{ display: 'flex', gap: '2rem' }}>
      {/* قائمة المحادثات */}
      <div style={{ width: '30%' }}>
        <h3>محادثاتك</h3>
        {conversations.map((conv) => {
          const otherId = conv.id.replace(currentUser.UserId + "-", "").replace("-" + currentUser.UserId, "");
          const otherUsername = usernames[otherId];

          return (
            <div
              key={conv.id}
              onClick={() => loadMessages(conv.id)}
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                margin: "5px 0",
                cursor: "pointer"
              }}
            >
              محادثة مع: {otherUsername}
            </div>
          );
        })}
      </div>

      {/* الرسائل */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {selectedChatId ? (
          <>
            <h3>الرسائل</h3>
            <div style={{ flex: 1, overflowY: "auto", maxHeight: "400px", marginBottom: "15px" }}>
              {messages.map((msg, idx) => {
                const isMyMessage = msg.senderId === currentUser.UserId;
                const shouldBeOnRight = isMyMessage;
                const backgroundColor = shouldBeOnRight ? '#c2f0c2' : '#eee';

                const time = msg.timestamp
                  ? new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  : '';

                return (
                  <div
                    key={idx}
                    style={{
                      backgroundColor,
                      textAlign: shouldBeOnRight ? 'right' : 'left',
                      margin: "10px 0",
                      padding: "8px 12px",
                      borderRadius: "10px",
                      maxWidth: "70%",
                      marginLeft: shouldBeOnRight ? "auto" : "0",
                      marginRight: shouldBeOnRight ? "0" : "auto"
                    }}
                  >
                    <div>{msg.text}</div>
                    <div style={{ fontSize: "12px", color: "#888", marginTop: "5px" }}>{time}</div>
                  </div>
                );
              })}
            </div>

            {/* صندوق إرسال الرسالة */}
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="اكتب رسالتك..."
                style={{ flex: 1, padding: "10px" }}
              />
              <button onClick={sendMessage}>إرسال</button>
            </div>
          </>
        ) : (
          <p>اختر محادثة لعرض الرسائل</p>
        )}
      </div>
    </div>
    </>
  );
};

export default Chats;
