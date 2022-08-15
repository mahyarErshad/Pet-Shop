import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../../components/Utils/CartItem/CartItem";
import CartOperationSection from "./CartOperationSection";

function Cart() {
  document.title = "پت شاپ فینیکس | سبد خرید";
  const { cartItems, amount, total } = useSelector((state: any) => state.cart);
  return (
    <>
      <Box sx={{ width: "100%", px: "1rem", display: "flex", flexDirection: "column", gap: "1rem", my: "1rem" }}>
        <CartOperationSection />
        <CartItem image="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" title="غذای خشک گربه پرشین رویال کنین" price={1200000} />
        <CartItem image="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" title="غذای خشک گربه پرشین رویال کنین" price={1200000} />
        <CartItem image="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" title="غذای خشک گربه پرشین رویال کنین" price={1200000} />
      </Box>
    </>
  );
}

export default Cart;
