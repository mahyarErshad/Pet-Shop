import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { separateNumber } from "../../functions/functions";

function DashboardCartHistory() {
  const { history } = useSelector((state: any) => state.cart);
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {history.length &&
          history.map((order: any) => {
            return (
              <Box key={order.id} sx={{ px: "0.5rem", border: "solid 1px #000", height: "3rem", borderRadius: "8px", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "row-reverse", gap: "3rem" }}>
                <Typography>{order.cartID}</Typography>
                <Typography>{order.user}</Typography>
                <Typography dir="rtl" sx={{ fontSize: "1rem", fontWeight: "normal" }}>
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
