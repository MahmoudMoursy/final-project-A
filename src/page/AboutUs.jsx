import React from "react";
import { Container, Grid, Typography, Box, Paper, Avatar, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";


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


const VisionMissionSection = () => {
  const theme = useTheme();
  const sections = [
    {
      title: "رؤيتنا",
      content:
        "نحن منصة متكاملة تهدف إلى تسهيل حياة المغتربين من خلال تقديم خدمات متنوعة تلبي احتياجاتهم اليومية، سواء في السكن، التوظيف، الخدمات القانونية، أو الدعم الاجتماعي. نؤمن بأن التكنولوجيا يمكنها أن تجعل الحياة أسهل وأكثر كفاءة، ونسعى جاهدين لتقديم أفضل الحلول التي تعزز تجربة المغتربين في أسوان.",
      image:
        "https://img.freepik.com/premium-photo/close-up-view-colorful-faluca-traditional-boat-sailing-river-sorrounded-by-vegetation_1048944-11883581.jpg",
      bgColor: "#f8f9fa",
    },
    {
      title: "مهمتنا",
      content:
        "نعمل على بناء مجتمع داعم للمغتربين عبر تقديم حلول مبتكرة تجعل انتقالهم واستقرارهم في بلد جديد تجربة سلسة وآمنة. نهدف إلى توفير بيئة داعمة تساعد المغتربين على التكيف بسرعة مع الحياة الجديدة، مع تقديم الدعم اللازم في جميع الجوانب الحياتية.",
      image:
        "https://img.freepik.com/premium-photo/sailboats-by-entrance-botanical-garden-aswan-egypt_219958-1139.jpg",
      bgColor: "#ffffff",
      reverse: true,
    },
    {
      title: "قيمنا",
      content:
        "الشفافية، المصداقية، والابتكار هي الركائز الأساسية التي نرتكز عليها لضمان تقديم أفضل الخدمات لعملائنا. نؤمن بأن النزاهة والشفافية هي أساس الثقة بيننا وبين عملائنا، ونحرص على أن تكون جميع خدماتنا مبتكرة ومواكبة لأحدث التطورات التكنولوجية.",
      image:
        "https://img.freepik.com/premium-photo/nile-traditional-african-village-near-aswan-egypt_400112-2293.jpg",
      bgColor: "#f8f9fa",
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      {sections.map((section, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: section.bgColor,
            py: 8,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              spacing={6}
              direction={section.reverse ? "row-reverse" : "row"}
              alignItems="center"
            >
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: section.reverse ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
                      height: "100%",
                    }}
                  >
                    <img
                      src={section.image}
                      alt={section.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        minHeight: "350px",
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ textAlign: "right", direction: "rtl" }}>
                    <Typography
                      variant="h3"
                      sx={{
                        mb: 3,
                        color: theme.palette.primary.dark,
                        fontWeight: "bold",
                        position: "relative",
                        display: "inline-block",
                        "&:after": {
                          content: '""',
                          position: "absolute",
                          bottom: -8,
                          right: 0,
                          width: "60%",
                          height: "4px",
                          backgroundColor: theme.palette.secondary.main,
                          borderRadius: "2px",
                        },
                      }}
                    >
                      {section.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "1.1rem",
                        lineHeight: 2,
                        color: theme.palette.text.secondary,
                      }}
                    >
                      {section.content}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      ))}
    </Box>
  );
};

const TeamSection = () => {
  const theme = useTheme();
  const teamMembers = [
    { name: "مريم أسامه", role: "مطوره واجهات أمامية", image: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg" },
    { name: "ساره عادل", role: "مطوره واجهات أمامية", image: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg" },
    { name: "ساره حمدي", role: "مطوره واجهات أمامية", image: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg" },
    { name: "محمود مرسي", role: "مطور واجهات أمامية", image: "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg" },
    { name: "عبدالله احمد", role: "مطور واجهات أمامية", image: "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg" },
    { name: "مصطفي جابر", role: "مطور واجهات أمامية", image: "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg" },
  ];

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: theme.palette.primary.dark,
        backgroundImage: "linear-gradient(135deg, #091e3d 0%, #1a3a6a 100%)",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 6,
              fontWeight: "bold",
              position: "relative",
              color: "common.white", // أو استخدام الثيم
              "&:after": {
                content: '""',
                position: "absolute",
                bottom: -12,
                left: "50%",
                transform: "translateX(-50%)",
                width: "100px",
                height: "4px",
                backgroundColor: theme.palette.secondary.main,
                borderRadius: "2px",
              },
            }}
          >
            فريقنا
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Paper
                    elevation={6}
                    sx={{
                      p: 3,
                      borderRadius: "12px",
                      textAlign: "center",
                      direction: "rtl",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(8px)",
                      height: "100%",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                      },
                    }}
                  >
                    <Avatar
                      alt={member.name}
                      src={member.image}
                      sx={{
                        width: 120,
                        height: 120,
                        mx: "auto",
                        mb: 3,
                        border: `3px solid ${theme.palette.secondary.main}`,
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        mb: 1,
                        color: "#fff",
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.secondary.light,
                      }}
                    >
                      {member.role}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

const AboutUs = () => {
  return (
    <Box sx={{ direction: "ltr" }}>
      <NavBar />
      <Box sx={{ pt: { xs: "56px", sm: "64px" } }}>
        <ZilliqaStory />
        <VisionMissionSection />
        <TeamSection />
        <Footer />
      </Box>
    </Box>
  );
};

export default AboutUs;