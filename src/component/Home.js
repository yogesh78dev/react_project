import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import bannerImage from './img/banner.png';

const Home = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Box
        component="img"
        src={bannerImage}
        alt="Banner"
        sx={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          zIndex: 0,
          left:"0%"
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          position: "relative",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" gutterBottom>
            Welcome to My Portfolio
          </Typography>
          <Typography variant="h5" gutterBottom>
            Discover my projects and skills.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: "2rem" }}
            component={motion.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get Started
          </Button>
        </motion.div>
      </Container>
    </div>
  );
};

export default Home;
