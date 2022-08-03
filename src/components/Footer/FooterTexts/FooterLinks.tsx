import { Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../../../Style/global/style.css";

interface FooterTextsProps {
  text: string;
  link: string;
}

function FooterLinks(props: FooterTextsProps) {
  const theme = useTheme();
  const { text, link } = props;
  const fontStyle = {
    fontSize: "0.8rem",
    color: "#4A5F73",
    fontWeight: "bold",
    cursor: "pointer",
    direction: "rtl",
    marginRight: {
      xs: "1rem",
      md: "3rem",
      lg: "5rem",
    },
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  };
  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <Link to={link} className="noDecoration">
        <Typography onClick={() => goToTop()} sx={fontStyle}>
          {text}
        </Typography>
      </Link>
    </>
  );
}

export default FooterLinks;
