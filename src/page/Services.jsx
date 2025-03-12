import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Card, CardContent, CardMedia, Grid, Container, Typography } from "@mui/material";

const المطاعم = [
  { الاسم: "ماتور", المطبخ: "ساندويتشات، مأكولات بحرية...", الصورة: "https://img.freepik.com/free-psd/spicy-delicious-pizza-social-media-post-template_47987-16425.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid" },
  { الاسم: "كولانت بيت جوها", المطبخ: "كولاني", الصورة: "https://img.freepik.com/free-psd/spicy-delicious-pizza-social-media-post-template_47987-16425.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid" },
  { الاسم: "ذا برجر جاي", المطبخ: "ساندويتشات، برجر، طعام سريع...", الصورة: "https://img.freepik.com/free-psd/delicious-food-menu-social-media-template_505751-3044.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid" },
  { الاسم: "فيتر بيجل", المطبخ: "بيتزا، باستا، كريب...", الصورة: "https://img.freepik.com/free-psd/spicy-delicious-pizza-social-media-post-template_47987-16425.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid" },
  { الاسم: "روسترز كوفي باي", المطبخ: "مشروبات، قهوة...", الصورة: "https://img.freepik.com/free-psd/spicy-delicious-pizza-social-media-post-template_47987-16425.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid" },
  { الاسم: "شيلز", المطبخ: "سبايس", الصورة: "https://img.freepik.com/free-psd/spicy-delicious-pizza-social-media-post-template_47987-16425.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid" },
  { الاسم: "شيلليز", المطبخ: "برجر، طعام سريع، ساندويتشات...", الصورة: "https://img.freepik.com/free-psd/delicious-food-menu-social-media-template_505751-3044.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid" },
  { الاسم: "بحارير عزيز", المطبخ: "ساندويتشات، حلويات...", الصورة: "https://img.freepik.com/free-psd/delicious-food-menu-social-media-template_505751-3044.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid" },
  { الاسم: "السالم", المطبخ: "مشويات، كريب، ساندويتشات...", الصورة: "https://img.freepik.com/free-psd/delicious-food-menu-social-media-template_505751-3044.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid" },
  { الاسم: "الخضري", المطبخ: "بقالة، فواكه وخضروات...", الصورة: "https://img.freepik.com/free-psd/delicious-food-menu-social-media-template_505751-3044.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid" },
];

const Services = () => {
  return (
    <>
      <NavBar />
      <Container>
        {/* قائمة المطاعم */}
        <Grid container spacing={3} sx={{ marginTop: 3 }}>
          {المطاعم.map((مطعم, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardMedia component="img" height="140" image={مطعم.الصورة} alt={مطعم.الاسم} />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {مطعم.الاسم}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {مطعم.المطبخ}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Services;
