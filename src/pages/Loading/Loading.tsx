import { Box } from "@mui/system";
import React from "react";
import gif from "../../images/Loading/Loading.gif";
import "../../Style/global/style.css";

function Loading() {
  return (
    <>
      <Box sx={{ width: "100%", height: "80vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <Box component="img" src={gif} sx={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </Box>
    </>
  );
}

export default Loading;
