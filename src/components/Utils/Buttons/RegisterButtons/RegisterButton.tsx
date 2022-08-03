import React from "react";
import { Button, ButtonBase, Typography } from "@mui/material";

interface IButton {
  title: string;
}

function RegisterButton(props: IButton) {
  const inputStyle = { width: { lg: "25%", md: "25%", xs: "37%" }, alignSelf: "flex-end" };
  const { title } = props;
  return (
    <>
      <ButtonBase sx={inputStyle}>
        <Button sx={{ p: "0.5rem", width: "100%", alignSelf: "flex-end" }} variant="contained" color="secondary">
          <Typography sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{title}</Typography>
        </Button>
      </ButtonBase>
    </>
  );
}

export default RegisterButton;
