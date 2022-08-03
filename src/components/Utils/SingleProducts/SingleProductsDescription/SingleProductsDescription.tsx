import { Box, Typography } from "@mui/material";
import React from "react";

function SingleProductsDescription() {
  return (
    <>
      <Box sx={{ width: "100%", display: "flex", px: "1rem", justifyContent: "flex-end", mt: "1rem" }}>
        <Typography dir="rtl" sx={{ fontSize: "1.5rem", fontWeight: "bold" }} variant="h5">
          توضیحات محصول:
        </Typography>
      </Box>
    </>
  );
}

export default SingleProductsDescription;
