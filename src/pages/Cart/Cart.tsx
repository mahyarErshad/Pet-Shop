import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../../components/Utils/CartItem/CartItem";
import CartOperationSection from "./CartOperationSection";
import catInBasket from "../../images/catInBasket.jpg";

function Cart() {
  document.title = "پت شاپ فینیکس | سبد خرید";
  const { cartItems, amount, total } = useSelector((state: any) => state.cart);
  if (amount < 1) {
    return (
      <Box sx={{ width: "100%", p: "1rem", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", my: "1rem" }}>
        <Box sx={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "bold", color: "#EE5564" }}>سبد خرید شما خالی است</Box>;
        <Box component="img" src={catInBasket} alt="empty basket" sx={{ width: "28.125rem", height: "15.625rem", borderRadius: "8px" }} />
      </Box>
    );
  } else {
    return (
      <>
        <Box sx={{ width: "100%", px: "1rem", display: "flex", flexDirection: "column", gap: "1rem", my: "1rem" }}>
          <CartOperationSection />
          {cartItems.map((item: any) => {
            return <CartItem image="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" title="غذای خشک گربه پرشین رویال کنین" price={1200000} />;
          })}
        </Box>
      </>
    );
  }
}

export default Cart;
