import { Box } from "@mui/material";
import React from "react";
import Photos from "../Photos/Photos";
import Slider from "../Slider/Slider";

function Main() {
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
