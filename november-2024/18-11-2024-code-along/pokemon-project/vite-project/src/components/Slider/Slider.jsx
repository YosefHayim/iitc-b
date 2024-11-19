import React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const IOSSlider = styled(Slider)(() => ({
  marginLeft: "0.5em",
  color: "#007bff",
  height: 5,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    boxShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
    "&:focus, &:hover, &.Mui-active": {
      boxShadow: "0 0 3px rgba(0, 0, 0, 0.1)",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
    height: 5,
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    backgroundColor: "#d0d0d0",
  },
}));

export default function IOSSliderExample({ length }) {
  return (
    <div style={{ width: 100 }}>
      <IOSSlider
        aria-label="iOS slider"
        value={length}
        valueLabelDisplay="on"
        disabled
      />
    </div>
  );
}
