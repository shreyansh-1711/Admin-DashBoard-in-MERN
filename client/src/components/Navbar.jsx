import React , { useState} from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import profileImage from "assets/shreyansh.jpg";
import { useTheme } from "@nivo/core";


const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useTheme();


  return <AppBar
  sx={{
  positiom : "static",
  background : "none",
  boxShadow : "none",
  }}
  >

  </AppBar>
};

export default Navbar;
