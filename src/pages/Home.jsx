import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Avatar,
  IconButton,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Home() {
   const links = [
                      "https://www.linkedin.com/in/hemanth-polineni",
                      "https://github.com/hemanthpolineni",
                      "https://www.instagram.com/_hxmnt_?igsh=OGsxbGV0ZWhuczlp",
                      "https://x.com/CeededPuli",
];
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
       
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* LEFT SECTION */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Hello, it's me
              </Typography>

              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Hemanth Polineni
              </Typography>

              <Typography variant="h5" sx={{ mb: 3 }}>
                I'm a{" "}
                <Box
                  component="span"
                  sx={{ color: "#00bcd4", fontWeight: "bold" }}
                >
                  Full Stack Developer
                </Box>
              </Typography>

              <Typography variant="body1" sx={{ maxWidth: 500, mb: 3 }}>
                I love building scalable and user-friendly web applications
                with modern technologies.
              </Typography>
            </motion.div>

            {/* SOCIAL ICONS */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Box sx={{ mb: 3 }}>
               
                {[LinkedInIcon, GitHubIcon, InstagramIcon, TwitterIcon].map(
                  (Icon, index) => (
                    <IconButton
                      key={links[index]}
                            component="a"                
                            href={links[index]}          
                            target="_blank"               
                            rel="noopener noreferrer"
                      sx={{
                        color: "#00bcd4",
                        transition: "0.3s",
                        "&:hover": {
                          color: "#00acc1",
                          transform: "scale(1.2)",
                        },
                      }}
                    >
                      <Icon fontSize="large" />
                    </IconButton>
                  )
                )}
              </Box>
            </motion.div>

            {/* BUTTON */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<DownloadIcon />}
                href="/resume.pdf"
                download
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "30px",
                  textTransform: "none",
                  fontWeight: "bold",
                  backgroundColor: "#00bcd4",
                  boxShadow: "0 0 20px rgba(0,188,212,0.6)",
                }}
              >
                Resume
              </Button>
            </motion.div>
          </Grid>

          {/* RIGHT SECTION - AVATAR */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <motion.div
              initial={{ x: 100, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Avatar
                src="/abt2.png"
                alt="Hemanth"
                sx={{
                  width: { xs: 280, md: 380 },
                  height: { xs: 280, md: 380 },
                  border: "6px solid #00bcd4",
                  "&:hover": {
                    boxShadow: `
                      0 0 20px #00bcd4,
                      0 0 40px #00bcd4,
                      0 0 60px #00bcd4
                    `,
                    transform: "scale(1.05)",
                  },
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;