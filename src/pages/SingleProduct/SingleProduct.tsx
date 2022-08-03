import { Box } from "@mui/material";
import React from "react";
import SingleProductImage from "../../components/Utils/SingleProducts/SingleProductImage/SingleProductImage";
import SingleProductsDescription from "../../components/Utils/SingleProducts/SingleProductsDescription/SingleProductsDescription";
import SingleProductsDetails from "../../components/Utils/SingleProducts/SingleProductsDetails/SingleProductsDetails";

function SingleProduct() {
  return (
    <Box sx={{ width: "100%", mb: "1rem", display: "flex", flexDirection: "column", px: { xs: "0.5rem", md: "1rem", alignItems: "center", justifyContent: "center", gap: "0.5rem" } }}>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row-reverse", alignItems: { xs: "center", md: "flex-start" }, justifyContent: { xs: "center", md: "flex-start" }, flexWrap: "wrap", borderBottom: "2px solid #ECEFF1", pb: "0.15rem" }}>
        <SingleProductImage image="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" />
        <SingleProductsDetails title="غذای خشک گربه پرشین رویال کنین" price={1200000} balance={1000} fontSize="3rem" />
      </Box>
      <SingleProductsDescription />
    </Box>
  );
}

export default SingleProduct;
