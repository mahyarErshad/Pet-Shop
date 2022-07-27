import { useTheme } from "@mui/system";
import { Box, Typography } from "@mui/material";
import React from "react";
import contact from "../../images/contact.jpg";
import { FaPhoneSquare } from "@react-icons/all-files/fa/FaPhoneSquare";
import { FaWhatsappSquare } from "@react-icons/all-files/fa/FaWhatsappSquare";
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram";
import linkdin from "../../images/linkdin.png";
import "../../Style/global/style.css";

function Terms() {
  document.title = "تماس با ما";
  const theme = useTheme();
  const fontStyle = {
    fontSize: "0.875rem",
    fontWeight: "normal",
    textAlign: "justify",
    textJustify: "inter - word",
    direction: "rtl",
    my: "0.5rem",
    lineHeight: "1.5rem",
  };
  const refrences = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  };
  const linkdinStyle = {
    width: "4rem",
    height: "4rem",
    "&:hover": { transform: "scale(1.2,1.2)" },
    transition: " 1s all",
  };
  const icons = {
    width: "4rem",
    height: "4rem",
    "&:hover": { transform: "scale(1.4,1.4)" },
    transition: " 1s all",
  };
  const wrapper = { width: "100%", display: "flex", alignSelf: "center", justifyContent: "center", alignItems: "center", flexDirection: "row", gap: "1.5rem", mt: "0.5rem" };
  return (
    <Box sx={{ width: "100%", py: "1rem", px: "3rem", direction: "rtl", mb: "1rem", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      <Box component="img" src={contact} alt="terms" sx={{ mb: "0.5rem", alignSelf: "center", width: "31.25rem", height: "16.25rem", borderRadius: "8px" }} />
      <Typography variant="h5" sx={{ fontSize: "1.2rem", fontWeight: "bold", textAlign: "center", direction: "rtl", my: "0.5rem", color: theme.palette.secondary.main }}>
        تماس با ما:{" "}
      </Typography>
      <Typography sx={fontStyle}>باعث افتخار ماست تا نظرات خود را با ما به اشتراک بگذارید.</Typography>
      <Box sx={wrapper}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
          <FaPhoneSquare fontSize={"2rem"} />
          <Box sx={refrences} component="a" className="noDecoration" href="tel: +989120343545">
            09120343545
          </Box>
        </Box>
      </Box>
      <Box sx={wrapper}>
        <Box sx={icons} component="a" className="noDecoration" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=989120343545&text&type=phone_number&app_absent=0" target="_blank">
          <FaWhatsappSquare className=".contact-icons" color={"#28C44C"} fontSize={"4rem"} />
        </Box>
        <Box sx={icons} component="a" className="noDecoration" rel="noreferrer" href="https://t.me/mahyarErshad" target="_blank">
          <FaTelegram className=".contact-icons" color={"#279FDB"} fontSize={"4rem"} />
        </Box>
        <Box sx={linkdinStyle} component="a" className="noDecoration" rel="noreferrer" href="https://www.linkedin.com/in/mahyar-ershad-52ba9a239/" target="_blank">
          <Box component="img" src={linkdin} alt="linkdin" sx={linkdinStyle} />
        </Box>
      </Box>
    </Box>
  );
}

export default Terms;
