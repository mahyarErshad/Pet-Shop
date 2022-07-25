import { Box } from "@mui/system";
import React from "react";
import gif from "../../images/Loading/Loading.gif";
import circle from "../../images/Loading/circle.gif";
import "../../Style/global/style.css";
import "../../Style/loadingAnimation/loading.css";

function Loading() {
  document.title = "Loading...";
  return (
    <>
      <Box sx={{ width: "100%", height: "90vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", overflow: "hidden", gap: "0" }}>
        <Box component="img" src={circle} sx={{ height: "50%", objectFit: "contain" }} />
        <Box component="img" src={gif} sx={{ height: "100%", objectFit: "contain", animation: "loadingAnimation 5s infinite linear", mt: "-20rem" }} />
      </Box>
    </>
  );
}

export default Loading;
