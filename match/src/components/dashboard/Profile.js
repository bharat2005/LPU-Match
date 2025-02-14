import React, { useState } from "react";
import { Card, CardContent, Typography, Avatar, Box, Chip } from "@mui/material";
import AboutUs from './profile/AboutUs';
import ProfileHome from './profile/ProfileHome';
import EditProfile from './profile/EditProfile';
import { PencilIcon, ShareIcon ,InformationCircleIcon , ArrowLeftStartOnRectangleIcon, CurrencyRupeeIcon} from '@heroicons/react/24/solid';

const ProfileSection = ({ profile }) => {
  const [bool, setBool] = useState(0);

  const handleOptionClick = (option) => {
  
   if (option === "Edit Profile") {
      setBool(1);
    } else if (option === "About Us") {
      setBool(2);
    }
  };

  if (bool == 3){
    return <AboutUs/>
  }
  return (
    <>
    {bool === 0 && <ProfileHome handleOptionClick={handleOptionClick} profile={profile}/>}
    {bool === 1 && <EditProfile setBool={setBool} profile={profile}/>}
    {bool === 2 && <AboutUs setBool={setBool} profile={profile}/>}
  </>
  );
};

export default ProfileSection;
