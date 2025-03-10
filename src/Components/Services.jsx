import React from "react";
import NavBar from "./NavBar"
import Footer from "./Footer"
import { AppBar, Toolbar, Typography, Card, CardContent, Grid, Container } from "@mui/material";

const restaurants = [
  { name: "Mature", cuisine: "Sandwiches, Seafood, D..." },
  { name: "Koolant Beit Goha", cuisine: "Koolany" },
  { name: "THE BURGER GUY", cuisine: "Sandwiches, Burgers, F..." },
  { name: "Fetter Begal", cuisine: "Pizza, Pasta, Crepes, Sa..." },
  { name: "Roasters Coffee Bay", cuisine: "International, Beverage..." },
  { name: "SHELLES", cuisine: "Sabis" },
  { name: "Shelley's", cuisine: "Burgers, Fast Food, San..." },
  { name: "Bahareer Aziz", cuisine: "Sandwiches, Deserts, E..." },
  { name: "AL SALEM", cuisine: "Grills, Crepes, Sandwic..." },
  { name: "El Khodary", cuisine: "Grocery, Fruits & Vege..." },
];

const Services = () => {
  return (
    <>
    <NavBar/>

    <Container>
   
      {/* Restaurant List */}
      <Grid container spacing={3} sx={{ marginTop: 3 }}>
        {restaurants.map((restaurant, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {restaurant.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {restaurant.cuisine}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
     <Footer/>
     </>
  );
};

export default Services;
