import { Box } from "@mui/material";
import React from "react";
import MyButton from "../../components/Utils/Buttons/MyButton/MyButton";
import CartItem from "../../components/Utils/CartItem/CartItem";

function Cart() {
  document.title = "پت شاپ فینیکس | سبد خرید";
  return (
    <>
      <Box sx={{ width: "100%", px: "1rem", display: "flex", flexDirection: "column", gap: "1rem", my: "1rem" }}>
        <Box sx={{ width: "100%", display: "flex", paddingLeft: "7.3rem" }}>
          <MyButton text="حذف همه" color="error" />
        </Box>
        <CartItem image="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" title="غذای خشک گربه پرشین رویال کنین" price={1200000} />
      </Box>
    </>
  );
}

export default Cart;
