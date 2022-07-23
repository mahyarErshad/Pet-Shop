import { Box, useTheme } from "@mui/material";
import React from "react";
import FooterPhotos from "../FooterPhotos/FooterPhotos";
import FooterTexts from "../FooterTexts/FooterTexts";

function Footer() {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ backgroundColor: "#ECEFF1", borderTop: `0.0625rem solid ${theme.palette.secondary.main}`, mt: "0.5rem", p: "0.5rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <FooterPhotos />
        <FooterTexts />
      </Box>
    </>
  );
}

export default Footer;
