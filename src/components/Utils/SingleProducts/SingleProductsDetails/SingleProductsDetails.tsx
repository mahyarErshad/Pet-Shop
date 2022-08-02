import { Box, Typography } from "@mui/material";
import React from "react";

function SingleProductsDetails() {
  return (
    <Box dir="rtl" sx={{ backgroundColor: "pink", width: { xs: "90%", md: "48%" }, minHeight: "15.625rem", p: "1rem", display: "flex", justifyContent: "flex-start", alignItems: "flex-start", flexDirection: "column" }}>
      <Typography dir="rtl" variant="h5" sx={{ fontSize: "1.5rem", fontWeight: "bold", mt: "1rem" }}>
        غذای خشک گربه پرشین رویال کنین
      </Typography>
    </Box>
  );
}

export default SingleProductsDetails;
