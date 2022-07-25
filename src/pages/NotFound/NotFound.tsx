import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import gif from "../../images/404/404.gif";
import "../../Style/global/style.css";

function NotFound() {
  document.title = "صفحه مورد نظر یافت نشد";
  return (
    <>
      <Box sx={{ width: "100%", height: "80vh", display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column" }}>
        <Typography variant="h5" sx={{ textAlign: "center", mt: "1rem", mb: "0.5rem" }}>
          صفحه مورد نظر یافت نشد
        </Typography>
        <Link className="noDecoration" to="/">
          بازگشت به صفحه اصلی
        </Link>
        <Box component="img" src={gif} sx={{ width: "100%", height: "80%", objectFit: "contain" }} />
      </Box>
    </>
  );
}

export default NotFound;
