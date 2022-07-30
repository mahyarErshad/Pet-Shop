import { Box } from "@mui/material";
import ProductsSelect from "../../components/Utils/SelectButton/ProductsSelect/ProductsSelect";
import React from "react";

function Products() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Box sx={{ mb: "1rem", display: "flex", gap: "1.5rem", justifyContent: "center", alignItems: "center", flexWrap: "wrap", flexDirection: "row-reverse" }}>
          <ProductsSelect label="دسته بندی ها" categories={["خاک گربه", "غذای گربه", "اسباب بازی گربه"]} />
          <ProductsSelect label="برند" categories={["رویال کنین", "جوسرا", "رفلکس"]} />
          <ProductsSelect label="قیمت" categories={["کمترین", "بیشترین"]} />
        </Box>
      </Box>
    </>
  );
}

export default Products;
