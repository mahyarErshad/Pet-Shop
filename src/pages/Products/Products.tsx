import { Box } from "@mui/material";
import ProductsSelect from "../../components/Utils/SelectButton/ProductsSelect/ProductsSelect";
import React from "react";

function Products() {
  return (
    <>
      <Box>
        <ProductsSelect label="دسته بندی ها" categories={["خاک گربه", "غذای گربه", "اسباب بازی گربه"]} />
      </Box>
    </>
  );
}

export default Products;
