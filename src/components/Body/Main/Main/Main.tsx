import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Photos from "../Photos/Photos";
import Slider from "../Slider/Slider";

function Main() {
  document.title = "پت شاپ فینیکس";
  const { emailValue, loggedIn } = useSelector((state: any) => state.loggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedIn && emailValue === "admin@admin") {
      navigate("/dashboard");
    }
    // eslint-disable-next-line
  }, [emailValue, loggedIn]);
  return (
    <>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", mt: "0.5rem" }}>
        <Photos />
        <Slider />
      </Box>
    </>
  );
}

export default Main;
