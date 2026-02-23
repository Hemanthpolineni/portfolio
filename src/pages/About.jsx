import {
  Container,
  Grid,
  Typography,
  Box,
  Avatar,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

function AboutPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} justifyContent={"space-between"}>

         
          <Grid item xs={12}>
            <Grid container spacing={6} alignItems="center">

              
              <motion.div
              initial={{ x: -100, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Grid
                 size={{ xs: 12, md: 5 }}>
                <Avatar
                  src="/about.png"
                  alt="Hemanth"
                  sx={{
                    width: { xs: 260, md: 320 },
                    height: { xs: 260, md: 320 },
                    border: "4px solid #00bcd4",
                    transition: "0.4s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow:
                        "0 0 40px rgba(0,188,212,0.6)",
                    },
                  }}
                />
              </Grid>
              </motion.div>
              
             
               <Grid size={{ xs: 12, md: 7 }}>
                 <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              >
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color="white"
                  sx={{
                    mb: 3,
                    transition: "0.4s",
                    "&:hover": { color: "#00bcd4" },
                  }}
                >
                  About Me
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#cbd5e1",
                    lineHeight: 1.8,
                  }}
                >
                  I’m a passionate Full Stack Developer focused on building
                  scalable backend systems and modern frontend applications.
                  I enjoy creating smooth UI experiences with clean,
                  maintainable architecture.
                </Typography>
              
              </motion.div>
            </Grid>
            </Grid>
          </Grid>

         
         <Grid size={{ xs: 12 }}>
 
    <MotionBox
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}                  
    sx={{
      mt: 10,
      position: "relative",
      maxWidth: "900px",
      mx: "auto",
      "&::before": {
        content: '""',
        position: "absolute",
        left: 24,
        top: 0,
        bottom: 0,
        width: "3px",
        background: "linear-gradient(to bottom, #00bcd4, #673ab7)",
        borderRadius: "10px",
      },
    }}
    
  >
    
    <Typography
      variant="h4"
      color="white"
      fontWeight="bold"
      sx={{ mb: 6, pl: 8,
        transition: "0.4s",
                    "&:hover": { color: "#00bcd4" },
       }}
    >
      Education
    </Typography>

   
    <Box sx={{ position: "relative", pl: 8, mb: 6 }}>

     
      <Box
        sx={{
          position: "absolute",
          left: 18,
          top: 6,
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: "#00bcd4",
          boxShadow: "0 0 15px #00bcd4",
        }}
      />

      <Paper
        sx={{
          p: 3,
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(12px)",
          color: "white",
          borderRadius: 3,
          border: "1px solid rgba(255,255,255,0.08)",
          transition: "all 0.4s ease",
          "&:hover": {
            transform: "translateX(12px)",
            boxShadow: "0 0 25px rgba(0,188,212,0.6)",
          },
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          B.Tech – Computer Science
        </Typography>

        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Koneru Lakshmiah University, Vijayawada
        </Typography>

        <Typography variant="body2" sx={{ mt: 1, color: "#00bcd4" }}>
          2021 – 2025 | CGPA: 9.1
        </Typography>
      </Paper>
    </Box>

   
    <Box sx={{ position: "relative", pl: 8, mb: 6 }}>

      <Box
        sx={{
          position: "absolute",
          left: 18,
          top: 6,
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: "#673ab7",
          boxShadow: "0 0 15px #673ab7",
        }}
      />

      <Paper
        sx={{
          p: 3,
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(12px)",
          color: "white",
          borderRadius: 3,
          border: "1px solid rgba(255,255,255,0.08)",
          transition: "all 0.4s ease",
          "&:hover": {
            transform: "translateX(12px)",
            boxShadow: "0 0 25px rgba(103,58,183,0.6)",
          },
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Intermediate - MPC
        </Typography>

        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          BIIT Junior College, Guntur
        </Typography>

        <Typography variant="body2" sx={{ mt: 1, color: "#00bcd4" }}>
          2019 – 2021 | Marks: 920
        </Typography>
      </Paper>
    </Box>

    
    <Box sx={{ position: "relative", pl: 8 }}>

      <Box
        sx={{
          position: "absolute",
          left: 18,
          top: 6,
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: "#00bcd4",
          boxShadow: "0 0 15px #00bcd4",
        }}
      />

      <Paper
        sx={{
          p: 3,
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(12px)",
          color: "white",
          borderRadius: 3,
          border: "1px solid rgba(255,255,255,0.08)",
          transition: "all 0.4s ease",
          "&:hover": {
            transform: "translateX(12px)",
            boxShadow: "0 0 25px rgba(0,188,212,0.6)",
          },
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          SSC
        </Typography>

        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Bhashyam High School, Guntur
        </Typography>

        <Typography variant="body2" sx={{ mt: 1, color: "#00bcd4" }}>
          2019 | CGPA: 9.7
        </Typography>
      </Paper>
    </Box>

  </MotionBox>
</Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutPage;