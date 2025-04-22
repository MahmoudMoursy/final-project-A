import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc, updateDoc, arrayUnion, onSnapshot } from 'firebase/firestore';
import db from "../firebaseconfig";
import NavBar from "../Components/NavBar";


const Chats = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [conversations, setConversations] = useState([]);
  const [usernames, setUsernames] = useState({});
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isOriginalSender, setIsOriginalSender] = useState(true);
  const [input, setInput] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const fetchChats = async () => {
    const messagesRef = collection(db, "messages");
    const snapshot = await getDocs(messagesRef);
    const userConversations = snapshot.docs.filter((doc) => {
      const data = doc.data();
      const hasMessages =
        (data.sender && data.sender.length > 0) ||
        (data.receiver && data.receiver.length > 0);
      return doc.id.includes(currentUser.UserId) && hasMessages;
    });

    setConversations(userConversations);

    const fetchedUsernames = {};
    for (const docSnap of userConversations) {
      const otherId = docSnap.id
        .replace(currentUser.UserId + "-", "")
        .replace("-" + currentUser.UserId, "");
      if (!fetchedUsernames[otherId]) {
        const userDoc = await getDoc(doc(db, "user", otherId));
        fetchedUsernames[otherId] = userDoc.exists()
          ? userDoc.data().username
          : otherId;
      }
    }
    setUsernames(fetchedUsernames);
  };

  const sendMessage = async () => {
    if (!input.trim() || !selectedChatId) return;

    const messageDocRef = doc(db, "messages", selectedChatId);
    const fieldToUpdate = isOriginalSender ? "sender" : "receiver";

    await updateDoc(messageDocRef, {
      [fieldToUpdate]: arrayUnion({
        text: input,
        timestamp: new Date().toISOString(),
        senderId: currentUser.UserId,
      }),
    });

    setInput("");
  };

  useEffect(() => {
    let unsubscribe;

    if (selectedChatId) {
      const messageDocRef = doc(db, "messages", selectedChatId);

      unsubscribe = onSnapshot(messageDocRef, (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          const allMessages = [
            ...(data.sender || []),
            ...(data.receiver || []),
          ];

          allMessages.sort(
            (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
          );

          const [firstId] = selectedChatId.split("-");
          const userIsSender = firstId === currentUser.UserId;
          setIsOriginalSender(userIsSender);
          setMessages(allMessages);
        } else {
          setMessages([]); // Clear messages if the document doesn't exist
        }
      });
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [selectedChatId]);

  useEffect(() => {
    if (currentUser?.UserId) fetchChats();
  }, []);

  const styles = {
    root: {
      backgroundColor: "#e1f5fe",
      color: "#0d47a1",
      fontFamily: "Segoe UI, sans-serif",
    },
    chatSidebar: {
      backgroundColor: "#bbdefb",
      borderRight: "1px solid #90caf9",
    },
    chatHeader: {
      backgroundColor: "#e1f5fe",
    },
    chatArea: {
      backgroundColor: "#ffffff",
    },
    inputField: {
      backgroundColor: "#f0f8ff",
      borderColor: "#90caf9",
      color: "#0d47a1",
    },
    button: {
      backgroundColor: "#42a5f5",
      color: "#fff",
    },
    bubbleMy: {
      backgroundColor: "#42a5f5",
      color: "#fff",
      alignSelf: "flex-end",
    },
    bubbleOther: {
      backgroundColor: "#bbdefb",
      color: "#0d47a1",
      alignSelf: "flex-start",
    },
    bubbleCommon: {
      maxWidth: "75%",
      padding: "12px 16px",
      borderRadius: "1rem",
      marginBottom: "12px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    },
    smallText: {
      color: "#90caf9",
    },
    placeholder: {
      color: "#1e3a8a",
    },
  };

  return (
    <>
      <style>{`
        ::placeholder {
          color: #1e3a8a !important;
          opacity: 1;
        }
      `}</style>

      <div className="container-fluid vh-100 d-flex text-dark p-0" style={styles.root}>
        <div className="col-12 col-md-4 overflow-auto" style={styles.chatSidebar}>
          <div className="p-3 border-bottom border-info d-flex align-items-center justify-content-between">
            <h5 className="mb-0">محادثاتك</h5>
            <i className="bi bi-chat-dots-fill fs-4 text-primary"></i>
          </div>
          {conversations.map((conv) => {
            const otherId = conv.id
              .replace(currentUser.UserId + "-", "")
              .replace("-" + currentUser.UserId, "");
            const otherUsername = usernames[otherId];

            return (
              <div
                key={conv.id}
                className={`d-flex align-items-center gap-3 p-3 chat-item ${
                  selectedChatId === conv.id ? "bg-primary bg-opacity-10" : ""
                }`}
                style={{ cursor: "pointer", transition: "0.2s" }}
              >
                <div
                  className="flex-grow-1 d-flex align-items-center"
                  onClick={() => {
                    setSelectedChatId(conv.id);
                    setSelectedUser(otherUsername);
                  }}
                >
                  <div className="rounded-circle bg-primary" style={{ width: 40, height: 40 }}>
                    <i
                      className="bi bi-person-fill text-white d-flex justify-content-center align-items-center"
                      style={{ fontSize: 20, height: "100%" }}
                    ></i>
                  </div>
                  <div className="ms-2">
                    <div className="fw-bold">{otherUsername}</div>
                    <small className="text-muted">انقر لفتح المحادثة</small>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-12 col-md-8 d-flex flex-column">
          {selectedChatId ? (
            <>
              <div className="p-3 border-bottom border-info d-flex align-items-center gap-2" style={styles.chatHeader}>
                <i className="bi bi-person-circle fs-4 text-primary"></i>
                <h6 className="mb-0">{selectedUser}</h6>
              </div>

              <div className="flex-grow-1 overflow-auto p-4 d-flex flex-column" style={styles.chatArea}>
                {messages.map((msg, idx) => {
                  const isMyMessage = msg.senderId === currentUser.UserId;
                  const time = new Date(msg.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  });

                  const bubbleStyle = {
                    ...(isMyMessage ? styles.bubbleMy : styles.bubbleOther),
                    ...styles.bubbleCommon,
                  };

                  return (
                    <div key={idx} style={bubbleStyle}>
                      <div>{msg.text}</div>
                      <div className="text-end small mt-2">{time}</div>
                    </div>
                  );
                })}
              </div>

              <div className="p-3 border-top border-info" style={styles.chatHeader}>
                <div className="input-group shadow-sm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="اكتب رسالتك..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={styles.inputField}
                  />
                  <button className="btn" style={styles.button} onClick={sendMessage}>
                    إرسال
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="d-flex align-items-center justify-content-center h-100">
              <h5 style={{ color: "#90caf9" }}>اختر محادثة لعرض الرسائل</h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
};


export default Chats;
