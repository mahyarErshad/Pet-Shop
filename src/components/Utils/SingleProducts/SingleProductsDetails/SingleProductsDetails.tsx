import { Typography } from "@mui/material";
import React from "react";
import { separateNumber } from "../../../../functions/functions";
import InDeButton from "../../Buttons/InDeButton/InDeButton";
interface props {
  title: string;
  price: number;
  balance: number;
  fontSize?: string;
}

function SingleProductsDetails(props: props) {
  document.title = props.title;
  const title = props.title;
  const price = props.price;
  const balance = props.balance;
  const fontSize = props.fontSize || "";

  return (
    <>
      <Typography dir="rtl" variant="h5" sx={{ fontSize: "1.5rem", fontWeight: "bold", mt: "1rem" }}>
        {title}
      </Typography>
      <Typography dir="rtl" sx={{ fontSize: "1.2rem", fontWeight: "normal" }}>
        {separateNumber(price)} تومان
      </Typography>
      <Typography dir="rtl" sx={{ fontSize: "1rem", fontWeight: "normal" }}>
        موجود در انبار : {separateNumber(balance)} عدد
      </Typography>
      <InDeButton width="4rem" height="3rem" fontSize={fontSize} />
    </>
  );
}

export default SingleProductsDetails;
