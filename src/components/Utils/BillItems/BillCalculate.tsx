import { Box, Typography } from "@mui/material";
import React from "react";
import { separateNumber } from "../../../functions/functions";
interface IProps {
  text: string;
  fee: number;
  discount?: boolean;
}

function BillCalculate(props: IProps) {
  const { text, fee, discount } = props;
  const color = discount && fee > 0 ? "#2E7D31" : "#000";
  return (
    <>
      <Box sx={{ width: { xs: "70%", sm: "50%", md: "30%" }, display: "flex", flexWrap: "wrap", flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center", gap: "0.5rem", border: "1px solid #ECEFF1", p: "0.5rem", alignSelf: "center" }}>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "row-reverse", gap: "2rem", justifyContent: "space-between", alignItems: "center", ps: "10%" }}>
          <Typography dir="rtl" sx={{ fontSize: "1rem", color, fontWeight: "normal" }}>
            {text}
          </Typography>
          <Typography dir="rtl" sx={{ fontSize: "1rem", color, fontWeight: "normal" }}>
            {separateNumber(fee)} تومان
          </Typography>
        </Box>{" "}
      </Box>
    </>
  );
}

export default BillCalculate;
