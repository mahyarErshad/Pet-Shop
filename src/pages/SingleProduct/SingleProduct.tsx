import { Box } from "@mui/material";
import React from "react";
import SingleProductImage from "../../components/Utils/SingleProducts/SingleProductImage/SingleProductImage";
import SingleProductsDetails from "../../components/Utils/SingleProducts/SingleProductsDetails/SingleProductsDetails";

function SingleProduct() {
  return (
    <Box sx={{ width: "100%", mb: "1rem", display: "flex", flexDirection: "column", px: { xs: "0.5rem", md: "1rem", alignItems: "center", justifyContent: "center", gap: "0.5rem" } }}>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row-reverse", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: "0.5rem" }}>
        <SingleProductImage image="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" />
        <SingleProductsDetails />
      </Box>
    </Box>
  );
}

export default SingleProduct;
