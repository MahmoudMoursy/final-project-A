import React, { useState, useEffect } from "react";
import {
  Card, CardContent, Typography, Avatar, Box, Button, Dialog,
  DialogTitle, DialogContent, DialogActions, TextField
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import db from "../firebaseconfig";
import { addDoc, collection, getDocs, Timestamp } from "firebase/firestore";

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
      const fetchedPosts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate() || new Date() 
      }));
      setPosts(fetchedPosts.reverse());   
    };

    fetchPosts();
  }, []);

  const handleAddPost = async () => {
    if (newPostText.trim() === "") return;

    const newPost = {
      user: "مستخدم جديد",
      text: newPostText,
      image: "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg",
      timestamp: Timestamp.now()
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
      <Box sx={{ marginTop: "30px", padding: "20px", direction: "rtl", width: "100vw" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ textAlign: "rtl", marginRight: 3 }}>
          مجتمع{" "}
          <span style={{
            backgroundColor: "#091e3d",
            padding: "8px 15px",
            color: "#fff",
            borderRadius: "110px 4000px",
            fontWeight: "bold",
            display: "inline-block",
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
            position: "absolute",
            top: "110px",
            left: "20px",
            fontSize: "14px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "5px",
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
            <Button onClick={handleClose} style={{ color: "red" }}>إلغاء</Button>
            <Button onClick={handleAddPost} color="primary" variant="contained">نشر</Button>
          </DialogActions>
        </Dialog>

        {posts.map((post) => (
          <Card
            key={post.id}
            sx={{
              mb: 2, borderRadius: 2, boxShadow: 1, margin: 2, cursor: "pointer",
              transition: "box-shadow 0.2s ease", width: "100%",
              "&:hover": { boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" },
            }}
          >
            <CardContent sx={{ display: "flex", flexDirection: "column", width: "100%", p: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                <Avatar src={post.image} sx={{ width: 60, height: 60 }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "20px" }}>
                    {post.user}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "gray", fontSize: "13px" }}>
                    {post.timestamp ? new Date(post.timestamp).toLocaleString("ar-EG") : "توقيت غير متاح"}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" sx={{ color: "gray", fontSize: "18px", mb: 2 }}>
                  {post.text}
                </Typography>
                <hr />
                <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                  <Button variant="text" startIcon={<i className="fa-regular fa-thumbs-up fs-3 mx-2"></i>}>
                    أعجبني
                  </Button>
                  <Button
                    variant="text"
                    startIcon={<i className="fa-regular fa-comment fs-3 mx-2"></i>}
                    onClick={() => navigate(`/post/${post.id}`, { state: { post } })}
                  >
                    تعليق
                  </Button>
                </Box>
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
