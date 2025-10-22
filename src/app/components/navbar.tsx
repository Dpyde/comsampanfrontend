'use client';
import { createTheme, IconButton, Menu, MenuItem, useMediaQuery } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import React from "react";
export default function NavBar() {
  
  const isSmall = useMediaQuery("(max-width:1024px)");
  const isLarge = useMediaQuery("(min-width:1024px)");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const menu =
  isSmall && open
    ? "/navbar/closed-navbar-icon.svg" 
    : "/navbar/navbar-icon.svg"; 
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
        setAnchorEl(null);

  };


  return (
  <div className="flex  fixed items-start justify-end lg:items-center lg:w-6/12 w-12/12 py-5 px-5 lg:px-5 lg:py-2 lg:bg-[#4C5FFF] lg:rounded-bl-xl lg:rounded-br-xl lg:ring-1 lg:ring-white/15 lg:shadow-[0_0_30px_10px_rgba(86,102,255,0.55)]">
    <div className="lg:flex lg:visible invisible w-11/12 justify-center items-center">
      <p className="text-[#FFFFFF] pixel-font text-[64px] translate-y-[-5px] m-0 p-0">COMSAMPANN 2025</p>
    </div>
    <div className="w-[50px] lg:w-1/12 min-w-[50px] h-full flex justify-center lg:justify-end  bg-[#4C5FFF] rounded-xl ring-1 ring-white/15 shadow-[0_0_30px_10px_rgba(86,102,255,0.55)] lg:bg-transparent lg:rounded-none lg:ring-0 lg:shadow-none">
      <IconButton onClick={handleClick}>
        <Image src={menu} alt="navbar icon" width={30} height={30} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={handleClose}
        slotProps={{
          paper: {className:"ring-1 ring-white/15 mt-2 translate-y-[5px] lg:translate-y-0px[]", sx: { backgroundColor: "#4C5FFF", mt: isLarge ? 5:0, borderRadius: 2,boxShadow:"0 0 30px 10px rgba(86,102,255,0.55)" } },
        }}

      >
        <MenuItem onClick={handleClose}>
          <div className="flex w-full justify-between gap-3 pixel-font text-white ">
            <div className="flex justify-end w-12/12">
              <p className="text-[24px]">EVENT MAP</p>
            </div>
            
            <Image src="/navbar/map.svg" alt="map icon" width={24} height={24} />
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className="flex w-full justify-between gap-3 pixel-font text-white ">
             <div className="flex justify-end w-12/12">
            <p className="text-[24px]">COMPETITION</p>
            </div>
            <Image src="/navbar/target.svg" alt="map icon" width={24} height={24} />
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className="flex w-full justify-between gap-3 pixel-font text-white ">
             <div className="flex justify-end w-12/12">
            <p className="text-[24px]">TIME TABLE</p>
            </div>
            <Image src="/navbar/calendar.svg" alt="map icon" width={24} height={24} />
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className="flex w-full justify-between gap-3 pixel-font text-white ">
             <div className="flex justify-end w-12/12">
            <p className="text-[24px]">HOW TO GO</p>
            </div>
            <Image src="/navbar/destination.svg" alt="map icon" width={24} height={24} />
          </div>
        </MenuItem>
        
      </Menu>
    </div>
  </div>
  
  
);
}