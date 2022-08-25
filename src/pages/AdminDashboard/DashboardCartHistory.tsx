import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { separateNumber } from "../../functions/functions";
import "../../Style/global/style.css";

function DashboardCartHistory() {
  const { history } = useSelector((state: any) => state.cart);
  const color = "#000";
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {history.length &&
          history.map((order: any) => {
            return (
              <Box className="noDecoration" component={Link} to={`/bill/${order.cartID}`} key={order.cartID} sx={{ px: "0.5rem", border: "solid 1px #000", height: "3rem", borderRadius: "8px", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "row-reverse", gap: "3rem" }}>
                <Typography sx={{ color }}>{order.cartID}</Typography>
                <Typography sx={{ color }}>{order.user}</Typography>
                <Typography dir="rtl" sx={{ fontSize: "1rem", fontWeight: "normal", color }}>
                  {separateNumber(order.total - order.discount)} تومان
                </Typography>
              </Box>
            );
          })}
      </Box>
    </>
  );
}

export default DashboardCartHistory;
