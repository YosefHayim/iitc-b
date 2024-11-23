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
        position="static"
        sx={{
          background: "none",
          boxShadow: "none",
          backgroundColor: "transparent",
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
              mr: 2,
              borderRadius: "0.2em",
              marginTop: "0.4em",
              "&:hover": {
                background: "gray",
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
