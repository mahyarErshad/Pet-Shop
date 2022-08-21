import { Box, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsSelect from "../../../components/Utils/SelectButton/ProductsSelect/ProductsSelect";
import { filterByName, setFilteredProducts } from "../../../redux/slice/productsReducer";

function ProductsHeader() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const { products, searchTerm, brandFilterValue, countryFilterValue, priceFilterValue } = useSelector((state: any) => state.products);
  function handleSearch(e: any) {
    e.preventDefault();
    dispatch(filterByName(title));
  }
  useEffect(() => {
    let tempProducts = [...products];
    if (searchTerm) {
      tempProducts = tempProducts.filter((product: any) => product.title.includes(searchTerm));
    }
    if (brandFilterValue) {
      tempProducts = tempProducts.filter((product: any) => product.brand === brandFilterValue);
    }
    if (countryFilterValue) {
      tempProducts = tempProducts.filter((product: any) => product.country === countryFilterValue);
    }
    if (priceFilterValue) {
      if (priceFilterValue === "بیشترین") {
        tempProducts = tempProducts.sort((a: any, b: any) => b.price - a.price);
      }
      if (priceFilterValue === "کمترین") {
        tempProducts = tempProducts.sort((a: any, b: any) => a.price - b.price);
      }
    }
    dispatch(setFilteredProducts(tempProducts));
    // eslint-disable-next-line
  }, [searchTerm, brandFilterValue, countryFilterValue, priceFilterValue]);
  return (
    <>
      <Box sx={{ px: "1rem", mt: "1rem", mb: "1.5rem", display: "flex", justifyContent: "center", alignItems: "center", gap: { lg: "13rem", md: "5rem", sm: "1rem", xs: "0.5rem" }, flexWrap: "wrap", flexDirection: { xs: "column-reverse", md: "row" } }}>
        <Box sx={{ display: "flex", gap: "1.5rem", justifyContent: "center", alignItems: "center", flexWrap: "wrap", flexDirection: "row-reverse" }}>
          <ProductsSelect label="برند" categories={["رویال کنین", "جوسرا", "رفلکس", "تریکسی", "بیفار"]} />
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
