import { Box, Typography } from "@mui/material";
import React from "react";
import InDeButton from "../../Buttons/InDeButton/InDeButton";

function SingleProductsDetails() {
  return (
    <Box dir="rtl" sx={{ backgroundColor: "pink", width: { xs: "90%", md: "48%" }, minHeight: "15.625rem", p: "1rem", display: "flex", justifyContent: "flex-start", alignItems: "flex-start", flexDirection: "column", gap: "1rem" }}>
      <Typography dir="rtl" variant="h5" sx={{ fontSize: "1.5rem", fontWeight: "bold", mt: "1rem" }}>
        غذای خشک گربه پرشین رویال کنین
      </Typography>
      <Typography dir="rtl" sx={{ fontSize: "1.2rem", fontWeight: "normal" }}>
        ۱.۲۰۰.۰۰۰ تومان
      </Typography>
      <Typography dir="rtl" sx={{ fontSize: "1rem", fontWeight: "normal" }}>
        موجود در انبار : ۱۰۰۰ عدد
      </Typography>
      <InDeButton />
    </Box>
  );
}

export default SingleProductsDetails;
