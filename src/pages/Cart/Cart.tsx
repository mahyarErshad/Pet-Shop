import { Box, Typography } from "@mui/material";
import React from "react";
import InDeButton from "../../components/Utils/Buttons/InDeButton/InDeButton";
import MyButton from "../../components/Utils/Buttons/MyButton/MyButton";

function Cart() {
  document.title = "پت شاپ فینیکس | سبد خرید";
  return (
    <>
      <Box sx={{ width: "100%", px: "1rem", display: "flex", flexDirection: "column", gap: "1rem", my: "1rem" }}>
        <Box sx={{ width: "100%", display: "flex", paddingLeft: "7.3rem" }}>
          <MyButton text="حذف همه" color="error" />
        </Box>
        <Box sx={{ width: "100%", display: "flex", flexWrap: "no-wrap", flexDirection: "row-reverse", gap: "0.5rem", justifyContent: "center", alignItems: "center" }}>
          <Box component="img" src="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" alt="تصویر محصول" sx={{ width: "3rem", height: "3rem", borderRadius: "50%" }} />
          <Typography variant="h5" sx={{ fontSize: "1rem", fontWeight: "normal" }}>
            غذای خشک گربه پرشین رویال کنین
          </Typography>
          <InDeButton />
        </Box>
      </Box>
    </>
  );
}

export default Cart;
