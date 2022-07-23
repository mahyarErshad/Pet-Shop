import { Box, Typography, useTheme } from "@mui/material";
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
    gap: "0.5rem",
  };
  return (
    <>
      <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row-reverse", gap: "1rem" }}>
        <Box sx={photoStyle}>
          <Box component="img" src={backup} alt="backup" />
          <Typography>پشتیبانی ۲۴ ساعته</Typography>
        </Box>
      </Box>
    </>
  );
}

export default FooterPhotos;
