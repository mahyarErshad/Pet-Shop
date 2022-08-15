import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decreaseAmount, increaseAmount } from "../../../../redux/slice/cartReducer";

interface props {
  width?: string;
  height?: string;
  fontSize?: string;
  id: string | number;
}

function InDeButton(props: props) {
  const { width, height, fontSize, id } = props;
  const screen = width || "2.5612rem";
  const buttons = width || "";
  const buttonsStyle = { width: buttons, fontSize, height };
  const dispatch = useDispatch();
  const amount = useSelector((state: any) => state.cart.cartItems.find((item: any) => item.id === id)?.amount) || 0;
  return (
    <>
      <ButtonGroup dir="rtl" disableElevation variant="contained" color="secondary">
        <Button onClick={() => dispatch(increaseAmount({ id }))} sx={buttonsStyle}>
          +
        </Button>
        <Box sx={{ width: screen, height, backgroundColor: "#ECEFF1", display: "flex", justifyContent: "center", alignItems: "center", borderTop: "1px solid #000", borderBottom: "1px solid #000" }}>
          <Typography sx={{ fontSize }} variant="h5" color="#000">
            {amount}
          </Typography>
        </Box>
        <Button onClick={() => dispatch(decreaseAmount({ id }))} sx={buttonsStyle}>
          -
        </Button>
      </ButtonGroup>
    </>
  );
}

export default InDeButton;
