import { Box, Typography } from "@mui/material";
import React from "react";
import InDeButton from "../../Buttons/InDeButton/InDeButton";
interface props {
  title: string;
  price: number;
  balance: number;
}

function SingleProductsDetails(props: props) {
  document.title = props.title;
  const title = props.title;
  const price = props.price;
  const balance = props.balance;
  const persian = (number: string) => {
    const persian = number.replace(/\d/g, (d: any) => "۰۱۲۳۴۵۶۷۸۹"[d]);
    return persian;
  };
  function separateNumber(number: number) {
    let newNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    newNumber = persian(newNumber);
    return newNumber;
  }
  return (
    <Box dir="rtl" sx={{ width: { xs: "90%", md: "48%" }, minHeight: "15.625rem", p: "1rem", display: "flex", justifyContent: "flex-start", alignItems: { xs: "center", md: "flex-start" }, flexDirection: "column", gap: "1rem" }}>
      <Typography dir="rtl" variant="h5" sx={{ fontSize: "1.5rem", fontWeight: "bold", mt: "1rem" }}>
        {title}
      </Typography>
      <Typography dir="rtl" sx={{ fontSize: "1.2rem", fontWeight: "normal" }}>
        {separateNumber(price)} تومان
      </Typography>
      <Typography dir="rtl" sx={{ fontSize: "1rem", fontWeight: "normal" }}>
        موجود در انبار : {separateNumber(balance)} عدد
      </Typography>
      <InDeButton width="4rem" height="3rem" />
    </Box>
  );
}

export default SingleProductsDetails;
