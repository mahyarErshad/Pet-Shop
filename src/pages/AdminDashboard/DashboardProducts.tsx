import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

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
  function handleDelete(id: string | number) {
    const filteredProducts = products.filter((item: any) => item.id !== id);
    setProducts(filteredProducts);
  }
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {products.length &&
          products.map((product: any) => {
            return (
              <Box sx={{ px: "0.5rem", border: "solid 1px #000", height: "3rem", borderRadius: "8px", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "row-reverse", gap: "3rem" }}>
                <Typography>{product.email}</Typography>
                <Typography>{product.password}</Typography>
                <Box sx={{ display: "flex", gap: ".5rem" }}>
                  <Button onClick={() => handleDelete(product.id)} sx={{ height: "2.5rem" }} variant="outlined" color="error">
                    حذف
                  </Button>
                </Box>
              </Box>
            );
          })}
      </Box>
    </>
  );
}

export default DashboardProducts;
