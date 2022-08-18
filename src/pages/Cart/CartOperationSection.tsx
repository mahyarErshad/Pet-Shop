import { Box, ButtonBase, Input, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "../../components/Utils/Buttons/MyButton/MyButton";
import { separateNumber } from "../../functions/functions";
import { setHasDiscount, setPhrase } from "../../redux/slice/cartReducer";
import { changeModalState } from "../../redux/slice/modalSlice";

function CartOperationSection() {
  const [discount, setDiscount] = useState<string>("");
  const dispatch = useDispatch();
  const { total, discountCode, phrase, hasDiscount } = useSelector((state: any) => state.cart);
  const [totalPrice, setTotalPrice] = useState<number>(total);
  const discountValue = discountCode.find((item: any) => item.name === phrase);
  useEffect(() => {
    if (discountValue) {
      dispatch(setHasDiscount(true));
    } else {
      dispatch(setHasDiscount(false));
    } // eslint-disable-next-line
  }, [discountValue]);
  useEffect(() => {
    if (hasDiscount) {
      setTotalPrice(total - total * discountValue.discount);
    } else {
      setTotalPrice(total);
    }
  }, [hasDiscount, total, discountValue]);
  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(setPhrase(discount));
  }
  return (
    <>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.7rem" }}>
        <Box sx={{ width: { xs: "100%", md: "30%" }, px: "1rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
          <MyButton text="ثبت سفارش" />
          <Box onClick={() => dispatch(changeModalState("سبد خرید خالی شود؟"))}>
            <MyButton text="حذف همه" color="error" />
          </Box>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "65%" }, flexDirection: { xs: "column", md: "row-reverse" }, px: "1rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
          <ButtonBase>
            <Typography dir="rtl" sx={{ height: "2.5rem", borderRadius: "12px", px: "1rem", paddingTop: "0.6rem", paddingBottom: "2.5rem", fontSize: "1.2rem", fontWeight: "normal" }} variant="h5">
              جمع کل: {separateNumber(total)} تومان
            </Typography>
          </ButtonBase>
          {hasDiscount ? (
            <ButtonBase>
              <Typography dir="rtl" sx={{ height: "2.5rem", borderRadius: "12px", px: "1rem", paddingTop: "0.6rem", paddingBottom: "2.5rem", fontSize: "1.2rem", fontWeight: "normal", color: "#2E7D31" }} variant="h5">
                قیمت با تخفیف: {separateNumber(totalPrice)} تومان
              </Typography>
            </ButtonBase>
          ) : (
            <Box onSubmit={handleSubmit} component="form">
              <Input onChange={(e) => setDiscount(e.target.value)} dir="rtl" color="secondary" sx={{ width: "14.4025rem" }} placeholder="کد تخفیف دارید؟" />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default CartOperationSection;
