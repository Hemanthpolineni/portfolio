import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "#home" },
    { label: "About", path: "#about" },
    { label: "Projects", path: "#projects" },
    { label: "Contact", path: "#contact" },
  ];

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <>
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <AppBar
          position="fixed"
          sx={{
            background: "linear-gradient(135deg, #00bcd4, #2196f3)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Hemanth's Portfolio
            </Typography>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component="a"
                  href={item.path}
                  sx={{
                    color: "#fff",
                    mx: 1,
                    "&:hover": {
                      backgroundColor: "rgba(16, 15, 15, 0.1)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Mobile Icon */}
            <IconButton
              sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </motion.div>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            background: "linear-gradient(135deg, #00bcd4, #2196f3)",
            color: "#fff",
          },
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton component="a" href={item.path}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;