import { Box } from "@mui/material";
import ProductsSelect from "../../components/Utils/SelectButton/ProductsSelect/ProductsSelect";
import SearchBar from "../../components/Utils/SearchBar/SearchBar";
import React from "react";

function ProducstHeader() {
  return (
    <>
      <Box sx={{ mt: "1rem", mb: "1.5rem", display: "flex", justifyContent: "center", alignItems: "center", gap: { lg: "13rem", md: "5rem", xs: "0.5rem" }, flexWrap: "wrap", flexDirection: { xs: "column-reverse", md: "row" } }}>
        <Box sx={{ display: "flex", gap: "1.5rem", justifyContent: "center", alignItems: "center", flexWrap: "wrap", flexDirection: "row-reverse" }}>
          <ProductsSelect label="دسته بندی ها" categories={["خاک گربه", "غذای گربه", "اسباب بازی گربه"]} />
          <ProductsSelect label="برند" categories={["رویال کنین", "جوسرا", "رفلکس"]} />
          <ProductsSelect label="قیمت" categories={["کمترین", "بیشترین"]} />
        </Box>
        <Box sx={{ display: "flex", gap: "1.5rem", justifyContent: "center", alignItems: "center", alignSelf: { md: "flex-end", xs: "center" } }}>
          <SearchBar />
        </Box>
      </Box>
    </>
  );
}

export default ProducstHeader;
