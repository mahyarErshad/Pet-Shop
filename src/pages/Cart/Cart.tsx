import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import InDeButton from "../../components/Utils/Buttons/InDeButton/InDeButton";
import MyButton from "../../components/Utils/Buttons/MyButton/MyButton";
import "../../Style/global/style.css";

function Cart() {
  document.title = "پت شاپ فینیکس | سبد خرید";
  return (
    <>
      <Box sx={{ width: "100%", px: "1rem", display: "flex", flexDirection: "column", gap: "1rem", my: "1rem" }}>
        <Box sx={{ width: "100%", display: "flex", paddingLeft: "7.3rem" }}>
          <MyButton text="حذف همه" color="error" />
        </Box>
        <Box sx={{ width: { xs: "100%", sm: "100%", md: "70%", lg: "60%" }, my: "0.5rem", display: "flex", flexWrap: "wrap", flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center", gap: "0.5rem", borderRadius: "16px", border: "1px solid #ECEFF1", p: "0.5rem", alignSelf: "center" }}>
          <Box className="noDecoration" component={Link} to="/id" sx={{ width: { xs: "50%", sm: "40%", md: "50%" }, display: "flex", flexDirection: "row-reverse", gap: "0.2rem", justifyContent: "center", alignItems: "center" }}>
            <Box component="img" src="https://rabinseh.com/wp-content/uploads/2022/06/4-dgdd-247x247.jpg" alt="تصویر محصول" sx={{ width: "3rem", height: "3rem", borderRadius: "50%" }} />
            <Typography dir="rtl" variant="h5" sx={{ fontSize: "1rem", color: "#000", fontWeight: "normal", textOverflow: "ellipsis", overflow: "hidden" }}>
              غذای خشک گربه پرشین رویال کنین
            </Typography>
          </Box>
          <Box sx={{ width: { xs: "40%", sm: "45%", md: "40%" }, display: "flex", flexDirection: { xs: "column-reverse", sm: "row-reverse" }, gap: "0.5rem", justifyContent: "center", alignItems: "center" }}>
            <InDeButton width="2.5rem" height="2rem" fontSize="1.2rem" />
            <Typography dir="rtl" variant="h5" sx={{ fontSize: "1rem", fontWeight: "normal", textAlign: "center", whiteSpace: "nowrap", overflow: "hidden" }}>
              ۱.۲۰۰.۰۰۰ تومان
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Cart;
