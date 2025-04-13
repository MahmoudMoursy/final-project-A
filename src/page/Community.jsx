import React, { useState, useEffect } from "react";
import {
  Card, CardContent, Typography, Avatar, Box, Button, Dialog,
  DialogTitle, DialogContent, DialogActions, TextField
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import db from "../firebaseconfig";
import { addDoc, collection, getDocs, doc, updateDoc, Timestamp } from "firebase/firestore";

const Community = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [newPostText, setNewPostText] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNewPostText("");
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "post"));
      const fetchedPosts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate() || new Date(),
        likeCount: doc.data().likeCount || 0,
        isLiked: false
      }));
      setPosts(fetchedPosts.reverse());
    };

    fetchPosts();
  }, []);

  const handleLike = async (postId, currentLikes, isLiked) => {
    try {
      const postRef = doc(db, "post", postId);
      const newLikeCount = isLiked ? currentLikes - 1 : currentLikes + 1;

      await updateDoc(postRef, { likeCount: newLikeCount });

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId ? { ...post, likeCount: newLikeCount, isLiked: !isLiked } : post
        )
      );
    } catch (error) {
      console.error("خطأ في تحديث الإعجابات:", error);
    }
  };

  const handleAddPost = async () => {
    if (newPostText.trim() === "") return;

    const newPost = {
      user: "مستخدم جديد",
      text: newPostText,
      image: "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg",
      timestamp: Timestamp.now(),
      likeCount: 0, 
      isLiked: false,
    };

    try {
      const docRef = await addDoc(collection(db, "post"), newPost);
      setPosts([{ id: docRef.id, ...newPost, timestamp: new Date() }, ...posts]);
      handleClose();
    } catch (error) {
      console.error("خطأ في إضافة المنشور:", error);
    }
  };

  return (
    <>
      <NavBar />
      <Box sx={{ marginTop: "80px", paddingTop: "20px", padding: "20px", direction: "rtl", width: "100vw" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ textAlign: "rtl", marginRight: 3 }}>
          مجتمع <span style={{
            backgroundColor: "#091e3d", padding: "8px 15px",
            color: "#fff", borderRadius: "110px 4000px",
            fontWeight: "bold", display: "inline-block"
          }}>
            وسيط
          </span>
        </Typography>

        <Button
          variant="contained"
          color="success"
          onClick={handleOpen}
          sx={{
            backgroundColor: "#091e3d",
            fontSize: "14px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            padding: "10px 20px",
            marginBottom  : "20px",
            marginRight: 3,
          }}
        >
          <AddIcon /> موضوع جديد
        </Button>

        <Dialog open={open} onClose={handleClose} fullWidth>
          <DialogTitle>إنشاء منشور</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="ماذا يدور في بالك؟"
              fullWidth
              multiline
              rows={3}
              variant="outlined"
              value={newPostText}
              onChange={(e) => setNewPostText(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} sx={{ color: "red" }}>إلغاء</Button>
            <Button onClick={handleAddPost} color="primary" variant="contained">نشر</Button>
          </DialogActions>
        </Dialog>

        {posts.map((post) => (
          <Card key={post.id} sx={{ mb: 2, borderRadius: 2, boxShadow: 1, margin: 2 }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", p: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                <Avatar src={post.image} sx={{ width: 60, height: 60 }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>{post.user}</Typography>
                  <Typography variant="caption" sx={{ color: "gray" }}>
                    {post.timestamp ? new Date(post.timestamp).toLocaleString("ar-EG") : "توقيت غير متاح"}
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>{post.text}</Typography>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<ThumbUpAltIcon />}
                  sx={{ backgroundColor: post.isLiked ? "#0E55C0FF" : "white", color: post.isLiked ? "white" : "black" }}
                  onClick={() => handleLike(post.id, post.likeCount, post.isLiked)}
                >
                  أعجبني ({post.likeCount})
                </Button>

                <Button variant="outlined" onClick={() => navigate(`/post/${post.id}`, { state: { post } })}>
                  تعليق
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Footer />
    </>
  );
};

export default Community;