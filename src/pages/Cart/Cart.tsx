import { Box } from "@mui/material";
import React from "react";
import MyButton from "../../components/Utils/Buttons/MyButton/MyButton";

function Cart() {
  document.title = "پت شاپ فینیکس | سبد خرید";
  return (
    <>
      <Box sx={{ width: "100%", px: "1rem", display: "flex", flexDirection: "column", gap: "1rem", my: "1rem" }}>
        <Box sx={{ width: "100%", display: "flex", paddingLeft: "7.3rem" }}>
          <MyButton text="حذف همه" color="error" />
        </Box>
        <Box sx={{ width: "100%", display: "flex", flexWrap: "no-wrap", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <Box component="img" src="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" alt="تصویر محصول" sx={{ width: "5rem", height: "5rem", borderRadius: "8px" }} />
        </Box>
      </Box>
    </>
  );
}

export default Cart;
