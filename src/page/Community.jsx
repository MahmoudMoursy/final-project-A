import React, { useState, useEffect } from "react";
import {
  Card, CardContent, Typography, Avatar, Box, Button, Dialog,
  DialogTitle, DialogContent, DialogActions, TextField
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import db from "../firebaseconfig";
import { addDoc, collection, getDocs, doc, updateDoc, Timestamp } from "firebase/firestore";
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../Redux/CurrentUser';

const Community = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
      const dispatch = useDispatch();
      dispatch(setCurrentUser(user));
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
      user: user.username,
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
      <Box sx={{ marginTop: "80px", padding: "20px", direction: "rtl", width: "100%", backgroundColor: "#f0f2f5" }}>
        <Box
  sx={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
    marginRight: 3,
    flexWrap: 'wrap', // Optional: makes it responsive
  }}
>
  <Typography
    variant="h4"
    fontWeight="bold"
    sx={{ textAlign: "right" }}
  >
    مجتمع{" "}
    <span style={{
      backgroundColor: "#091e3d",
      padding: "8px 15px",
      color: "#fff",
      borderRadius: "110px 4000px",
      fontWeight: "bold",
      display: "inline-block"
    }}>
      وسيط
    </span>
  </Typography>

  <Button
    variant="contained"
    onClick={handleOpen}
    sx={{
      backgroundColor: "#0A3265FF",
      fontSize: "14px",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      gap: "5px",
      padding: "10px 20px",
      borderRadius: "25px",
      mt: { xs: 2, sm: 0 }, // Add margin-top on small screens
    }}
  >
    <AddIcon /> موضوع جديد
  </Button>
</Box>

        <Dialog open={open} onClose={handleClose} fullWidth>
          <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            إنشاء منشور
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </DialogTitle>
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
            <Button onClick={handleAddPost} variant="contained" sx={{ backgroundColor: "#1877f2" }}>
              نشر
            </Button>
          </DialogActions>
        </Dialog>

        {posts.map((post) => (
          <Card
            key={post.id}
            sx={{
              mb: 3,
              mx: "auto",
              maxWidth: 900,
              borderRadius: 4,
              boxShadow: 3,
              backgroundColor: "#fff",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar src={post.image} sx={{ width: 56, height: 56, mr: 2 }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">{post.user}</Typography>
                  <Typography variant="caption" sx={{ color: "gray" }}>
                    {new Date(post.timestamp).toLocaleString("ar-EG")}
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body1" sx={{ mb: 2 }}>{post.text}</Typography>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<ThumbUpAltIcon />}
                  sx={{
                    backgroundColor: post.isLiked ? "#1877f2" : "#e4e6eb",
                    color: post.isLiked ? "#fff" : "#050505",
                    borderRadius: "20px",
                    textTransform: "none",
                    flexGrow: 1,
                    gap: "8px",
                  }}
                  onClick={() => handleLike(post.id, post.likeCount, post.isLiked)}
                >
                  أعجبني ({post.likeCount})
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<ChatBubbleOutlineIcon />}
                  sx={{
                    borderColor: "#ccc",
                    borderRadius: "20px",
                    textTransform: "none",
                    flexGrow: 1,
                    gap: "8px",

                  }}
                  onClick={() => navigate(`/post/${post.id}`, { state: { post } })}
                >
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
