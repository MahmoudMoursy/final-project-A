import React from "react";
import { Card, CardContent, Typography, Avatar, Grid, Button, Container, Box } from "@mui/material";
import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer";



const posts = [
  {
    id: 1,
    user: "حمزه",
    email: "john.doe@email.com",
    text: "اريد مكان اقدر اجر فيه عجل؟",
    image: "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid", // استبدلها بصورة المستخدم
    timestamp: new Date(),
  },
  {
    id: 2,
    user: "نجمه",
    email: "jane.smith@email.com",
    text: "عايزه سوبر ماركت يكون فيه كل احتياجاتي مره واحده؟",
    image: "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid",
    timestamp: new Date(),
  },
  {
    id: 3,
    user: "مليكه",
    email: "john.doe@email.com",
    text: "اريد اكل بيتي؟",
    image: "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid",
    timestamp: new Date(),
  },
  {
    id: 4,
    user: "داليدا",
    email: "jane.smith@email.com",
    text: "اريد سكن مواصفات خاصه وسعر كويس؟",
    image: "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid",
    timestamp: new Date(),
  },
  {
    id: 5,
    user: "يقين",
    email: "john.doe@email.com",
    text: "اريد مكان اقدر اذاكر فيه؟",
    image: "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid",
    timestamp: new Date(),
  },
  {
    id: 6,
    user: "ضحي",
    email: "jane.smith@email.com",
    text: "اريد اماكن اقدر اخرج فيها؟",
    image: "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid",
    timestamp: new Date(),
  },
  {
    id: 7,
    user: "إيليا",
    email: "john.doe@email.com",
    text: "اريداماكن للسباحه؟",
    image: "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid",
    timestamp: new Date(),
  },
  {
    id: 8,
    user: "سيليا",
    email: "jane.smith@email.com",
    text: "اريد جيم يكون فيه مدربين محترفين؟",
    image: "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid",
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
  return (
    <>
     <NavBar/>
  <Container maxWidth="xl" style={{ marginTop: "50px", padding: "20px", direction: "rtl" }}>
       <Typography variant="h3" fontWeight="bold" gutterBottom>
        مجتمع <span style={{ backgroundColor: "#5C7285", padding: "10px 10px 10px 10px", color: "#000", borderRadius: "5px" }}>وسيط </span>
            </Typography>

      {posts.map((post) => (
        <Card key={post.id} sx={{ mb: 2, borderRadius: 3, boxShadow: 3, p: 3 }}>
          <CardContent>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <Avatar src={post.image} sx={{ width: 70, height: 70 }} />
              </Grid>
              <Grid item xs>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>{post.user}</Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>{post.email}</Typography>
              </Grid>
              <Grid item>
                
              </Grid>
            </Grid>

            <Box sx={{ mt: 2, p: 2, bgcolor: "#f9f9f9", borderRadius: 2 }}>
              <Typography variant="body1">{post.text}</Typography>
            </Box>
            <Typography variant="caption" sx={{ color: "gray" }}>
                  {formatDate(post.timestamp)}
                </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
     <Footer/>
      </>
  );
};

export default Community;