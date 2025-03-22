import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const initialPosts = [
  {
    id: 1,
    user: "حمزه",
    text: "اريد مكان اقدر اجر فيه عجل؟",
    image: "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg",
    timestamp: new Date(),
  },
  {
    id: 2,
    user: "نجمه",
    text: "عايزه سوبر ماركت يكون فيه كل احتياجاتي مره واحده؟",
    image: "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg",
    timestamp: new Date(),
  },
];

const formatDate = (date) => {
  return date.toLocaleString("ar-EG", {
    hour: "2-digit",
    minute: "2-digit",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const Community = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(initialPosts);
  const [open, setOpen] = useState(false);
  const [newPostText, setNewPostText] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNewPostText("");
  };

  const handleAddPost = () => {
    if (newPostText.trim() === "") return;

    const newPost = {
      id: posts.length + 1,
      user: "مستخدم جديد",
      text: newPostText,
      image: "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg",
      timestamp: new Date(),
    };

    setPosts([newPost, ...posts]);
    handleClose();
  };

  return (
    <>
      <NavBar />
      <Box sx={{ marginTop: "30px", padding: "20px", direction: "rtl", width: "100vw" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ textAlign: "rtl", marginRight: 3 }}>
          مجتمع{" "}
          <span
            style={{
              backgroundColor: "#091e3d",
              padding: "8px 15px",
              color: "#fff",
              borderRadius: "110px 4000px",
              fontWeight: "bold",
              display: "inline-block",
            }}
          >
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
            <Button onClick={handleClose} style={{ color: "red" }}>
              إلغاء
            </Button>
            <Button onClick={handleAddPost} color="primary" variant="contained" className="fw-bold">
              نشر
            </Button>
          </DialogActions>
        </Dialog>

        {posts.map((post) => (
          <Card
            key={post.id}
            sx={{
              mb: 2,
              borderRadius: 2,
              boxShadow: 1,
              margin: 2,
              cursor: "pointer",
              transition: "box-shadow 0.2s ease",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              "&:hover": { boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" },
            }}
           
          >
            <CardContent sx={{ display: "flex", alignItems: "center", width: "100%", p: 2 }}>
              <Avatar src={post.image} sx={{ width: 80, height: 70, ml: 1, marginTop: 2 }} />
              <Box sx={{ flex: 1, overflow: "hidden" }}>
                <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "20px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {post.user}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray", fontSize: "18px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {post.text}
                </Typography>
                <hr />
                <Typography className="d-flex gap-4">
                  <p className="fw-bold fs-5"><i className="fa-regular fa-thumbs-up fs-3 mx-2"></i> أعجبني</p>
                  <p className="fw-bold fs-5"  onClick={() => navigate(`/post/${post.id}`, { state: { post } })}><i className="fa-regular fa-comment fs-3 mx-2"></i> تعليق  </p>
                </Typography>

              </Box>
              <Typography variant="caption" sx={{ color: "gray", fontSize: "13px", ml: 2 }}>
                {formatDate(post.timestamp)}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Footer />
    </>
  );
};

export default Community;
