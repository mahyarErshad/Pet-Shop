import { Box } from "@mui/material";
import React from "react";
import SingleProductImage from "../../components/Utils/SingleProductImage/SingleProductImage";

function SingleProduct() {
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", px: { xs: "0.5rem", md: "1rem", alignItems: "center", justifyContent: "center" } }}>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
        <SingleProductImage image="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" />
      </Box>
    </Box>
  );
}

export default SingleProduct;
