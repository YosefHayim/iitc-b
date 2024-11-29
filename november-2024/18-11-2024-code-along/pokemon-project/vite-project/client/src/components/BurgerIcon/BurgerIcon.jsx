import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function BurgerIcon({ setOpen }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          background: "none",
          boxShadow: "none",
          color: "white",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Toolbar>
          <IconButton
            onClick={() => setOpen(true)}
            size="large"
            color="inherit"
            aria-label="open drawer"
            sx={{
              background: "linear-gradient(to bottom, #3d3d3d, #1a1a1a)",
              position: "fixed",
              mr: 2,
              borderRadius: "0.2em",
              marginTop: "0.4em",
              transition: "all 0.5s ease-in",
              "&:hover": {
                background: "linear-gradient(to bottom, #2d2d2d, #0f0f0f)",
                borderRadius: "0.2em",
                marginTop: "0.4em",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
