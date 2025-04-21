import React, { useState, useEffect } from "react";
import {
  Card, CardContent, Typography, Avatar, Box, Button, Dialog,
  DialogTitle, DialogContent, DialogActions, TextField, Container, Grid
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
import "./Community.css";

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
      image: user.image,
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
      <div className="community-page-container" dir="rtl">
        <Container>
          <div className="community-header">
            <h1>مجتمع <span className="highlight">وسيط</span></h1>
            <p>تواصل مع أعضاء المجتمع وشارك أفكارك واستفساراتك</p>
          </div>
          
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={8}>
              {posts.map((post) => (
                <Card key={post.id} className="post-card">
                  <CardContent>
                    <div className="post-header">
                      <Avatar src={post.image} className="post-avatar" />
                      <Box>
                        <Typography className="post-author">{post.user}</Typography>
                        <Typography className="post-time">
                          {new Date(post.timestamp).toLocaleString("ar-EG")}
                        </Typography>
                      </Box>
                    </div>

                    <Typography className="post-content">{post.text}</Typography>

                    <div className="post-actions">
                      <Button
                        className={`action-button ${post.isLiked ? 'liked' : ''}`}
                        startIcon={<ThumbUpAltIcon className="action-icon" />}
                        onClick={() => handleLike(post.id, post.likeCount, post.isLiked)}
                      >
                        أعجبني ({post.likeCount})
                      </Button>

                      <Button
                        className="action-button"
                        startIcon={<ChatBubbleOutlineIcon className="action-icon" />}
                        onClick={() => navigate(`/post/${post.id}`, { state: { post } })}
                      >
                        تعليق
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </Grid>
          
          <Button
            className="add-post-button"
            onClick={handleOpen}
          >
            <AddIcon />
          </Button>
          
          <Dialog 
            open={open} 
            onClose={handleClose} 
            fullWidth
            classes={{ paper: 'post-dialog' }}
          >
            <DialogTitle className="dialog-title">
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                إنشاء منشور جديد
                <Button onClick={handleClose} sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  <CloseIcon />
                </Button>
              </Box>
            </DialogTitle>
            <DialogContent className="dialog-content">
              <TextField
                autoFocus
                margin="dense"
                label="ماذا يدور في بالك؟"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
                className="post-text-field"
              />
            </DialogContent>
            <DialogActions className="dialog-actions">
              <Button onClick={handleClose} className="cancel-button">
                إلغاء
              </Button>
              <Button onClick={handleAddPost} className="post-button">
                نشر
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Community;
