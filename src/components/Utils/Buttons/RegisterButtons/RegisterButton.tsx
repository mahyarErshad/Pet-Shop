import React from "react";
import { Typography, Button, ButtonBase } from "@mui/material";

interface IButton {
  label: string;
}

function RegisterButton(props: IButton) {
  const inputStyle = { width: { lg: "50%", md: "50%", xs: "75%" }, alignSelf: "flex-end" };
  const label = props.label;
  return (
    <>
      <ButtonBase sx={inputStyle}>
        <Button sx={{ p: "0.5rem", width: "100%", alignSelf: "flex-end" }} variant="contained" color="secondary">
          <Typography sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{label}</Typography>
        </Button>
      </ButtonBase>
    </>
  );
}

export default RegisterButton;
