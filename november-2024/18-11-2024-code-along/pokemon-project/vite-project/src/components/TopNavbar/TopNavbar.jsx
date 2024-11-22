import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./TopNavbar.module.css";
import logo from "/public/images/pokemon-logo.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f4f4f4",
  "&:hover": {
    backgroundColor: "#d3d3d3",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar({ setInput, setOpen }) {
  const navigateSearch = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const formObject = new FormData(e.target);
    const inputValue = formObject.get("searchInput");
    setInput(inputValue);
    navigateSearch(`/search/${inputValue}`);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Toolbar>
          <IconButton
            onClick={() => setOpen(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/home" className={styles.logo}>
            <img src={logo} alt="Logo" />
          </Link>
          <form
            onSubmit={handleSearchSubmit}
            style={{ display: "flex", flexGrow: 1 }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                name="searchInput"
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </form>
          <button className={styles.UserButtonLogin}>
            <Link to="/login" className={styles.TagLink}>
              Login
            </Link>
          </button>
          <button className={styles.UserButtonRegister}>
            <Link to="/register" className={styles.TagLink}>
              Register
            </Link>
          </button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
