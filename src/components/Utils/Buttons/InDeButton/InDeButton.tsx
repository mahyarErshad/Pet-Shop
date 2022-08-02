import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

interface props {
  width?: string;
}

function InDeButton(props: props) {
  const width = props.width || "2.5612rem";
  return (
    <>
      <ButtonGroup disableElevation variant="contained" color="secondary">
        <Button>+</Button>
        <Box sx={{ width, height: "2.2813rem", backgroundColor: "#ECEFF1", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid #000" }}>
          <Typography variant="h5" color="#000">
            ۰
          </Typography>
        </Box>
        <Button>-</Button>
      </ButtonGroup>
    </>
  );
}

export default InDeButton;
