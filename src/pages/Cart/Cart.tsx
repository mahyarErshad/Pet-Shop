import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../../components/Utils/CartItem/CartItem";
import CartOperationSection from "./CartOperationSection";
import catInBasket from "../../images/catInBasket.jpg";
import CustomModal from "../../components/Utils/CustomModal/CustomModal";

function Cart() {
  document.title = "پت شاپ فینیکس | سبد خرید";
  const { cartItems, quantity } = useSelector((state: any) => state.cart);

  if (quantity < 1) {
    return (
      <Box sx={{ width: "100%", p: "1rem", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", my: "1rem" }}>
        <Box sx={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "bold", color: "#EE5564" }}>سبد خرید شما خالی است</Box>;
        <Box component="img" src={catInBasket} alt="empty basket" sx={{ width: "28.125rem", height: "15.625rem", borderRadius: "8px" }} />
      </Box>
    );
  } else {
    return (
      <>
        <Box sx={{ width: "100%", px: "1rem", display: "flex", flexDirection: "column", gap: "1rem", mt: "1rem", mb: "4.3rem" }}>
          <CartOperationSection />
          <CustomModal />
          {cartItems.map((item: any) => {
            return <CartItem id={item.id} key={item.id} image={item.image} title={item.title} price={item.price} />;
          })}
        </Box>
      </>
    );
  }
}

export default Cart;
