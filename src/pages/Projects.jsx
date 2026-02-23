import React, { useState } from "react";
import {
Box,
Container,
Typography,
Grid,
CardContent,
CardMedia,
Button,
Modal,
} from "@mui/material";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

function Projects() {
const [open, setOpen] = useState(false);
const [selectedProject, setSelectedProject] = useState(null);

const handleOpen = (project) => {
setSelectedProject(project);
setOpen(true);
 };

const handleClose = () => {
setOpen(false);
setSelectedProject(null);
 };

return (
<Box
sx={{
minHeight: "100vh",
py: 10,
color: "#fff",
 }}
>
<Container maxWidth="lg">
<Typography variant="h3" sx={{ fontWeight: "bold" }}>
 My Projects
</Typography>

<Typography
sx={{
color: "#00bcd4",
mt: 1,
mb: 6,
fontStyle: "italic",
 }}
>
 Some Of My Distinguished Works
</Typography>

<Grid container spacing={4}>
{projects.map((project) => (
<Grid item xs={12} sm={6} md={4} key={project.id}>

<motion.div
initial={{ opacity: 0, y: 60 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
>

<Tilt glareEnable glareMaxOpacity={0.3}>

<Box
sx={{
padding: "2px",
borderRadius: 3,
background:
"linear-gradient(135deg, #ff4c60, #00e5ff)",
 }}
>
<Box
sx={{
borderRadius: 3,
backgroundColor: "#0d1022ff",
overflow: "hidden",
position: "relative",
transition: "0.4s",
"&:hover .overlay": {
opacity: 1,
 },
"&:hover img": {
transform: "scale(1.1)",
 },
 }}
>
<CardMedia
component="img"
image={project.image}
alt={project.title}
sx={{
height: 250,
width: 350,
objectFit: "cover",
transition: "transform 0.5s ease",
 }}
/>

{/* Overlay */}
<Box
className="overlay"
sx={{
position: "absolute",
inset: 0,
background:
"rgba(0,0,0,0.6)",
display: "flex",
justifyContent: "center",
alignItems: "center",
opacity: 0,
transition: "0.4s",
 }}
>
<Button
variant="contained"
sx={{
background:
"linear-gradient(45deg, #ff4c60, #00e5ff)",
fontWeight: "bold",
 }}
onClick={() => handleOpen(project)}
>
 View Project
</Button>
</Box>

<CardContent>
<Typography
variant="caption"
sx={{ color: "#ff4c60" }}
>
{project.category}
</Typography>

<Typography
variant="h6"
sx={{ mt: 1 }}
>
{project.title}
</Typography>
</CardContent>
</Box>
</Box>

</Tilt>
</motion.div>
</Grid>
 ))}
</Grid>

{/* Modal */}
<Modal open={open} onClose={handleClose}>
<Box
sx={{
position: "absolute",
top: "50%",
left: "50%",
transform: "translate(-50%, -50%)",
width: { xs: "90%", md: 600 },
bgcolor: "#121b47ff",
color:"#fff",
p: 4,
borderRadius: 3,
boxShadow: 24,
 }}
>
{selectedProject && (
<>
<Typography variant="h5" mb={2}>
{selectedProject.title}
</Typography>
<Typography mb={2}>
{selectedProject.description}
</Typography>
<Button
variant="contained"
href={selectedProject.link}
target="_blank"
sx={{
background:
"linear-gradient(45deg, #ff4c60, #00e5ff)",
 }}
>
 Visit Project
</Button>
</>
 )}
</Box>
</Modal>
</Container>
</Box>
 );
}

export default Projects;