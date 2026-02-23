import React from "react";
import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <Box
        component = "footer"
        sx={{
            backgroundColor: "#111",
            color:"#fff",
            py: 0.3,
            
        }}
        >
            <Container maxWidth ="md">
                <Stack spacing={2} alignItems="center">
                    <Typography variant ="h6">
                        Hemanth Polineni
                    </Typography>
                    <Typography variant=" body2" color =" gray">
                        Full Stack Developer | React & Spring Boot 
                    </Typography>

                    <Stack direction="row" spacing ={2}>
                        <IconButton
                            href="https://github.com/hemanthpolineni"
                            target = "_blank"
                            sx = {{color : "White"}}
                            >
                                <GitHubIcon/>
                            </IconButton>
                            <IconButton
                            href="https://in.linkedin.com/in/hemanth-polineni"
                            target = "_blank"
                            sx = {{color : "White"}}
                            >
                                <LinkedInIcon/>
                            </IconButton>
                            <IconButton
                            href="mailto:polinenihemanth02@gamil.com"
                            target = "_blank"
                            sx = {{color : "White"}}
                            >
                                <EmailIcon/>
                            </IconButton>
                    </Stack>

                        <Typography variant ="caption" color="gray">
                             © {new Date().getFullYear()} Hemanth. All rights reserved.
                        </Typography>

                </Stack>
            </Container>
        </Box>
  );
}

export default Footer;