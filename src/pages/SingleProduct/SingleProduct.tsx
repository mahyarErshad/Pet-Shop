import { Box } from "@mui/material";
import React from "react";

function SingleProduct() {
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", px: { xs: "0.5rem", md: "1rem", alignItems: "center", justifyContent: "center" } }}>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
        <Box component="img" src="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" alt="تصویر محصول" sx={{ width: { xs: "100%", md: "50%" }, minHeight: "15.625rem", maxHeight: "31.25rem", objectFit: "scale-down" }} />
      </Box>
    </Box>
  );
}

export default SingleProduct;
