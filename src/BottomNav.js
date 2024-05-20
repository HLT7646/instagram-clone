import React from "react";
import "./Bottomnav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InstagramIcon from '@mui/icons-material/Instagram';
function BottomNav() {
  return (
    <div className="bottomnav">
       
          <HomeIcon sx={{ width: 30, height: 30 }}/>
        
       
          <ExploreIcon sx={{ width: 30, height: 30 }} />
         
        
       
          <SlideshowIcon sx={{ width: 30, height: 30 }}/>
          
        
       
          <ChatIcon sx={{ width: 30, height: 30 }}/>
         
        
       
          <AddCircleOutlineIcon sx={{ width: 30, height: 30 }}/>
          
        
       
          <AccountCircleIcon sx={{ width: 30, height: 30 }}/>
          
        
     
    </div>
  );
}

export default BottomNav;
