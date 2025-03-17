import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const posts = [
  { id: 1, user: "حمزه", email: "john.doe@email.com", text: "اريد مكان اقدر اجر فيه عجل؟", image: "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg", timestamp: new Date() },
  { id: 2, user: "نجمه", email: "jane.smith@email.com", text: "عايزه سوبر ماركت يكون فيه كل احتياجاتي مره واحده؟", image: "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg", timestamp: new Date() },
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

  return (
    <>
      <NavBar />
      <Box sx={{ marginTop: "30px", padding: "20px", direction: "rtl", width: "100vw" }}>
        {/* عنوان الصفحة */}
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ textAlign: "rtl" }}>
          مجتمع <span style={{
            backgroundColor: "#091e3d",
            padding: "8px 15px",
            color: "#fff",
            borderRadius: "110px 4000px ",
            fontWeight: "bold",
            display: "inline-block"
          }}>وسيط</span>
        </Typography>


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
              width: "98%", 
              height: "80px", 
              display: "flex",
              alignItems: "center",
              "&:hover": {
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // تأثير هوفر خفيف
              },
            }}
            onClick={() => navigate(`/post/${post.id}`, { state: { post } })}
          >
            <CardContent sx={{ display: "flex", alignItems: "center", width: "100%", p: 1 }}>
              <Avatar src={post.image} sx={{ width: 40, height: 40, ml: 2 }} />
              <Box sx={{ flex: 1, overflow: "hidden" }}>
                <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "14px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {post.user}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray", fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {post.text}
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ color: "gray", fontSize: "11px", ml: 2 }}>
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