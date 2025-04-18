import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
    doc,
    collection,
    query,
    orderBy,
    onSnapshot,
    addDoc,
    serverTimestamp
} from "firebase/firestore";
import db from "../firebaseconfig";
import NavBar from '../Components/NavBar';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../Redux/CurrentUser';
const PostDetails = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const dispatch = useDispatch();
    dispatch(setCurrentUser(user));

    const { id: postId } = useParams();
    const location = useLocation();
    const passedPost = location.state?.post || null;

    const [postData, setPostData] = useState(passedPost);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        if (!postId) {
            console.error("⚠️ Post ID is missing or invalid:", postId);
            return;
        }

        const postRef = doc(db, "posts", postId);
        const unsubscribePost = onSnapshot(postRef, (docSnap) => {
            if (docSnap.exists()) {
                setPostData(docSnap.data());
            } else {
                console.error("⚠️ المنشور غير موجود!");
            }
        });

        return () => unsubscribePost();
    }, [postId]);

    useEffect(() => {
        if (!postId) return;

        const commentsRef = collection(db, "posts", postId, "comments");
        const q = query(commentsRef, orderBy("timestamp", "desc"));

        const unsubscribeComments = onSnapshot(q, (snapshot) => {
            const commentsList = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setComments(commentsList);
        });

        return () => unsubscribeComments();
    }, [postId]);

    const handleAddComment = async () => {
        if (!newComment.trim()) return;

        try {
            const commentsRef = collection(db, "posts", postId, "comments");
            await addDoc(commentsRef, {
                user: user.username,
                text: newComment,
                avatar:
                    "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg",
                timestamp: serverTimestamp()
            });

            setNewComment("");
        } catch (error) {
            console.error("⚠️ خطأ في إضافة التعليق:", error);
        }
    };

    if (!postData) {
        return <p className="not-found">🚫 المنشور غير متاح</p>;
    }

    return (
        <>
            <style>{
                `.container {
  direction: rtl;
  text-align: right;
  margin: 6% auto;
  max-width: 820px;
  padding: 25px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: "Cairo", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.title {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #222;
}

.timestamp {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 25px;
}

.content-box {
  font-size: 1.1rem;
  line-height: 1.8;
  background-color: #f9f9fb;
  padding: 18px;
  border-radius: 10px;
  margin-bottom: 35px;
  color: #333;
  border: 1px solid #e0e0e0;
}

.comments-section {
  margin-top: 40px;
}

.comments-title {
  font-size: 1.4rem;
  margin-bottom: 20px;
  color: #333;
}

ul {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.comment {
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 15px;
  background-color: #f1f3f6;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #ddd;
}

.avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ccc;
}

.comment-text {
  flex: 1;
}

.comment-text strong {
  color: #1a237e;
  font-size: 0.95rem;
}

.comment-text p {
  margin: 5px 0 0;
  font-size: 0.95rem;
  color: #444;
}

.input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  margin-bottom: 12px;
  transition: all 0.3s ease;
  font-family: inherit;
}

.input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
}

.not-found {
  text-align: center;
  margin-top: 100px;
  font-size: 1.2rem;
  color: #c0392b;
}

       `}


            </style>
            <NavBar />
            <div className="container">
                <h2 className="title">{postData.text}</h2>
                <p className="timestamp">
                    {new Date(postData.timestamp).toLocaleString("en-US")}
                </p>
                <div className="content-box">{postData.details}</div>

                <div className="comments-section">
                    <h3 className="comments-title">💬 التعليقات ({comments.length})</h3>

                    <ul>
                        {comments.map((item) => (
                            <li key={item.id} className="comment">
                                <img src={item.avatar} alt="avatar" className="avatar" />
                                <div className="comment-text">
                                    <strong>{item.user}</strong>
                                    <p>{item.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <input
                        className="input"
                        placeholder="💬 أضف تعليقًا"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button className="button" onClick={handleAddComment}>
                        ➕ إضافة تعليق
                    </button>
                </div>
            </div>
        </>
    );
};

export default PostDetails;
