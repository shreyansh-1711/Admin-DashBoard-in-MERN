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
import { useTheme, Toolbar , AppBar, IconButton, InputBase} from "@mui/material";


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
    <Toolbar sx={{justifyContent: "space-between"}}>
        {/* Left Side  */}
        <FlexBetween>
            <IconButton onClick={()=> console.log('open/close sidebar')}>
                <MenuIcon />
            </IconButton>
            <FlexBetween
                backgroundColor={theme.palette.background.alt}
                borderRadius="9px"
                gap="3rem"
                p="0.1rem 1.5rem"
            >
                <InputBase placeholder="Search..." />
                <IconButton>
                    <Search />
                </IconButton>

            </FlexBetween>
        </FlexBetween>

    </Toolbar>

  </AppBar>
};

export default Navbar;
