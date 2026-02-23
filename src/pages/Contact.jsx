import React from "react";
import {
Box,
Container,
Grid,
Typography,
TextField,
IconButton,
Stack,
Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
return (
<Box
sx={{
minHeight: "100vh",
display: "flex",
alignItems: "center",
color: "#fff",
py: { xs: 6, md: 10 },
 }}
>
<Container maxWidth="lg">
<Grid
container
spacing={6}
alignItems="center"
justifyContent="center"
>
{/* LEFT SIDE IMAGE */}
<Grid item xs={12} md={6}>
<Box
sx={{
display: "flex",
justifyContent: { xs: "center", md: "flex-start" },
 }}
>
<Box
component="img"
src="/icon.png"
alt="Nethri"
sx={{
width: { xs: "70%", md: "100%" },
maxWidth: 450,
borderRadius: 3,
boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
 }}
/>
</Box>
</Grid>

{/* RIGHT SIDE */}
<Grid item xs={12} md={6} >
<Box sx={{maxWidth:900}}>
<Stack spacing={3}>

<Typography
variant="h5"
sx={{ textAlign: { xs: "center", md: "left" } }}
>
 polinenihemanth02@gmail.com
</Typography>

{/* Social Icons */}
<Stack
direction="row"
spacing={2}
justifyContent={{ xs: "center", md: "flex-start" }}
>
<IconButton
href="https://github.com/hemanthpolineni"
target="_blank"
sx={{ color: "#fff" }}
>
<GitHubIcon />
</IconButton>

<IconButton
href="https://www.linkedin.com/in/hemanth-polineni"
target="_blank"
sx={{ color: "#fff" }}
>
<LinkedInIcon />
</IconButton>

<IconButton
href="mailto:polinenihemanth02@gmail.com"
sx={{ color: "#fff" }}
>
<EmailIcon />
</IconButton>
</Stack>

{/* Contact Form */}

<TextField
  label="Your Name"
  variant="outlined"
  fullWidth
  sx={{
    mb: 3,
    "& .MuiOutlinedInput-root": {
      color: "#fff",
      "& fieldset": {
        borderColor: "#00bcd4",
      },
      "&:hover fieldset": {
        borderColor: "#00e5ff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#00e5ff",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#ccc",
    },
  }}
/>

<TextField
  label="Your Email"
  variant="outlined"
  fullWidth
  sx={{
    mb: 3,
    "& .MuiOutlinedInput-root": {
      color: "#fff",
      "& fieldset": {
        borderColor: "#00bcd4",
      },
      "&:hover fieldset": {
        borderColor: "#00e5ff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#00e5ff",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#ccc",
    },
  }}
/>

<TextField
  label="Message"
  variant="outlined"
  multiline
  rows={4}
  fullWidth
  sx={{
    mb: 3,
    "& .MuiOutlinedInput-root": {
      color: "#fff",
      "& fieldset": {
        borderColor: "#00bcd4",
      },
      "&:hover fieldset": {
        borderColor: "#00e5ff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#00e5ff",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#ccc",
    },
  }}
/>

<Button
  variant="contained"
  fullWidth
  sx={{
    mt: 2,
    py: 1.5,
    background: "linear-gradient(45deg, #00e5ff, #00bcd4)",
    color: "#000",
    fontWeight: "bold",
    borderRadius: "30px",
    "&:hover": {
      background: "linear-gradient(45deg, #00bcd4, #0097a7)",
    },
  }}
>
  Send Message →
</Button>

</Stack>
</Box>
</Grid>

</Grid>
</Container>
</Box>
 );
}

export default Contact;