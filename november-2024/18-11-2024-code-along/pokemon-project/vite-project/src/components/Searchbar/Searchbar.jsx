import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

export default function SearchBar() {
  return (
    <Box component="form" noValidate>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={{
          background: "#ffffff40",
          borderRadius: "100em",
          width: "70vw",
          "& .MuiOutlinedInput-root": {
            color: "#ffffff94",
          },
          "& .MuiInputLabel-root": {
            color: "#ffffff94",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#ffffff94" }} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
