import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Dine with Us</Typography>
        <p>
        "Dine with Us" welcomes you to a culinary journey like no other, where every dish tells a story and every bite whispers a melody of flavors. Nestled in the heart of a bustling city, our restaurant stands as a beacon of hospitality and gastronomic delight.

Step through our doors and enter a world where passion meets plate, where the ambiance is as warm as the company you keep, and where every moment is crafted to leave an indelible mark on your senses.

In the kitchen, our team of master chefs weaves magic with fresh, locally-sourced ingredients, transforming them into culinary masterpieces that tantalize the taste buds and ignite the imagination. From classic favorites to innovative creations, each dish is a testament to our commitment to excellence and our unwavering dedication to culinary craftsmanship.

But Dine with Us is more than just a restaurant; it's a haven for food enthusiasts, a gathering place for friends and family, and a sanctuary for those seeking an unforgettable dining experience. Whether you're celebrating a special occasion, sharing a meal with loved ones, or simply indulging in a moment of culinary bliss, our doors are always open, ready to welcome you with open arms and a sumptuous spread.

Come, join us at Dine with Us, where every meal is a celebration, every dish is a masterpiece, and every guest is treated like family. Experience the magic of exquisite dining in an ambiance that feels like home, and let us take you on a journey of flavors that will linger in your memory long after the last bite is savored.
        </p>
      
     
      </Box>
    </Layout>
  );
};

export default About;
