import { Box } from "@mui/material";
import React from "react";
import Cards from "../../../components/Utils/Cards/Cards";
import PaginationComponent from "../../../components/Utils/PaginationComponent/PaginationComponent";
import ProductsHeader from "../ProductsHeader/ProductsHeader";

function Products() {
  document.title = "محصولات | پت شاپ فینیکس";
  return (
    <>
      <Box>
        <ProductsHeader />
        <Box sx={{ mb: "1rem", width: "100%", px: "1rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <Cards title="غذای خشک گربه پرشین رویال کنین" image="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" price={1200000} />
          <Cards title="غذای خشک گربه پرشین رویال کنین" image="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" price={1200000} />
          <Cards title="غذای خشک گربه پرشین رویال کنین" image="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" price={1200000} />
          <Cards title="غذای خشک گربه پرشین رویال کنین" image="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" price={1200000} />
          <Cards title="غذای خشک گربه پرشین رویال کنین" image="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" price={1200000} />
          <Cards title="غذای خشک گربه پرشین رویال کنین" image="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" price={1200000} />
        </Box>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", mb: "1rem" }}>
          <PaginationComponent page={10} />
        </Box>
      </Box>
    </>
  );
}

export default Products;
