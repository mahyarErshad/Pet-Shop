import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

interface props {
  width?: string;
  height?: string;
  fontSize?: string;
}

function InDeButton(props: props) {
  const screen = props.width || "2.5612rem";
  const buttons = props.width || "";
  const height = props.height || "2.2813rem";
  const fontSize = props.fontSize || "2rem";
  const buttonsStyle = { width: buttons, fontSize, height };
  return (
    <>
      <ButtonGroup disableElevation variant="contained" color="secondary">
        <Button sx={buttonsStyle}>+</Button>
        <Box sx={{ width: screen, height, backgroundColor: "#ECEFF1", display: "flex", justifyContent: "center", alignItems: "center", borderTop: "1px solid #000", borderBottom: "1px solid #000" }}>
          <Typography sx={{ fontSize }} variant="h5" color="#000">
            ۰
          </Typography>
        </Box>
        <Button sx={buttonsStyle}>-</Button>
      </ButtonGroup>
    </>
  );
}

export default InDeButton;
