import { Box } from "@mui/material";
import React from "react";

function SingleProduct() {
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", px: { xs: "0.5rem", md: "1rem", alignItems: "center", justifyContent: "center" } }}>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}></Box>
    </Box>
  );
}

export default SingleProduct;
