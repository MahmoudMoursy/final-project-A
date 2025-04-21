import React from "react";
import { Container, Grid, Typography, Box, Paper, Avatar, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";


const ZilliqaStory = () => {
  return (
    <Container
      maxWidth="xl"
      style={{
        textAlign: "center",
        marginTop: "50px",
        padding: 0,
        direction: "rtl",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
        sx={{
          animation: "fadeInDown 1s ease-out",
          backgroundColor: "#091e3d",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "15px",
          fontWeight: "bold",
          display: "inline-block",
        }}
      >
        مرحبًا بكم في{" "}
        <span
          style={{
           
          }}
        >
          وسيط
        </span>
      </Typography>
  
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://zil-dev.cdn.prismic.io/zil-dev/1b51a1cd-3dce-4619-9f38-6f3e6816e83b_banner-zilliqa-story.svg"
          alt="Team Illustration"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            filter: "brightness(70%)",
          }}
        />
  
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            background: "rgba(255, 255, 255, 0.85)",
            padding: { xs: "20px", md: "40px" },
            borderRadius: "16px",
            width: { xs: "90%", md: "60%" },
            textAlign: "right",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            animation: "fadeInUp 1.5s ease",
            transition: "transform 0.4s",
            fontWeight: "bold",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            من نحن؟
          </Typography>
  
          <Typography variant="body1" color="black" paragraph>
            نحن منصه وسيط نسعى إلى تقديم تجربة رقمية متكاملة تدعم المغتربين في كل تفاصيل حياتهم بأسوان. نؤمن بأهمية توفير حلول تقنية تُسهم في تسهيل الحياة اليومية وتعزيز الترابط المجتمعي بين الأفراد في الغربة.
          </Typography>
  
          <Typography variant="body1" color="black" paragraph>
            نقدم خدمات متنوعة تشمل السكن، معرفه الاماكن السياحيه، والدعم الاجتماعي. كما نحرص على توفير معلومات محدثة وموثوقة تساعد المغتربين على اتخاذ قراراتهم بثقة، سواء في مجالات العمل، التعليم، أو حتى الأنشطة الاجتماعية.
          </Typography>
  
          <Typography variant="body1" color="black" paragraph>
            رؤيتنا هي بناء مجتمع رقمي تفاعلي يُشعر كل مغترب بأنه في وطنه، ويمنحه الأدوات اللازمة للاندماج والنجاح في بيئته الجديدة. نحن هنا لنرافقك في رحلتك، ونسهّل عليك الوصول إلى كل ما تحتاجه، بخطوات بسيطة وتجربة استخدام سلسة.
          </Typography>
        </Box>
      </Box>
  
      <style>
        {`
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
          }
  
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Container>
  );
};  


const VisionMissionSection = () => {
  const theme = useTheme();
  const sections = [
    {
      title: "رؤيتنا",
      content: " نطمح إلى أن نكون الجسر الذي يربط المغترب بالحياة المستقرة، من خلال بناء منصة ذكية تقدم حلولًا حقيقية تلبي احتياجاته اليومية. نحن نؤمن بأن الاستقرار يبدأ من الشعور بالأمان والانتماء، ولهذا نركز على تقديم خدمات تدعم كل جانب من جوانب حياة المغترب، سواء على المستوى المهني، الاجتماعي، أو النفسي هدفنا ليس فقط تيسير الوصول إلى الخدمات، بل أيضًا خلق مجتمع متكامل يشعر فيه المغترب بأنه ليس وحيدًا، بل محاط بدعم حقيقي وشبكة من الموارد التي تمكّنه من بناء مستقبل أفضل.",
      image:
        "https://img.freepik.com/premium-photo/close-up-view-colorful-faluca-traditional-boat-sailing-river-sorrounded-by-vegetation_1048944-11883581.jpg",
      bgColor: "#f8f9fa",
    },
    {
      title: "مهمتنا",
      content: "نعمل على تسهيل حياة المغتربين وتمكينهم من الاندماج في مجتمع أسوان بسلاسة، مع توفير بيئة داعمة تساعدهم على النجاح والتأقلم. نسعى إلى بناء حلول رقمية تُراعي احتياجاتهم الفعلية، وتمنحهم الوصول إلى المعلومات والخدمات بطريقة بسيطة وآمنة.  من خلال منصتنا، نهدف إلى تقليص الفجوة بين المغترب والمجتمع المحلي، وتقديم أدوات ذكية تُسهم في تعزيز التفاعل، بناء العلاقات، وتوفير فرص حقيقية للنمو الشخصي والمهني. مهمتنا تنبع من إيماننا بأن كل مغترب يستحق بداية جديدة وفرصة عادلة للنجاح، ونحن هنا لنكون شركاء حقيقيين في رحلته نحو حياة أكثر استقرارًا وطمأنينة.",
      image:
        "https://img.freepik.com/premium-photo/sailboats-by-entrance-botanical-garden-aswan-egypt_219958-1139.jpg",
      bgColor: "#ffffff",
      reverse: true,
    },
    {
      title: "قيمنا",
      content: "نؤمن بالشفافية، الابتكار، والمصداقية كقيم رئيسية تقود كل قراراتنا وخدماتنا. هذه المبادئ ليست مجرد شعارات، بل هي جزء لا يتجزأ من الطريقة التي نعمل بها ونتفاعل من خلالها مع مجتمعنا. نضع الإنسان في قلب كل ما نقوم به، ونسعى دائمًا لتقديم حلول تُبنى على الثقة والاحترام المتبادل. نؤمن بأن الابتكار هو الطريق نحو التقدم، ولهذا نعمل باستمرار على تطوير منصتنا بما يواكب احتياجات المستخدم المتغيرة. هدفنا هو أن يشعر كل مغترب بأنه مُقدّر، مدعوم، وله صوت مسموع في المنصة التي صُممت خصيصًا من أجله.",
      image:
        "https://img.freepik.com/premium-photo/nile-traditional-african-village-near-aswan-egypt_400112-2293.jpg",
      bgColor: "#f8f9fa",
    },
  ];

  return (
    <Box>
    {sections.map((section, index) => (
      <Box
        key={index}
        sx={{
          backgroundColor: section.bgColor || "#fdfdfd",
          py: { xs: 6, md: 10 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={8}
            direction={section.reverse ? "row-reverse" : "row"}
            alignItems="center"
          >
            {/* الصورة */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: section.reverse ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                    transform: "scale(1)",
                    transition: "all 0.4s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: "0 25px 80px rgba(0,0,0,0.25)",
                    },
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
                      transition: "transform 0.4s ease-in-out",
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
  
            {/* النص */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Box sx={{ textAlign: "right", direction: "rtl" }}>
                  <Typography
                    variant="h3"
                    sx={{
                      mb: 3,
                      fontWeight: 700,
                      color: "#0d1b2a",
                      position: "relative",
                      display: "inline-block",
                      fontSize: { xs: "1.8rem", md: "2.2rem" },
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        bottom: -6,
                        right: 0,
                        width: "70%",
                        height: "4px",
                        background: "linear-gradient(90deg, #0088ff, #00c2cb)",
                        borderRadius: "2px",
                      },
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "1rem", md: "1.15rem" },
                      lineHeight: 2.1,
                      color: "#3c3c3c",
                      mt: 2,
                      backgroundColor: "rgba(255,255,255,0.7)",
                      padding: "16px",
                      borderRadius: "12px",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
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
              color: "common.white", 
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
    <Box sx={{ direction: "ltr" }} style={{  background: "linear-gradient(135deg, #1a1a2e 0%, #1D186263 100%)"}}>
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