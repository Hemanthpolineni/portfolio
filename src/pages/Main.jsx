import React from 'react'
import Home from './Home';
import { Box } from '@mui/material';
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";


function Main() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt:10,
        background:
          "linear-gradient(135deg, #0f172a 0%, #001f26 40%, #00363f 100%)",
        color: "#fff",
      }}
    >


    <>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
    </Box>
  );
}

export default Main