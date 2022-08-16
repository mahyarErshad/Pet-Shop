import { Box, Input, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "../../components/Utils/Buttons/MyButton/MyButton";
import { separateNumber } from "../../functions/functions";
import { changeModalState } from "../../redux/slice/modalSlice";

function CartOperationSection() {
  const dispatch = useDispatch();
  const total = useSelector((state: any) => state.cart.total);
  return (
    <>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.7rem" }}>
        <Box sx={{ width: { xs: "100%", md: "30%" }, px: "1rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
          <MyButton text="ثبت سفارش" />
          <Box onClick={() => dispatch(changeModalState())}>
            <MyButton text="حذف همه" color="error" />
          </Box>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "65%" }, flexDirection: { xs: "column", md: "row-reverse" }, px: "1rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
          <Typography dir="rtl" sx={{ height: "2.5rem", borderRadius: "12px", px: "1rem", paddingTop: "0.6rem", paddingBottom: "2.5rem", fontSize: "1.2rem", fontWeight: "normal", backgroundColor: "#D5C9E0" }} variant="h5">
            جمع کل: {separateNumber(total)} تومان
          </Typography>
          <Input dir="rtl" color="secondary" sx={{ width: "14.4025rem" }} placeholder="کد تخفیف دارید؟" />
        </Box>
      </Box>
    </>
  );
}

export default CartOperationSection;
