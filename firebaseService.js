import React, { useState, useEffect } from "react";
import { doc, setDoc, updateDoc, arrayUnion, onSnapshot } from "firebase/firestore";
import { db } from "./src/firebaseconfig";

const PostComponent = ({ postId }) => {
  const [postData, setPostData] = useState({ content: "", comments: [] });
  const [comment, setComment] = useState("");

  useEffect(() => {
    const postRef = doc(db, "post", postId);
    const unsubscribe = onSnapshot(postRef, (docSnap) => {
      if (docSnap.exists()) {
        setPostData(docSnap.data());
      }
    });

    return () => unsubscribe();
  }, [postId]);

  const createPost = async () => {
    try {
      await setDoc(doc(db, "post", postId), {
        ...postData,
        comments: [],
      });
      console.log("✅ تم إنشاء المنشور بنجاح!");
    } catch (error) {
      console.error("⚠️ خطأ في إنشاء المنشور:", error);
    }
  };

  const addComment = async () => {
    if (!comment.trim()) return;

    try {
      const postRef = doc(db, "post", postId);
      await updateDoc(postRef, {
        comments: arrayUnion(comment),
      });

      setComment(""); 
      console.log("✅ تم إضافة التعليق بنجاح!");
    } catch (error) {
      console.error("⚠️ خطأ في إضافة التعليق:", error);
    }
  };

  return (
    <div>
      <h2>📌 المنشور</h2>
      <p>{postData.content}</p>

      <h3>💬 التعليقات</h3>
      {postData.comments.map((c, index) => (
        <p key={index}>🗨️ {c}</p>
      ))}

      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="💬 أضف تعليقًا"
      />
      <button onClick={addComment}>➕ إضافة تعليق</button>

      <br />
      <button onClick={createPost}>📝 إنشاء منشور جديد</button>
    </div>
  );
};

export default PostComponent;