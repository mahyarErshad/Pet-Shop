import { Box, Typography } from "@mui/material";
import React from "react";

function SingleProductsDetails() {
  return (
    <Box dir="rtl" sx={{ width: { backgroundColor: "pink", xs: "75%", md: "48%" }, minHeight: "15.625rem", p: "0.7rem", display: "flex", justifyContent: "flex-start", alignItems: "flex-start", flexDirection: "column" }}>
      <Typography dir="rtl" variant="h5" sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        غذای خشک گربه پرشین رویال کنین
      </Typography>
    </Box>
  );
}

export default SingleProductsDetails;
