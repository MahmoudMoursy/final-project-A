import React from "react";
import { Container, Grid, Typography, Box, Paper, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
const moveAnimation = keyframes`
  0% { transform: translate(-50%, -50%) translateX(0px); }
  50% { transform: translate(-50%, -50%) translateX(50px); }
  100% { transform: translate(-50%, -50%) translateX(0px); }
`;

const ZilliqaStory = () => {
  return (
    <Container maxWidth="xl" style={{ textAlign: "center", marginTop: "50px", position: "relative", padding: 0, direction: "rtl" }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        مرحبًا بكم في <span style={{
            backgroundColor: "#091e3d",
            padding: "8px 15px",
            color: "#fff",
            borderRadius: "1200px 7000px ",
            fontWeight: "bold",
            display: "inline-block"
          }}>في وسيط </span>
      </Typography>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center-end",
          overflow: "hidden",
        }}
      >
        <img
          src="https://zil-dev.cdn.prismic.io/zil-dev/1b51a1cd-3dce-4619-9f38-6f3e6816e83b_banner-zilliqa-story.svg"
          alt="Team Illustration"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: "6%",
            left: "5%",
            zIndex: 2,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",

          }}
        >
          <Typography variant="h3" fontWeight="bold" style={{ padding: 0, direction: "rtl" }} gutterBottom>
            من نحن؟
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            نحن فريق متخصص في تطوير الواجهات الأمامية (Front_end Track) باستخدام أحدث التقنيات والممارسات الحديثة.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            نعمل على تقديم حلول مبتكرة لتسهيل حياة المغتربين عبر منصتنا المتكاملة.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            والتي تهدف إلى توفير خدمات متنوعة تشمل السكن، التوظيف، الدعم القانوني، والخدمات الاجتماعية، لضمان تجربة سلسة وآمنة في بلدنا "أسوان".
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            نحن في نهدف إلى تقديم حلول مبتكرة في أسوان من خلال التكنولوجيا المتقدمة من وسيط.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

const ScalingFaster = () => {
  return (
    <Paper elevation={3} style={{ padding: "50px", margin: "20px 40px 100px 40px", direction: "rtl" }}>
      <Grid container spacing={3} alignItems="center">
        {/* الصورة على اليمين */}
        <Grid item xs={12} md={6}>
          <img 
            src="https://img.freepik.com/premium-photo/close-up-view-colorful-faluca-traditional-boat-sailing-river-sorrounded-by-vegetation_1048944-11883581.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_authors_boost" 
            alt="رؤيتنا" 
            style={{ width: "100%", borderRadius: "10px" }} 
          />
        </Grid>
        {/* النص على اليسار */}
        <Grid item xs={12} md={6} textAlign="center">
          <Typography variant="h4" gutterBottom>
            رؤيتنا
          </Typography>
          <Typography variant="body1">
            نحن منصة متكاملة تهدف إلى تسهيل حياة المغتربين من خلال تقديم خدمات متنوعة تلبي احتياجاتهم اليومية، سواء في السكن، التوظيف، الخدمات القانونية، أو الدعم الاجتماعي.
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

const HowItBegan = () => {
  return (
    <Paper elevation={3} style={{ padding: "50px", margin: "30px 40px", direction: "rtl" }}>
      <Grid container spacing={3} alignItems="center">
        {/* النص على اليمين */}
        <Grid item xs={12} md={6} textAlign="center">
          <Typography variant="h4" gutterBottom>
            مهمتنا
          </Typography>
          <Typography variant="h6">
            نعمل على بناء مجتمع داعم للمغتربين عبر تقديم حلول مبتكرة تجعل انتقالهم واستقرارهم في بلد جديد تجربة سلسة وآمنة.
          </Typography>
        </Grid>
        {/* الصورة على اليسار */}
        <Grid item xs={12} md={6}>
          <img 
            src="https://img.freepik.com/premium-photo/sailboats-by-entrance-botanical-garden-aswan-egypt_219958-1139.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_authors_boost" 
            alt="مهمتنا" 
            style={{ width: "100%", borderRadius: "10px" }} 
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

const HowItBega = () => {
  return (
    <Paper elevation={3} style={{ padding: "50px", margin: "30px 40px", direction: "rtl" }}>
      <Grid container spacing={3} alignItems="center">
        {/* الصورة على اليمين */}
        <Grid item xs={12} md={6}>
          <img 
            src="https://img.freepik.com/premium-photo/nile-traditional-african-village-near-aswan-egypt_400112-2293.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_authors_boost" 
            alt="قيمنا" 
            style={{ width: "100%", borderRadius: "10px" }} 
          />
        </Grid>
        {/* النص على اليسار */}
        <Grid item xs={12} md={6} textAlign="center">
          <Typography variant="h4" gutterBottom>
            قيمنا
          </Typography>
          <Typography variant="h6">
            الشفافية، المصداقية، والابتكار هي الركائز الأساسية التي نرتكز عليها لضمان تقديم أفضل الخدمات لعملائنا.
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

const TeamSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Paper elevation={3} style={{ padding: '50px', margin: '30px 40px 40px 40px', direction: "rtl", textAlign: "center" }}>
        <Typography variant="h4" style={{ width: "80px", backgroundColor: "#5C7285", padding: "10px", textAlign: "center", color: "#000", borderRadius: "5px" }} gutterBottom>
          فريقنا
        </Typography>
        <Box display="flex" justifyContent="space-around" flexWrap="wrap">
          <Box textAlign="center" m={2}>
            <Avatar alt="Team Member 1" src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid" sx={{ width: 100, height: 100 }} />
            <Typography variant="h6">مريم أسامه</Typography>
            <Typography variant="body2">مطوره واجهات أمامية</Typography>
          </Box>
          <Box textAlign="center" m={2}>
            <Avatar alt="Team Member 2" src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid" sx={{ width: 100, height: 100 }} />
            <Typography variant="h6">ساره عادل</Typography>
            <Typography variant="body2">مطوره واجهات أمامية</Typography>
          </Box>
          <Box textAlign="center" m={2}>
            <Avatar alt="Team Member 3" src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid" sx={{ width: 100, height: 100 }} />
            <Typography variant="h6">ساره حمدي</Typography>
            <Typography variant="body2">مطوره واجهات أمامية</Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-around" flexWrap="wrap">
          <Box textAlign="center" m={2}>
            <Avatar alt="Team Member 3" src="https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid" sx={{ width: 100, height: 100 }} />
            <Typography variant="h6">محمود مرسي
            </Typography>
            <Typography variant="body2">مطور واجهات أمامية</Typography>
          </Box>
          <Box textAlign="center" m={2}>
            <Avatar alt="Team Member 3" src="https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid" sx={{ width: 100, height: 100 }} />
            <Typography variant="h6">عبدالله احمد</Typography>
            <Typography variant="body2">مطور واجهات أمامية</Typography>
          </Box>
          <Box textAlign="center" m={2}>
            <Avatar alt="Team Member 3" src="https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid" sx={{ width: 100, height: 100 }} />
            <Typography variant="h6">مصطفي جابر</Typography>
            <Typography variant="body2">مطور واجهات أمامية</Typography>
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

const AboutUs = () => {
  return (
    <div style={{ direction: "ltr" }}>
      <NavBar />
      <Container maxWidth={false} style={{ padding: 0 }}>
        <ZilliqaStory />
        <ScalingFaster />
        <HowItBegan />
        <HowItBega />
        <TeamSection />
        <Footer />
      </Container>
    </div>
  );
};

export default AboutUs;