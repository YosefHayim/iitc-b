import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

export default function TemporaryDrawer({ setOpen, open }) {
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        position: "static",
        width: 250,
        height: "100%",
        backgroundColor: "black",
        color: "white",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {[
          { text: "Home", path: "/", icon: <HomeIcon /> },
          { text: "About Us", path: "/about-us", icon: <InfoIcon /> },
          {
            text: "Contact Us",
            path: "/contact-us",
            icon: <ContactMailIcon />,
          },
          { text: "PokedeX", path: "/pokedex", icon: <CatchingPokemonIcon /> },
          {
            text: "Custom Pokemon",
            path: "/createCustomPokemon",
            icon: <AddCircleIcon />,
          },
          { text: "Login", path: "/login", icon: <LoginIcon /> },
          {
            text: "Register",
            path: "/register",
            icon: <AppRegistrationIcon />,
          },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                color: "white",
                fontFamily: "Oswald",
                "&:hover": {
                  backgroundColor: "gray",
                },
              }}
            >
              {item.icon}
              <ListItemText primary={item.text} sx={{ marginLeft: 2 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Button onClick={toggleDrawer(true)}></Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "black",
            color: "white",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </>
  );
}
