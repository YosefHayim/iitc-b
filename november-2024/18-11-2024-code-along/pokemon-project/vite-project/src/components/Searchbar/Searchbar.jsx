import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ setInput }) {
  const navigateSearch = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const formObject = new FormData(e.target);
    const inputValue = formObject.get("searchInput");
    setInput(inputValue);
    navigateSearch(`/search/${inputValue}`);
  };

  return (
    <Box component="form" noValidate onSubmit={handleSearchSubmit}>
      <TextField
        name="searchInput"
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={{
          background: "#ffffff40",
          borderRadius: "100em",
          width: "70vw",
          "& .MuiOutlinedInput-root": {
            fontFamily: "Oswald",
            color: "#ffffff94",
            borderRadius: "100em",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderRadius: "100em",
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "100em",
            border: "none",
          },
          "& .MuiInputLabel-root": {
            color: "#ffffff94",
            "&.Mui-focused": {
              color: "#ffffff94",
            },
          },
        }}
      />
    </Box>
  );
}
