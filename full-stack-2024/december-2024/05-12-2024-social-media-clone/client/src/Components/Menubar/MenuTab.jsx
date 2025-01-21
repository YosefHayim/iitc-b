import { FaRegBell } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";

const iconConfiguration = {
  borderRadius: "0.5em",
  color: "white",
  paddingRight: "0.5em",
  paddingLeft: "0.5em",
  minWidth: "auto",
  maxWidth: "auto",
  "&.Mui-selected": {
    color: "white",
    background: "#1D2A46",
  },
  "& .MuiBottomNavigationAction-label": {
    fontSize: "0.7em",
  },
  "&:hover": {
    background: "#1D2A46",
  },
};

const MenuTabs = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    if (value === newValue) {
      setValue(0);
    } else {
      setValue(newValue);
    }
  };

  return (
    <BottomNavigation
      sx={{
        height: "3em",
        background: "#ffffff0d",
        borderRadius: "0.5em",
        marginRight: "1em",
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Notifications"
        value="Notifications"
        sx={iconConfiguration}
        icon={<FaRegBell />}
      />
      <BottomNavigationAction
        label="Messages"
        value="Messages"
        sx={iconConfiguration}
        icon={<IoMailUnreadOutline />}
      />
    </BottomNavigation>
  );
};
export default MenuTabs;
