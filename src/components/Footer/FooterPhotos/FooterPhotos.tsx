import { Box, Typography } from "@mui/material";
import React from "react";
//photos
import backup from "../../../images/footer/backup.jpg";
import certified from "../../../images/footer/certified.jpg";
import express from "../../../images/footer/express.jpg";
import gurantee from "../../../images/footer/gurantee.jpg";
import online from "../../../images/footer/online.jpg";

function FooterPhotos() {
  const photoStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.25rem",
  };
  const fontStyle = {
    fontSize: "0.8rem",
    fontWeight: "bold",
    direction: "rtl",
  };
  return (
    <>
      <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row-reverse", gap: { lg: "4.5rem", md: "1.5rem", xs: "3rem" }, flexWrap: "wrap" }}>
        <Box sx={photoStyle}>
          <Box component="img" src={backup} alt="backup" />
          <Typography sx={fontStyle}>پشتیبانی ۲۴ ساعته</Typography>
        </Box>
        <Box sx={photoStyle}>
          <Box component="img" src={certified} alt="certified" />
          <Typography sx={fontStyle}>ضمانت اصالت کالا</Typography>
        </Box>
        <Box sx={photoStyle}>
          <Box component="img" src={express} alt="express" />
          <Typography sx={fontStyle}>تحویل اکسپرس</Typography>
        </Box>
        <Box sx={photoStyle}>
          <Box component="img" src={gurantee} alt="backup" />
          <Typography sx={fontStyle}>۷ روز ضمانت بازگشت کالا</Typography>
        </Box>
        <Box sx={photoStyle}>
          <Box component="img" src={online} alt="online" />
          <Typography sx={fontStyle}>پرداخت آنلاین</Typography>
        </Box>
      </Box>
    </>
  );
}

export default FooterPhotos;
