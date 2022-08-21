import { Box, Input } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsSelect from "../../../components/Utils/SelectButton/ProductsSelect/ProductsSelect";

function ProductsHeader() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const { products } = useSelector((state: any) => state.products);
  function handleSearch(e: any) {
    e.preventDefault();
  }
  return (
    <>
      <Box sx={{ px: "1rem", mt: "1rem", mb: "1.5rem", display: "flex", justifyContent: "center", alignItems: "center", gap: { lg: "13rem", md: "5rem", sm: "1rem", xs: "0.5rem" }, flexWrap: "wrap", flexDirection: { xs: "column-reverse", md: "row" } }}>
        <Box sx={{ display: "flex", gap: "1.5rem", justifyContent: "center", alignItems: "center", flexWrap: "wrap", flexDirection: "row-reverse" }}>
          <ProductsSelect label="برند" categories={["رویال کنین", "جوسرا", "رفلکس"]} />
          <ProductsSelect label="قیمت" categories={["کمترین", "بیشترین"]} />
          <ProductsSelect label="کشور سازنده" categories={["آلمان", "فرانسه", "ترکیه", "ایران"]} />
        </Box>
        <Box sx={{ display: "flex", gap: "1.5rem", justifyContent: "center", alignItems: "center" }}>
          <Box onSubmit={handleSearch} component="form">
            <Input onChange={(e) => setTitle(e.target.value)} dir="rtl" color="secondary" sx={{ width: "14.4025rem" }} placeholder="جستجو کنید" />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ProductsHeader;
