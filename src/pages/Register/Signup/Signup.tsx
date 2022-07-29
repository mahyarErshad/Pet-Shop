import { Typography, FormControl, Button, ButtonBase } from "@mui/material";

import React from "react";
import RegisterInputs from "../../../components/InputField/RegisterInputs/RegisterInputs";

function Signup() {
  const inputStyle = { width: { lg: "50%", md: "50%", xs: "75%" } };
  return (
    <>
      <FormControl sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
        <RegisterInputs label="Email" type="text" />
        <RegisterInputs label="Password" type="Password" />
        <ButtonBase sx={inputStyle}>
          <Button sx={{ p: "0.5rem", width: "100%" }} variant="contained" color="secondary">
            <Typography sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>عضویت</Typography>
          </Button>
        </ButtonBase>
      </FormControl>
    </>
  );
}

export default Signup;
