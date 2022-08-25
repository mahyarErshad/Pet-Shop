import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { separateNumber } from "../../functions/functions";

function DashboardProducts() {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    fetch("/api/products/all")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", overflow: "scroll", height: "85vh" }}>
        {products.length &&
          products.map((product: any) => {
            return (
              <Box key={product.id} sx={{ px: "0.5rem", border: "solid 1px #000", height: "3rem", borderRadius: "8px", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "row-reverse", gap: "5rem" }}>
                <Box sx={{ maxWidth: "70%", display: "flex", flexDirection: "row-reverse", gap: "0.2rem", justifyContent: "flex-start", alignItems: "center" }}>
                  <Box component="img" src={product.image} alt="تصویر محصول" sx={{ width: "3rem", height: "3rem", borderRadius: "50%" }} />
                  <Typography dir="rtl" variant="h5" sx={{ fontSize: "1rem", color: "#000", fontWeight: "normal", textOverflow: "ellipsis", overflow: "hidden" }}>
                    {product.title}
                  </Typography>
                </Box>
                <Box sx={{ width: "25%", display: "flex", flexDirection: { xs: "column-reverse", sm: "row-reverse" }, gap: "4rem", justifyContent: { xs: "center", sm: "flex-start" }, alignItems: "center" }}>
                  <Typography dir="rtl" variant="h5" sx={{ fontSize: "1rem", fontWeight: "normal", textAlign: "center", whiteSpace: "nowrap", overflow: "hidden" }}>
                    {separateNumber(product.balance)} عدد
                  </Typography>
                  <Typography dir="rtl" variant="h5" sx={{ fontSize: "1rem", fontWeight: "normal", textAlign: "center", whiteSpace: "nowrap", overflow: "hidden" }}>
                    {separateNumber(product.price)} تومان
                  </Typography>
                </Box>
              </Box>
            );
          })}
      </Box>
    </>
  );
}

export default DashboardProducts;
