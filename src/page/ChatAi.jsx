import { useState, useEffect } from "react";
import OpenAI from "openai";
import "./ChatAi.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";


const openai = new OpenAI({
  apiKey: "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", // اخفي المفتاح الحقيقي
  dangerouslyAllowBrowser: true,
});

function ChatAi() {
  const [chats, setChats] = useState([{ id: 1, title: "محادثة جديدة", messages: [] }]);
  const [activeChatId, setActiveChatId] = useState(1);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const activeChat = chats.find((chat) => chat.id === activeChatId);

  // ✅ تحميل المحادثات من localStorage عند بداية التشغيل
  useEffect(() => {
    const savedChats = localStorage.getItem("chats");
    if (savedChats) {
      const parsedChats = JSON.parse(savedChats);
      setChats(parsedChats);
      setActiveChatId(parsedChats[0]?.id || Date.now());
    }
  }, []);

  // ✅ حفظ المحادثات في localStorage عند أي تحديث
  useEffect(() => {
    localStorage.setItem("chats", JSON.stringify(chats));
  }, [chats]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { text: input, sender: "user" };

    const updatedChats = chats.map((chat) => {
      if (chat.id === activeChatId) {
        const updatedTitle =
          chat.title === "محادثة جديدة"
            ? input.length > 30
              ? input.slice(0, 30) + "..."
              : input
            : chat.title;

        return {
          ...chat,
          title: updatedTitle,
          messages: [...chat.messages, userMessage, { loading: true, sender: "bot" }],
        };
      }
      return chat;
    });

    setChats(updatedChats);
    setInput("");
    setIsLoading(true);

    try {
      const previousMessages = activeChat.messages
        .filter((msg) => msg.sender && !msg.loading)
        .map((msg) => ({
          role: msg.sender === "user" ? "user" : "assistant",
          content: msg.text,
        }));

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [...previousMessages, { role: "user", content: input }],
      });

      const botReply = response.choices[0].message.content;

      const finalChats = chats.map((chat) =>
        chat.id === activeChatId
          ? {
            ...chat,
            messages: [
              ...chat.messages.filter((m) => !m.loading),
              userMessage,
              { text: botReply, sender: "bot" },
            ],
          }
          : chat
      );

      setChats(finalChats);
    } catch (error) {
      console.error("❌ خطأ:", error);
      alert("حدث خطأ أثناء إرسال الرسالة.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  const createNewChat = () => {
    const newId = Date.now();
    const newChat = { id: newId, title: "محادثة جديدة", messages: [] };
    setChats([...chats, newChat]);
    setActiveChatId(newId);
  };

  const deleteChat = (id) => {
    const updated = chats.filter((chat) => chat.id !== id);
    setChats(updated);
    if (id === activeChatId && updated.length > 0) {
      setActiveChatId(updated[0].id);
    } else if (updated.length === 0) {
      createNewChat();
    }
  };

  return (
    <>
      <div className="chat-support-container">
        <NavBar />
        <div className="sidebar">
          <img src="/src\assets\waset.png" alt="وسيط" className="logo" />
          <h3 className="Hh">المحادثات</h3>
          <ul className="chat-list">
            {chats.map((chat) => (
              <li
                key={chat.id}
                className={chat.id === activeChatId ? "active" : ""}
                onClick={() => setActiveChatId(chat.id)}
              >
                <span>{chat.title || "بدون عنوان"}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteChat(chat.id);
                  }}
                >
                  🗑
                </button>
              </li>
            ))}
          </ul>
          <button onClick={createNewChat} className="new-chat-btn">➕ محادثة جديدة</button>

          <div className="user-card">
            <p>مريم سعد</p>
            <p className="email">mariam372001@gmail.com</p>
          </div>
        </div>

        <div className="main-content">
          <div className="chat-title">
            <h2>{activeChat?.title || "بدون عنوان"}</h2>
          </div>

          <div className="chat-box">
            <p className="date">01 فبراير 2025</p>

            <div className="message khamsat">
              <div className="logo-circle">وسيط</div>
              <div className="message-content">
                أهلاً بك في وسيط. أرسل سؤالك او بماذا استطيع ان اساعدك ،سأكون سعيد بمساعدك!!!
              </div>
            </div>

            {activeChat?.messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.loading && <div className="message-content">⏳ جارٍ التحميل...</div>}
                {msg.text && <div className="message-content">{msg.text}</div>}
              </div>
            ))}
          </div>

          <div className="input-area">
            <input
              type="text"
              placeholder="اكتب رسالتك هنا..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />
            <button onClick={sendMessage} disabled={isLoading}>إرسال</button>
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
}

export default ChatAi;