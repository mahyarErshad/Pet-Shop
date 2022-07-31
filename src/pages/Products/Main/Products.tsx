import { Box } from "@mui/material";
import React from "react";
import Cards from "../../../components/Utils/Cards/Cards";
import ProductsHeader from "../ProductsHeader/ProductsHeader";

function Products() {
  return (
    <>
      <Box>
        <ProductsHeader />
        <Box sx={{ mb: "1rem", width: "100%", px: "1rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <Cards title="غذای خشک گربه پرشین رویال کنین" image="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" price="۱.۲۰۰.۰۰۰" />
          <Cards title="غذای خشک گربه پرشین رویال کنین" image="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" price="۱.۲۰۰.۰۰۰" />
          <Cards title="غذای خشک گربه پرشین رویال کنین" image="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" price="۱.۲۰۰.۰۰۰" />
          <Cards title="غذای خشک گربه پرشین رویال کنین" image="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" price="۱.۲۰۰.۰۰۰" />
          <Cards title="غذای خشک گربه پرشین رویال کنین" image="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" price="۱.۲۰۰.۰۰۰" />
          <Cards title="غذای خشک گربه پرشین رویال کنین" image="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" price="۱.۲۰۰.۰۰۰" />
        </Box>
      </Box>
    </>
  );
}

export default Products;
