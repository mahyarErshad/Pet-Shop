import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../../../Style/global/style.css";
import { separateNumber } from "../../../functions/functions";

interface IProps {
  image: string;
  title: string;
  price: number;
  id: string | number;
  amount: number;
}

function BillItems(props: IProps) {
  const { image, title, price, id, amount } = props;
  return (
    <>
      <Box sx={{ width: { xs: "100%", sm: "100%", md: "70%", lg: "60%" }, display: "flex", flexWrap: "wrap", flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center", gap: "0.5rem", border: "1px solid #ECEFF1", p: "0.5rem", alignSelf: "center" }}>
        <Box className="noDecoration" component={Link} to={`/product/${id}`} sx={{ width: "70%", display: "flex", flexDirection: "row-reverse", gap: "0.2rem", justifyContent: "flex-start", alignItems: "center" }}>
          <Box component="img" src={image} alt="تصویر محصول" sx={{ width: "3rem", height: "3rem", borderRadius: "50%" }} />
          <Typography dir="rtl" variant="h5" sx={{ fontSize: "1rem", color: "#000", fontWeight: "normal", textOverflow: "ellipsis", overflow: "hidden" }}>
            {title}
          </Typography>
        </Box>
        <Box sx={{ width: "25%", display: "flex", flexDirection: { xs: "column-reverse", sm: "row-reverse" }, gap: "0.5rem", justifyContent: { xs: "center", sm: "flex-start" }, alignItems: "center" }}>
          <Typography dir="rtl" variant="h5" sx={{ fontSize: "1rem", fontWeight: "normal", textAlign: "center", whiteSpace: "nowrap", overflow: "hidden" }}>
            {separateNumber(amount)} عدد
          </Typography>
          <Typography dir="rtl" variant="h5" sx={{ fontSize: "1rem", fontWeight: "normal", textAlign: "center", whiteSpace: "nowrap", overflow: "hidden" }}>
            {separateNumber(price * amount)} تومان
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default BillItems;
