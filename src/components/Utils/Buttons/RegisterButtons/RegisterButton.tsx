import React from "react";
import { Box, Button, ButtonBase } from "@mui/material";

interface IButton {
  title: string;
}

function RegisterButton(props: IButton) {
  const inputStyle = { width: { lg: "50%", md: "50%", xs: "75%" }, alignSelf: "flex-end" };
  const title = props.title;
  return (
    <>
      <ButtonBase sx={inputStyle}>
        <Button sx={{ p: "0.5rem", width: "100%", alignSelf: "flex-end" }} variant="contained" color="secondary">
          <Box component="label" sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
            {title}
          </Box>
        </Button>
      </ButtonBase>
    </>
  );
}

export default RegisterButton;
