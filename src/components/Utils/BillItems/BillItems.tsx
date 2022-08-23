import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import InDeButton from "../Buttons/InDeButton/InDeButton";
import "../../../Style/global/style.css";
import { separateNumber } from "../../../functions/functions";

interface IProps {
  image: string;
  title: string;
  price: number;
  id: string | number;
}

function CartItem(props: IProps) {
  const { image, title, price, id } = props;
  return (
    <>
      <Box sx={{ width: { xs: "100%", sm: "100%", md: "70%", lg: "60%" }, display: "flex", flexWrap: "wrap", flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center", gap: "0.5rem", borderRadius: "16px", border: "1px solid #ECEFF1", p: "0.5rem", alignSelf: "center" }}>
        <Box className="noDecoration" component={Link} to={`/product/${id}`} sx={{ width: { xs: "50%", sm: "40%", md: "50%" }, display: "flex", flexDirection: "row-reverse", gap: "0.2rem", justifyContent: "flex-start", alignItems: "center" }}>
          <Box component="img" src={image} alt="تصویر محصول" sx={{ width: "3rem", height: "3rem", borderRadius: "50%" }} />
          <Typography dir="rtl" variant="h5" sx={{ fontSize: "1rem", color: "#000", fontWeight: "normal", textOverflow: "ellipsis", overflow: "hidden" }}>
            {title}
          </Typography>
        </Box>
        <Box sx={{ width: { xs: "40%", sm: "45%", md: "40%" }, display: "flex", flexDirection: { xs: "column-reverse", sm: "row-reverse" }, gap: "0.5rem", justifyContent: { xs: "center", sm: "flex-start" }, alignItems: "center" }}>
          <InDeButton id={id} width="2.5rem" height="2rem" fontSize="1.2rem" />
          <Typography dir="rtl" variant="h5" sx={{ fontSize: "1rem", fontWeight: "normal", textAlign: "center", whiteSpace: "nowrap", overflow: "hidden" }}>
            {separateNumber(price)} تومان
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default CartItem;
